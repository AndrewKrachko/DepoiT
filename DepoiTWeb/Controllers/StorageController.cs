using DepoiTItems;
using Logger;
using Microsoft.AspNetCore.Mvc;

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

        [Route("get")]
        [HttpPost]
        public IActionResult Get([FromBody] int id)
        {
            if (_core.GetStorage(id, out var depot))
            {
                return Ok(depot);
            }
            return BadRequest($"Storage not found");
        }

        [Route("getbyparent")]
        [HttpPost]
        public IActionResult GetMany([FromBody] int parentId)
        {
            if (_core.GetStoragesByDepot(parentId, out var storages))
            {
                return Ok(storages);
            }
            return BadRequest($"Storages not found");
        }

        [Route("set")]
        [HttpPost]
        public IActionResult Set(int parentId, [FromBody] Storage storageModel)
        {
            if (_core.SetStorage(parentId, storageModel, out var storage))
            {
                return Ok(storage);
            }
            return BadRequest($"Can not create storage");
        }

        [Route("update")]
        [HttpPost]
        public IActionResult Update([FromBody] Storage storageModel)
        {
            if (_core.UpdateStorage(storageModel, out var storage))
            {
                return Ok(storage);
            }
            return BadRequest($"Can not create storage");
        }

        [Route("drop")]
        [HttpPost]
        public IActionResult Drop([FromBody] int id)
        {
            if (_core.DropStorage(id))
            {
                return Ok();
            }
            return BadRequest($"Can not drop storage");
        }
    }
}
