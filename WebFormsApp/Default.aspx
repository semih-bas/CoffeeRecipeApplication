<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html>
<html>
<head>
    <title>Giriş Sayfası</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h2>Giriş Yap</h2>
            <asp:TextBox ID="txtUsername" runat="server" Placeholder="Kullanıcı Adı"></asp:TextBox><br />
            <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" Placeholder="Şifre"></asp:TextBox><br />
            <asp:Button ID="btnLogin" runat="server" Text="Giriş Yap" OnClick="btnLogin_Click" />
        </div>
    </form>
</body>
</html>
