using Microsoft.EntityFrameworkCore;
using AlisverisSitesi.Models;

namespace AlisverisSitesi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Kullanici> Kullanicilar { get; set; }
        public DbSet<SiparisGecmisi> Siparisler { get; set; }
    }
}
