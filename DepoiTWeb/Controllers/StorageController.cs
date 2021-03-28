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
    public class StorageController : ControllerBase
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public StorageController(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        [Route("getstorage")]
        [HttpPost]
        public IActionResult GetStorage([FromBody] int id)
        {
            if (_core.GetStorage(id, out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Depot not found");
        }
    }
}
