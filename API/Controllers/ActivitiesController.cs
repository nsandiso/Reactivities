using Reactivities.Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Reactivities.API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext conext)
        {

            _context= conext;
        }

        [HttpGet] //api/activities

       public async Task<ActionResult<List<Activity>>> GetActivities()
        {
           return await _context.Activities.ToListAsync();
        }

    [HttpGet("{id}")]// api/activities/fdfkdffdfd
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return await _context.Activities.FindAsync(id);
        
    }

    }
}