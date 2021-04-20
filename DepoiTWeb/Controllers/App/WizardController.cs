using Microsoft.AspNetCore.Mvc;

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
