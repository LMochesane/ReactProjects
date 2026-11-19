using CInvoice.Shared.Enums;

namespace CInvoice.Api.Models;

public class Invoice
{
    public int Id { get; set; }
    public string InvoiceNumber { get; set; } = string.Empty;
    public DateTime IssueDate { get; set; } = DateTime.UtcNow;
    public DateTime DueDate { get; set; } = DateTime.UtcNow.AddDays(30);
    public InvoiceStatus Status { get; set; } = InvoiceStatus.Draft;
    public string? Notes { get; set; }

    // Foreign Key Relationship
    public int ClientId { get; set; }
    public Client Client { get; set; } = null!;

    public ICollection<InvoiceItem> Items { get; set; } = new List<InvoiceItem>();

    // Computed total helper
    public decimal TotalAmount => Items.Sum(item => item.Quantity * item.UnitPrice);
}