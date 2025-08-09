using System;
public partial class _Default : System.Web.UI.Page
{
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        // Basit kullanıcı kontrolü (göstermelik)
        if (txtUsername.Text == "admin" && txtPassword.Text == "1234")
        {
            Response.Write("Giriş başarılı!");
        }
        else
        {
            Response.Write("Hatalı kullanıcı adı veya şifre.");
        }
    }
}
