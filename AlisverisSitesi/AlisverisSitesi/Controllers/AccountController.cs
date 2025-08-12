using Microsoft.AspNetCore.Mvc;
using AlisverisSitesi.Data;  
using AlisverisSitesi.Models;
using AlisverisSitesi.Utilities;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AlisverisSitesi.Controllers
{
    public class AccountController : Controller
    {
        private readonly AppDbContext _db;
        public AccountController(AppDbContext db) => _db = db;

        [HttpGet]
        public IActionResult Register() => View();

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(string kullaniciAdi, string email, string sifre)
        {
            if (string.IsNullOrWhiteSpace(kullaniciAdi) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(sifre))
            {
                ViewBag.Error = "Lütfen tüm alanları doldurun.";
                return View();
            }

            var exists = await _db.Kullanicilar.AnyAsync(u => u.KullaniciAdi == kullaniciAdi || u.Email == email);
            if (exists)
            {
                ViewBag.Error = "Kullanıcı adı veya e-posta zaten kayıtlı.";
                return View();
            }

            var user = new Kullanici
            {
                KullaniciAdi = kullaniciAdi,
                Email = email,
                SifreHash = PasswordHelper.HashPassword(sifre)
            };

            _db.Kullanicilar.Add(user);
            await _db.SaveChangesAsync();

            // basit cookie ile oturum (daha sonra cookie authentication ekleyebilirsin)
            Response.Cookies.Append("username", user.KullaniciAdi);

            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public IActionResult Login() => View();

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(string kullaniciAdi, string sifre)
        {
            if (string.IsNullOrWhiteSpace(kullaniciAdi) || string.IsNullOrWhiteSpace(sifre))
            {
                ViewBag.Error = "Lütfen tüm alanları doldurun.";
                return View();
            }

            var user = await _db.Kullanicilar.FirstOrDefaultAsync(u => u.KullaniciAdi == kullaniciAdi);
            if (user == null || !PasswordHelper.VerifyPassword(sifre, user.SifreHash))
            {
                ViewBag.Error = "Kullanıcı adı veya şifre hatalı.";
                return View();
            }

            Response.Cookies.Append("username", user.KullaniciAdi);
            return RedirectToAction("Index", "Home");
        }

        public IActionResult Logout()
        {
            Response.Cookies.Delete("username");
            return RedirectToAction("Index", "Home");
        }
    }
}
