using Microsoft.AspNetCore.Mvc;

namespace agrimak.backend.Controllers
{
    [Route("home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("test")]
        public JsonResult TestEndpoint()
        {
            return new JsonResult("test");
        }
    }
}