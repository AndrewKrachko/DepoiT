using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb.Controllers
{
    public class DepotController : Controller
    {
        // GET: DepotController
        public ActionResult Index()
        {
            return View();
        }

        // GET: DepotController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DepotController/Create
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

        // POST: DepotController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
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

        // GET: DepotController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DepotController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
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
    }
}
