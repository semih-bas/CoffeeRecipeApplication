<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Register.aspx.cs" Inherits="Register" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title>Kayıt Ol</title>
</head>
<body>
    <form id="form2" runat="server" style="max-width:480px;margin:20px auto;">
        <h2>Kayıt Ol</h2>
        <asp:Label ID="lblMsg" runat="server" ForeColor="Red"></asp:Label><br />
        <asp:TextBox ID="txtUsername" runat="server" Placeholder="Kullanıcı adı" /><br /><br />
        <asp:TextBox ID="txtEmail" runat="server" Placeholder="E-posta" /><br /><br />
        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" Placeholder="Şifre" /><br /><br />
        <asp:Button ID="Button1" runat="server" Text="Kayıt Ol" OnClick="btnRegister_Click" />
    </form>
</body>
</html>
