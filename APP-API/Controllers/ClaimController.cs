using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static APP_API.User;

namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<object>> GetClaimList()
        {
            var claims = new List<object>
            {
                new
                {
                    claimId = 12345,
                    vendor = "Air Canada",
                    events = "Tech Summit 2024",
                    category = "Travel",
                    date = "2024-12-01",
                    amount = 500.00,
                    currency = "USD",
                    status = "Approved",
                    description = "Round trip flight to San Francisco for Tech Summit.",
                    receiptUrl = "https://example.com/receipts/12345.pdf"
                },
                new
                {
                    claimId = 12346,
                    vendor = "Holiday Inn",
                    events = "Tech Summit 2024",
                    category = "Accommodation",
                    date = "2024-12-02",
                    amount = 300.00,
                    currency = "USD",
                    status = "Pending",
                    description = "3-night stay at Hilton Hotel during Tech Summit.",
                    receiptUrl = "https://example.com/receipts/12346.pdf"
                },
                new
                {
                    claimId = 12347,
                    vendor = "Denny's",
                    events = "HLTH 2024",
                    category = "Meals",
                    date = "2024-12-03",
                    amount = 120.00,
                    currency = "USD",
                    status = "Pending",
                    description = "Dinner with client to discuss project updates.",
                    receiptUrl = "https://example.com/receipts/12347.pdf"
                }
            };

            return Ok(claims);
        }
    }
}

