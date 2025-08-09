<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AddOrder.aspx.cs" Inherits="SeninProjen.AddOrder" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Sipariş Ver</title>
</head>
<body>
    <form id="form1" runat="server">
        <h2>Sipariş Formu</h2>
        <p>
            Ürün Adı:
            <asp:TextBox ID="txtProductName" runat="server"></asp:TextBox>
        </p>
        <p>
            Miktar:
            <asp:TextBox ID="txtQuantity" runat="server" TextMode="Number"></asp:TextBox>
        </p>
        <p>
            Kart Numarası:
            <asp:TextBox ID="txtCardNumber" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:Button ID="btnSubmit" runat="server" Text="Siparişi Gönder" OnClick="btnSubmit_Click" />
        </p>
        <p>
            <asp:Label ID="lblMessage" runat="server" ForeColor="Green"></asp:Label>
        </p>
    </form>
</body>
</html>
