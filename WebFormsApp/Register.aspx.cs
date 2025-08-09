using System;
using System.Data.SqlClient;
using System.Configuration;

public partial class Register : System.Web.UI.Page
{
    protected void btnRegister_Click(object sender, EventArgs e)
    {
        string username = txtUsername.Text.Trim();
        string email = txtEmail.Text.Trim();
        string password = txtPassword.Text;

        if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
        {
            lblMsg.Text = "Kullanıcı adı ve şifre gerekli.";
            return;
        }

        string hash = HashHelper.ComputeSha256Hash(password);

        string connStr = ConfigurationManager.ConnectionStrings["KahveConn"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connStr))
        {
            conn.Open();

            // Kullanıcı adı veya email var mı kontrol et
            string checkSql = "SELECT COUNT(1) FROM Users WHERE KullaniciAdi=@kadi OR Email=@email";
            using (SqlCommand checkCmd = new SqlCommand(checkSql, conn))
            {
                checkCmd.Parameters.AddWithValue("@kadi", username);
                checkCmd.Parameters.AddWithValue("@email", email);
                int exists = Convert.ToInt32(checkCmd.ExecuteScalar());
                if (exists > 0)
                {
                    lblMsg.Text = "Bu kullanıcı adı veya e-posta zaten kullanılıyor.";
                    return;
                }
            }

            // Insert
            string insertSql = "INSERT INTO Users (KullaniciAdi, Email, SifreHash) VALUES (@kadi, @email, @hash); SELECT SCOPE_IDENTITY();";
            using (SqlCommand cmd = new SqlCommand(insertSql, conn))
            {
                cmd.Parameters.AddWithValue("@kadi", username);
                cmd.Parameters.AddWithValue("@email", string.IsNullOrEmpty(email) ? (object)DBNull.Value : email);
                cmd.Parameters.AddWithValue("@hash", hash);
                object idObj = cmd.ExecuteScalar();
                int newUserId = Convert.ToInt32(idObj);

                // Oturum aç (session)
                Session["UserID"] = newUserId;
                Session["Username"] = username;

                // Başarılıysa ana sayfaya yönlendir
                Response.Redirect("AddOrder.aspx");
            }
        }
    }
}
