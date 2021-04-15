using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb.Controllers.App
{
    public class DashboardController : Controller
    {
        [Route("[controller]")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
