using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class OrderHistory : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["UserID"] == null)
        {
            Response.Redirect("Login.aspx");
            return;
        }

        if (!IsPostBack)
        {
            LoadOrders();
        }
    }

    private void LoadOrders()
    {
        int userId = Convert.ToInt32(Session["UserID"]);
        string connStr = ConfigurationManager.ConnectionStrings["KahveConn"].ConnectionString;

        using (SqlConnection conn = new SqlConnection(connStr))
        {
            string sql = @"SELECT SiparisID, SiparisTarihi, UrunAdi, Adet, Fiyat
                           FROM SiparisGecmisi
                           WHERE KullaniciID = @uid
                           ORDER BY SiparisTarihi DESC";
            using (SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Parameters.AddWithValue("@uid", userId);
                using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                {
                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    gvOrderHistory.DataSource = dt;
                    gvOrderHistory.DataBind();
                }
            }
        }
    }
}
