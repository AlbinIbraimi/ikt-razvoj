using Microsoft.AspNetCore.Mvc;

namespace agrimak.API.Controllers
{
    [Route("home")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("getAll")]
        public JsonResult GetAllProducts()
        {
            return new JsonResult("test");
        }

        [HttpGet]
        [Route("getByCategory")]
        public JsonResult GetByType()
        {
            return new JsonResult("getbytype");
        }
    }
}