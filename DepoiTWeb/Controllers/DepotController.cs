using DepoiTItems;
using Logger;
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

        [Route("getdepot")]
        [HttpPost]
        public IActionResult GetDepot(int id, [FromBody] string userToken)
        {
            if (_core.GetDepot(id, userToken, out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Depot not found");
        }

        [Route("getdepots")]
        [HttpPost]
        public IActionResult GetDepots([FromBody] string userToken)
        {
            if (_core.GetDepots(userToken, out var depots))
            {
                return Ok(depots);
            }
            return BadRequest($"Depots not found");
        }

        [Route("setdepots")]
        [HttpPost]
        public IActionResult SetDepot([FromBody] DepotModel depotModel)
        {
            if(_core.SetDepot(depotModel.GetDepot(), out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Can not create depot");
        }
    }
}
