using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb.Controllers.App
{
    public class WizardController : Controller
    {
        [Route("[controller]")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
