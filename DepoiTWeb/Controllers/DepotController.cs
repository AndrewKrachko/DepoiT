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
    public class DepotController : Controller
    {
        public ActionResult Create()
        {
            return View();
        }

        // POST: DepotController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DepotController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // GET: DepotController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }
    }
}
