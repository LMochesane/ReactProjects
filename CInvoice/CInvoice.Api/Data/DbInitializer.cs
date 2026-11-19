using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace CInvoice.Api.Data;

public static class DbInitializer
{
    public static async Task SeedUsersAndRolesAsync(IServiceProvider services)
    {
        var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = services.GetRequiredService<UserManager<IdentityUser>>();

        string[] roles = ["Admin", "TeamMember"];

        foreach (var role in roles)
        {
            if (!await roleManager.RoleExistsAsync(role))
            {
                await roleManager.CreateAsync(new IdentityRole(role));
            }
        }

        // 1. Seed Admin user
        var adminEmail = "admin@cinvoice.local";
        var adminUser = await userManager.FindByEmailAsync(adminEmail);

        if (adminUser is null)
        {
            adminUser = new IdentityUser
            {
                UserName = adminEmail,
                Email = adminEmail,
                EmailConfirmed = true
            };

            var adminCreated = await userManager.CreateAsync(adminUser, "Admin012!");
            if (adminCreated.Succeeded)
            {
                await userManager.AddToRoleAsync(adminUser, "Admin");
            }
        }

        // 2. Seed TeamMember user
        var memberEmail = "member@cinvoice.local";
        var memberUser = await userManager.FindByEmailAsync(memberEmail);

        if (memberUser is null)
        {
            memberUser = new IdentityUser
            {
                UserName = memberEmail,
                Email = memberEmail,
                EmailConfirmed = true
            };

            var createMember = await userManager.CreateAsync(memberUser, "Member012!");
            if (createMember.Succeeded)
            {
                await userManager.AddToRoleAsync(memberUser, "TeamMember");
            }
        }
    }
}