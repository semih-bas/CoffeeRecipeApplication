<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OrderHistory.aspx.cs" Inherits="ProjeAdi.OrderHistory" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Sipariş Geçmişi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
        }
        h2 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
        }
        th, td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #ff9800;
            color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <h2>Sipariş Geçmişiniz</h2>
        <asp:GridView ID="gvOrderHistory" runat="server" AutoGenerateColumns="False">
            <Columns>
                <asp:BoundField DataField="OrderID" HeaderText="Sipariş No" />
                <asp:BoundField DataField="OrderDate" HeaderText="Tarih" DataFormatString="{0:dd.MM.yyyy}" />
                <asp:BoundField DataField="ProductName" HeaderText="Ürün" />
                <asp:BoundField DataField="Quantity" HeaderText="Adet" />
                <asp:BoundField DataField="TotalPrice" HeaderText="Toplam Fiyat" DataFormatString="{0:C}" />
            </Columns>
        </asp:GridView>
    </form>
</body>
</html>
    