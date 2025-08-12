using System;
using System.ComponentModel.DataAnnotations;

namespace AlisverisSitesi.Models
{
    public class Kullanici
    {
        public int Id { get; set; }

        [Required]
        public string KullaniciAdi { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        // Hashlenmiş şifre saklanacak
        [Required]
        public string SifreHash { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
