using DepoiTItems;
using Logger;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : Controller
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public AuthenticateController(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody] User user)
        {
            if(this.User.Identity.IsAuthenticated)
            {

            }

            return View();
        }
    }
}
