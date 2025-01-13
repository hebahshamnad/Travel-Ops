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
    public DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Event>()
            .HasKey(e => e.Id);
        modelBuilder.Entity<Claim>()
           .HasKey(e => e.ClaimId);
        modelBuilder.Entity<Signup>()
            .HasKey(e => e.Id);
        modelBuilder.Entity<User>()
            .HasKey(u => u.Id);

    

        // EmergencyContact Configuration
        modelBuilder.Entity<EmergencyContact>()
            .HasKey(e => e.Id);

        modelBuilder.Entity<EmergencyContact>()
            .HasOne(e => e.User)
            .WithOne(u => u.emergencyContact)
            .HasForeignKey<EmergencyContact>(e => e.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // NotificationPreferences Configuration
        modelBuilder.Entity<Preference>()
            .HasKey(p => p.Id);

        modelBuilder.Entity<Preference>()
            .HasOne(p => p.User)
            .WithOne(u => u.preference)
            .HasForeignKey<Preference>(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
