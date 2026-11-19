using System.Net;
using System.Net.Http.Json;
using System.Security.Claims;
using Microsoft.AspNetCore.Components.Authorization;

namespace CInvoice.Client.Auth;

public class ApiAuthenticationStateProvider(HttpClient httpClient) : AuthenticationStateProvider
{
    private static readonly AuthenticationState AnonymousState =
        new(new ClaimsPrincipal(new ClaimsIdentity()));

    public override async Task<AuthenticationState> GetAuthenticationStateAsync()
    {
        try
        {
            var response = await httpClient.GetAsync("/api/auth/me");
            if (response.StatusCode == HttpStatusCode.Unauthorized || !response.IsSuccessStatusCode)
            {
                return AnonymousState;
            }

            var userInfo = await response.Content.ReadFromJsonAsync<CurrentUserDto>();
            if (userInfo is null || string.IsNullOrWhiteSpace(userInfo.Email))
            {
                return AnonymousState;
            }

            var claims = new List<Claim>
            {
                new(ClaimTypes.Name, userInfo.Email),
                new(ClaimTypes.Email, userInfo.Email)
            };

            if (userInfo.Roles is not null)
            {
                claims.AddRange(userInfo.Roles.Select(role => new Claim(ClaimTypes.Role, role)));
            }

            var identity = new ClaimsIdentity(claims, authenticationType: "Identity.Application");
            return new AuthenticationState(new ClaimsPrincipal(identity));
        }
        catch
        {
            return AnonymousState;
        }
    }

    public void NotifyAuthStateChanged()
    {
        NotifyAuthenticationStateChanged(GetAuthenticationStateAsync());
    }

    public sealed record CurrentUserDto(string? Email, IEnumerable<string>? Roles);
}