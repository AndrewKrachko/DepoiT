using Microsoft.AspNetCore.Mvc;

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
