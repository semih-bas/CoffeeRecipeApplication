using System;
using System.Data.SqlClient;
using System.Configuration;

public partial class Login : System.Web.UI.Page
{
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        string userOrEmail = txtUsernameOrEmail.Text.Trim();
        string password = txtPassword.Text;
        if (string.IsNullOrEmpty(userOrEmail) || string.IsNullOrEmpty(password))
        {
            lblMsg.Text = "Lütfen alanları doldurun.";
            return;
        }

        string hash = HashHelper.ComputeSha256Hash(password);
        string connStr = ConfigurationManager.ConnectionStrings["KahveConn"].ConnectionString;                                                                                          

        using (SqlConnection conn = new SqlConnection(connStr))
        {
            conn.Open();
            string sql = "SELECT KullaniciID, KullaniciAdi FROM Users WHERE (KullaniciAdi=@ue OR Email=@ue) AND SifreHash=@hash";
            using (SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Parameters.AddWithValue("@ue", userOrEmail);
                cmd.Parameters.AddWithValue("@hash", hash);
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    if (dr.Read())
                    {
                        int id = Convert.ToInt32(dr["KullaniciID"]);
                        string username = dr["KullaniciAdi"].ToString();

                        Session["UserID"] = id;
                        Session["Username"] = username;

                        // Giriş sonrası yönlendir (isteğe göre)
                        Response.Redirect("AddOrder.aspx");
                    }
                    else
                    {
                        lblMsg.Text = "Giriş başarısız. Bilgileri kontrol edin.";
                    }
                }
            }
        }
    }
}
