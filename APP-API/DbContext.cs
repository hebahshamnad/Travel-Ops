using APP_API;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    public DbSet<Signup> Signups { get; set; }

    public DbSet<Event> Events { get; set; }
    public DbSet<Claim> Claims { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Event>()
            .HasKey(e => e.Id);
        modelBuilder.Entity<Claim>()
           .HasKey(e => e.ClaimId);
        modelBuilder.Entity<Signup>()
            .HasKey(e => e.Id);
    }
}
