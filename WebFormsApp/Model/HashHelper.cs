﻿using System.Security.Cryptography;
using System.Text;

public static class HashHelper
{
    public static string ComputeSha256Hash(string rawData)
    {
        if (string.IsNullOrEmpty(rawData)) return string.Empty;
        using (var sha256 = SHA256.Create())
        {
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(rawData));
            var sb = new StringBuilder();
            foreach (var b in bytes) sb.Append(b.ToString("x2"));
            return sb.ToString();
        }
    }
}

