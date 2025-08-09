using System;
using System.Data.SqlClient;
using System.Configuration;

public partial class AddOrder : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        // Eðer giriþ yapýlmamýþsa yönlendir
        if (Session["UserID"] == null)
        {
            Response.Redirect("Login.aspx");
        }
    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        // alanlarý al
        string productName = txtProductName.Text.Trim();
        int quantity = 1;
        decimal price = 0;

        int.TryParse(txtQuantity.Text.Trim(), out quantity);
        decimal.TryParse(txtPrice.Text.Trim(), out price);

        int userId = Convert.ToInt32(Session["UserID"]);

        string connStr = ConfigurationManager.ConnectionStrings["KahveConn"].ConnectionString;
        using (SqlConnection conn = new SqlConnection(connStr))
        {
            conn.Open();
            string sql = @"INSERT INTO SiparisGecmisi (MusteriAdi, UrunAdi, Adet, Fiyat, KullaniciID)
                           VALUES (@musteri, @urun, @adet, @fiyat, @kullaniciid)";
            using (SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Parameters.AddWithValue("@musteri", Session["Username"].ToString());
                cmd.Parameters.AddWithValue("@urun", productName);
                cmd.Parameters.AddWithValue("@adet", quantity);
                cmd.Parameters.AddWithValue("@fiyat", price);
                cmd.Parameters.AddWithValue("@kullaniciid", userId);

                int rows = cmd.ExecuteNonQuery();
                if (rows > 0)
                {
                    lblMessage.ForeColor = System.Drawing.Color.Green;
                    lblMessage.Text = "Sipariþ kaydedildi.";
                    // istersen temizle:
                    txtProductName.Text = txtQuantity.Text = txtPrice.Text = "";
                }
                else
                {
                    lblMessage.ForeColor = System.Drawing.Color.Red;
                    lblMessage.Text = "Kaydedilemedi.";
                }
            }
        }
    }
}

