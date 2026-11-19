namespace CInvoice.Api.Models;

public class Client
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string? VatNumber { get; set; }

    // Navigation property for EF Core relationship
    public ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();
}