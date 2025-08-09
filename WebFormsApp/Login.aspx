<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title>Giriş Yap</title>
</head>
<body>
    <form id="form1" runat="server" style="max-width:400px;margin:20px auto;">
        <h2>Giriş Yap</h2>
        <asp:Label ID="lblMsg" runat="server" ForeColor="Red"></asp:Label><br />
        <asp:TextBox ID="txtUsernameOrEmail" runat="server" Placeholder="Kullanıcı adı veya e-posta" /><br /><br />
        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" Placeholder="Şifre" /><br /><br />
        <asp:Button ID="btnLogin" runat="server" Text="Giriş Yap" OnClick="btnLogin_Click" />
    </form>
</body>
</html>
