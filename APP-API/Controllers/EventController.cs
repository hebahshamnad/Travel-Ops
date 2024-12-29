using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace APP_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Event>> GetEvents()
        {
            var events = _context.Events
                .Select(e => new
                {
                    e.Name,
                    Date = e.Date.ToString("yyyy-MM-dd"),  
                    e.Location,
                    e.Organizer,
                    e.Link
                })
                .ToList();


            return Ok(events);
        }
    }
}
