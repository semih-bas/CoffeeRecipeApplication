using Microsoft.AspNetCore.Mvc;
using AlisverisSitesi.Data;
using AlisverisSitesi.Models;
using AlisverisSitesi.Utilities;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AlisverisSitesi.Controllers
{
    public class KullaniciController : Controller
    {
        private readonly AppDbContext _db;
        public KullaniciController(AppDbContext db) => _db = db;

        [HttpGet]
        public IActionResult KayitOl() => View();

        [HttpPost]
        public async Task<IActionResult> KayitOl(string kullaniciAdi, string email, string sifre)
        {
            if (string.IsNullOrWhiteSpace(kullaniciAdi) ||
                string.IsNullOrWhiteSpace(email) ||
                string.IsNullOrWhiteSpace(sifre))
            {
                ViewBag.Error = "Tüm alanları doldurun.";
                return View();
            }

            bool exists = await _db.Kullanicilar.AnyAsync(u => u.KullaniciAdi == kullaniciAdi || u.Email == email);
            if (exists)
            {
                ViewBag.Error = "Kullanıcı adı veya e-posta zaten kayıtlı.";
                return View();
            }

            var user = new Kullanici
            {
                KullaniciAdi = kullaniciAdi,
                Email = email,
                SifreHash = PasswordHelper.Hash(sifre)
            };

            _db.Kullanicilar.Add(user);
            await _db.SaveChangesAsync();

            // Session set
            HttpContext.Session.SetInt32("UserId", user.Id);
            HttpContext.Session.SetString("Username", user.KullaniciAdi);

            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult Giris() => View();

        [HttpPost]
        public async Task<IActionResult> Giris(string email, string sifre)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(sifre))
            {
                ViewBag.Error = "Girilen alanları kontrol edin.";
                return View();
            }

            string hash = PasswordHelper.Hash(sifre);
            var user = await _db.Kullanicilar.FirstOrDefaultAsync(u => u.Email == email && u.SifreHash == hash);
            if (user == null)
            {
                ViewBag.Error = "E-posta veya şifre hatalı.";
                return View();
            }

            HttpContext.Session.SetInt32("UserId", user.Id);
            HttpContext.Session.SetString("Username", user.KullaniciAdi);

            return RedirectToAction("Index", "Home");
        }

        public IActionResult Cikis()
        {
            HttpContext.Session.Remove("UserId");
            HttpContext.Session.Remove("Username");
            return RedirectToAction("Index", "Home");
        }
    }
}
