using System.ComponentModel.DataAnnotations;

namespace AlisverisSitesi.Models
{
    public class Siparis
    {
       public int Id { get; set; }
        public string UrunAdi { get; set; }
        public int Miktar { get; set; }
        public decimal Fiyat { get; set; }
        public DateTime SiparisTarihi { get; set; }

        public int KullaniciId { get; set; }
        public Kullanici Kullanici { get; set; }
    }
}



