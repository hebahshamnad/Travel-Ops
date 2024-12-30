using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static APP_API.User;

namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {   [HttpGet("GetUsers")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            var users = 
                  new User
            {   fullName = "John Doe",
                firstName = "John",
                lastName = "Doe",
                email = "john.doe@example.com",
                phone = "123-456-7890",
                title= "Project Manager",
                department = "HR",
                address = "456 Elm St",
                postalCode = "20002",
                city = "New York",
                country = "USA",
                
                emergencyContact = new EmergencyContact
                {
                    Name = "Jane Doe",
                    Relationship = "Spouse",
                    PhoneNumber = "111-222-3333"
                },
                notificationPreferences = new NotificationPreferences
                {
                    EmailNotifications = true,
                    SmsNotifications = false,
                    AppNotifications = true
                }, 
        
              
            };

            return Ok(users);
        }
    }
}
