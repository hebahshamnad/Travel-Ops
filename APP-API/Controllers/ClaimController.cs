
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClaimController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetClaims")]
        public ActionResult<IEnumerable<Claim>> GetClaims()
        {
            var claims = _context.Claims
                .Select(e => new
                {
                    e.ClaimId,
                    e.Vendor,
                    e.Events,
                    e.Category,
                    Date = e.Date.ToString("yyyy-MM-dd"), // Formatting the date as a string
                    e.Amount,
                    e.Currency,
                    e.Status,
                    e.Description,
                    e.ReceiptUrl,
                    e.GenDate
                })
                .ToList();

            return Ok(claims);
        }

        [HttpPost("AddClaim")]
        public async Task<ActionResult<Claim>> AddClaim(Claim claim)
        {
            if (claim == null)
            {
                return BadRequest("Claim data is null.");
            }
            claim.ClaimId = GenerateClaimId();
            claim.GenDate = DateTime.Now;  


            _context.Claims.Add(claim);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetClaims), new { id = claim.ClaimId }, claim);
        }

        private int GenerateClaimId()
        {
            // Get the maximum existing ClaimId and increment it
            var maxId = _context.Claims.Max(c => (int?)c.ClaimId) ?? 0;
            return maxId + 1;
        }
    }
}

