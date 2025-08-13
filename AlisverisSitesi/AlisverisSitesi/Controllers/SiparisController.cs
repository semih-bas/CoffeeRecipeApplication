using Microsoft.AspNetCore.Mvc;
using AlisverisSitesi.Data;
using AlisverisSitesi.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AlisverisSitesi.Controllers
{
    public class SiparisController : Controller
    {
        private readonly AppDbContext _db;
        public SiparisController(AppDbContext db) => _db = db;

        // Kullanıcı sipariş verme sayfası (form)
        [HttpGet]
        public IActionResult Ver()
        {
            // sadece giriş yapanlara izin verebiliriz
            if (HttpContext.Session.GetInt32("UserId") == null)
                return RedirectToAction("Giris", "Kullanici");

            return View();
        }

        // Siparişi kaydet
        [HttpPost]
        public async Task<IActionResult> Ver(string urunAdi, int adet, decimal fiyat)
        {
            var userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null) return RedirectToAction("Giris", "Kullanici");

            var siparis = new SiparisGecmisi
            {
                KullaniciId = userId.Value,
                UrunAdi = urunAdi,
                Adet = adet,
                Fiyat = fiyat,
                SiparisTarihi = DateTime.Now
            };

            _db.Siparisler.Add(siparis);
            await _db.SaveChangesAsync();

            TempData["Success"] = "Siparişiniz başarıyla kaydedildi.";
            return RedirectToAction("Gecmis");
        }

        // Sipariş geçmişi (giriş yapan kullanıcının siparişleri)
        public async Task<IActionResult> Gecmis()
        {
            var userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null) return RedirectToAction("Giris", "Kullanici");

            var list = await _db.Siparisler
                .Where(s => s.KullaniciId == userId.Value)
                .OrderByDescending(s => s.SiparisTarihi)
                .ToListAsync();

            return View(list);
        }
    }
}
