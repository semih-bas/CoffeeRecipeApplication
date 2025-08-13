// Models/Kullanici.cs
using System;
using System.ComponentModel.DataAnnotations;

namespace AlisverisSitesi.Models
{
    public class Kullanici
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string KullaniciAdi { get; set; }

        [Required]
        [MaxLength(100)]
        public string Email { get; set; }

        [Required]
        [MaxLength(255)]
        public string Sifre { get; set; }
    }
}
