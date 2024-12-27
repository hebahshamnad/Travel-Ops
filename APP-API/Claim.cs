namespace APP_API
{
    public class Claim {
        public int ClaimId { get; set; }
        public string Vendor { get; set; }
        public string Events { get; set; }
        public string Category { get; set; }
        public DateOnly Date { get; set; }
        public decimal Amount { get; set; }
        public string Currency { get; set; }
        public string Description { get; set; }
        public string ReceiptUrl { get; set; }
        public string Status { get; set; }

    }
}
