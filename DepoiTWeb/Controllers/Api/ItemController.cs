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
    public class ItemController : ControllerBase
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public ItemController(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        [Route("get")]
        [HttpPost]
        public IActionResult Get([FromBody] int id)
        {
            if (_core.GetItem(id, out var item))
            {
                return Ok(item);
            }
            return BadRequest($"Item not found");
        }

        [Route("getbyparent")]
        [HttpPost]
        public IActionResult GetByStorage([FromBody] int storageId)
        {
            if (_core.GetItemsByStorage(storageId, out var items))
            {
                return Ok(items);
            }
            return BadRequest($"Itemss not found");
        }

        [Route("set")]
        [HttpPost]
        public IActionResult Set(int parentId, [FromBody] Item itemModel)
        {
            if (_core.SetItem(parentId, itemModel, out var item))
            {
                return Ok(item);
            }
            return BadRequest($"Can not create item");
        }

        [Route("update")]
        [HttpPost]
        public IActionResult Update([FromBody] Item itemModel)
        {
            if (_core.UpdateItem(itemModel, out var item))
            {
                return Ok(item);
            }
            return BadRequest($"Can not create item");
        }

        [Route("drop")]
        [HttpPost]
        public IActionResult Drop([FromBody] int id)
        {
            if (_core.DropItem(id))
            {
                return Ok();
            }
            return BadRequest($"Can not drop item");
        }
    }
}
