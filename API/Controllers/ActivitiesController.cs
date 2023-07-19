using Reactivities.Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities;

namespace Reactivities.API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet] //api/activities

       public async Task<ActionResult<List<Activity>>> GetActivities()
        {
           return await Mediator.Send(new List.Query());
        }

    [HttpGet("{id}")]// api/activities/fdfkdffdfd
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return await Mediator.Send(new Details.Query{id = id});
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity)
    {
        return Ok(await Mediator.Send(new Create.Command{activity = activity }));
    }

    [HttpPut("{Id}")]
    public async Task<ActionResult> EditActivity(Guid id, Activity activity)
    {
        activity.Id = id;
        return Ok(await Mediator.Send(new Edit.Command{Activity = activity}));
    }
     
     [HttpDelete("{Id}")]

     public async Task<IActionResult> DeleteActivity(Guid id)
     {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        
     }

    }
}