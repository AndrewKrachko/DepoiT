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
        public IActionResult GetByUser([FromBody] int storageId)
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
