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
    public class UserController : ControllerBase
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public UserController(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        [Route("getme")]
        public IActionResult GetThisUser()
        {
            if (!_core.GetUserByNameOrEmail(User.Identity.Name, out var user))
            {
                return BadRequest($"Missing user");
            }

            return Ok(user);
        }
    }
}
