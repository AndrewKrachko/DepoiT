using DepoiTItems;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepotController : Controller
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public DepotController(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetDepot(int id, UserModel userModel)
        {
            if (_core.GetDepot(id, userModel.GetUser(), out var depot))
            {
                return Ok(depot);
            }
            return BadRequest("Not Found");

        }
    }
}
