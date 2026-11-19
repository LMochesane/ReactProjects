namespace CInvoice.Api.Models;

public class InvoiceItem
{
    public int Id { get; set; }
    public string Description { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }

    // Foreign Key Relationship
    public int InvoiceId { get; set; }
    public Invoice Invoice { get; set; } = null!;
}