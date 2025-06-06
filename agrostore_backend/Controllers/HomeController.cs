using Microsoft.AspNetCore.Mvc;

namespace agrostore_backend.Controllers
{
    [ApiController]
    [Route("homee")]
    public class HomeController : ControllerBase
    {
        [HttpGet(Name = "test")]
        public ActionResult GetTestData() 
        {
            var list = new List<string>()
            {
                "Test1", "Test2", "Test3"
            };

            return new JsonResult(list);
        }
    }
}
