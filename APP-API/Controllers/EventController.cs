using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static APP_API.Event;

namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<object>> GetEvents()
        {
            var events = new List<object>
            {
                new
                {
                    Name = "TechCrunch Disrupt 2024",
                    Date = "2024-09-19",
                    Location = "San Francisco, CA",
                    Organizer = "TechCrunch",
                    Link = "https://techcrunch.com/events/"
                },
                new
                {
                    Name = "HLTH 2024",
                    Date = "2024-10-13",
                    Location = "Las Vegas, NV",
                    Organizer = "HLTH",
                    Link = "https://www.hlth.com/event/"
                },
                new
                {
                    Name = "SXSW EDU 2024",
                    Date = "2024-03-04",
                    Location = "Austin, TX",
                    Organizer = "SXSW",
                    Link = "https://www.sxswedu.com/"
                },
                new
                {
                    Name = "AI Summit New York 2024",
                    Date = "2024-12-11",
                    Location = "New York, NY",
                    Organizer = "AI Summit",
                    Link = "https://newyork.theaisummit.com/"
                },
                new
                {
                    Name = "Renewable Energy World International",
                    Date = "2024-12-10",
                    Location = "Orlando, FL",
                    Organizer = "Clarion Events",
                    Link = "https://www.rewintl.com/"
                },
                new
                {
                    Name = "Blockchain Expo North America",
                    Date = "2024-11-28",
                    Location = "Santa Clara, CA",
                    Organizer = "Encore Media Group",
                    Link = "https://blockchain-expo.com/northamerica/"
                },
                new
                {
                    Name = "FinovateFall 2024",
                    Date = "2024-09-23",
                    Location = "New York, NY",
                    Organizer = "Informa Connect",
                    Link = "https://informaconnect.com/finovatefall/"
                },
                new
                {
                    Name = "RSA Conference 2025",
                    Date = "2025-02-24",
                    Location = "San Francisco, CA",
                    Organizer = "RSA Security LLC",
                    Link = "https://www.rsaconference.com/usa"
                },
                new
                {
                    Name = "Smart City Expo World Congress",
                    Date = "2024-11-19",
                    Location = "Barcelona, Spain",
                    Organizer = "Fira de Barcelona",
                    Link = "https://www.smartcityexpo.com/"
                },
                new
                {
                    Name = "CES 2025",
                    Date = "2025-01-07",
                    Location = "Las Vegas, NV",
                    Organizer = "Consumer Technology Association",
                    Link = "https://www.ces.tech/"
                }
            };

            return Ok(events);
        }
    }
}
