using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static APP_API.User;

namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetUsers")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            var users = _context.Users
                    .Select(u => new
                    {
                        u.Id,
                        u.fullName,
                        u.firstName,
                        u.lastName,
                        u.email,
                        u.phone,
                        u.type,
                        u.department,
                        u.address,
                        u.postalCode,
                        u.city,
                        u.country,
                        EmergencyContact = new
                        {
                            u.emergencyContact.Name,
                            u.emergencyContact.Relationship,
                            u.emergencyContact.PhoneNumber
                        },
                        Preference = new
                        {
                            u.preference.email,
                            u.preference.sms,
                            u.preference.app
                        }
                    })
                    .ToList(); 




            return Ok(users);
        }


        [HttpGet("GetUser/{id}")]
        public ActionResult<IEnumerable<object>> GetUser(int id)
        {
            var user = _context.Users
                .Where(u => u.Id == id)
                .Select(u => new
                {
                    u.Id,
                    u.fullName,
                    u.firstName,
                    u.lastName,
                    u.email,
                    u.phone,
                    u.type,
                    u.department,
                    u.address,
                    u.postalCode,
                    u.city,
                    u.country,
                    EmergencyContact = new
                    {
                        u.emergencyContact.Name,
                        u.emergencyContact.Relationship,
                        u.emergencyContact.PhoneNumber
                    },
                    Preference = new
                    {
                        u.preference.email,
                        u.preference.sms,
                        u.preference.app
                    }
                })
                .FirstOrDefault();

            // If the user is not found, return a 404 response
            if (user == null)
            {
                return NotFound($"User with Id {id} not found.");
            }

            // Return the user data with a 200 OK response
            return Ok(user);
        }
    }
}
