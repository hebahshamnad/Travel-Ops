 using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SignupController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetSignups")]
        public ActionResult<IEnumerable<Signup>> GetSignups()
        {
            var signups = _context.Signups
                .Select(s => new
                {
                    s.Id,
                    s.Name,
                    s.Email,
                    s.Department,
                    s.Branch,
                    s.Manager,
                    s.EventType,
                    s.Purpose,
                    Date = s.Date.ToString("yyyy-MM-dd"),
                    s.Location,
                    s.Organizer,
                    s.Mode,
                    s.RegistrationCost,
                    s.TravelCost,
                    s.HotelCost,
                    s.MiscCost,
                    s.Description                })
                .ToList();

            return Ok(signups);
        }

        [HttpPost("AddSignup")]
        public async Task<ActionResult<Signup>> AddSignup(Signup signup)
        {
            if (signup == null)
            {
                return BadRequest("Signup data is null.");
            }
            //signup.Id = GenerateId();
            _context.Signups.Add(signup);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSignups), new { id = signup.Id }, signup);
        }

        
    }
}