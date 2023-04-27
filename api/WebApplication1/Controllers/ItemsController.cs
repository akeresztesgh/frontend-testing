using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IDataService dataService;

        public ItemsController(IDataService dataService)
        {
            this.dataService = dataService;
        }

        [HttpGet]
        public ActionResult GetItems()
        {
            return Ok(dataService.GetItems());
        }
    }
}
