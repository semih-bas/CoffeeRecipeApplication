// Models/SiparisGecmisi.cs
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlisverisSitesi.Models
{
    public class SiparisGecmisi
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Kullanici")]
        public int KullaniciId { get; set; }

        [Required]
        [MaxLength(200)]
        public string UrunAdi { get; set; }

        public int Adet { get; set; }

        public DateTime SiparisTarihi { get; set; } = DateTime.Now;

        public Kullanici Kullanici { get; set; }
    }
}
