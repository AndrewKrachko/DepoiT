using DepoiTItems;
using Logger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DepoiTWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class DepotController : Controller
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public DepotController(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        [Route("get")]
        [HttpPost]
        public IActionResult Get([FromBody] int id)
        {
            if(!_core.GetUserByNameOrEmail(User.Identity.Name, out var user))
            {
                return BadRequest($"Missing user");
            }

            if (_core.GetDepot(id, user.UserToken, out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Depot not found");
        }

        [Route("getbyparent")]
        [HttpPost]
        public IActionResult GetByUser()
        {
            if (!_core.GetUserByNameOrEmail(User.Identity.Name, out var user))
            {
                return BadRequest($"Missing user");
            }

            if (_core.GetDepotsByUser(user.Id, out var depots))
            {
                return Ok(depots);
            }
            return BadRequest($"Depots not found");
        }

        [Route("set")]
        [HttpPost]
        public IActionResult Set([FromBody] Depot depotModel)
        {
            if (_core.SetDepot(depotModel, out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Can not create depot");
        }

        [Route("update")]
        [HttpPost]
        public IActionResult Update([FromBody] Depot depotModel)
        {
            if (!_core.GetUserByNameOrEmail(User.Identity.Name, out var user))
            {
                return BadRequest($"Missing user");
            }

            if (_core.UpdateDepot(depotModel, user.UserToken, out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Can not create depot");
        }

        [Route("drop")]
        [HttpPost]
        public IActionResult Drop([FromBody] int id)
        {
            if (!_core.GetUserByNameOrEmail(User.Identity.Name, out var user))
            {
                return BadRequest($"Missing user");
            }

            if (_core.DropDepot(id, user.UserToken))
            {
                return Ok();
            }
            return BadRequest($"Can not drop depot");
        }
    }
}
