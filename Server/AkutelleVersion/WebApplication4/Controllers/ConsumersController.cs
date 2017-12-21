using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication4.Daten;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    [Route("api/[controller]")]
    public class ConsumersController : Controller
    {
        private readonly LolocoContext _context;

        public ConsumersController(LolocoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {



            return Ok(_context.Consumers);


        }

        /* [HttpGet("{id}", Name = "Id")]
         public IActionResult GetById(long id)
         {
             var item = _context.Consumers.FirstOrDefault(t => t.Consumerid == id);
             if (item == null)
             {
                 return NotFound();
             }
             return new ObjectResult(item);
         }*/

        [HttpGet("{id}", Name = "control")]
        public IActionResult ControlID(string id)
        {


            if (this.ConsumerExists(id) == true )
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }

        }





        // GET: Consumers
        public async Task<IActionResult> Index()
        {
            return View(await _context.Consumers.ToListAsync());
        }

        // GET: Consumers/Details/5
        public async Task<IActionResult> Details(String id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var consumer = await _context.Consumers
                .SingleOrDefaultAsync(m => m.Firstname.Equals(id));
            if (consumer == null)
            {
                return NotFound();
            }

            return View(consumer);
        }

        // GET: Consumers/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Consumers/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        /* public async Task<IActionResult> Create([Bind("ConsumerID,LastName,FirstName,Birthday")] Consumer consumer)
         {
             if (ModelState.IsValid)
             {
                 _context.Add(consumer);
                 await _context.SaveChangesAsync();
                 return RedirectToAction(nameof(Index));
             }
             return View(consumer);
         }*/

        // GET: Consumers/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var consumer = await _context.Consumers.SingleOrDefaultAsync(m => m.Firstname.Equals(id));
            if (consumer == null)
            {
                return NotFound();
            }
            return View(consumer);
        }

        // POST: Consumers/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        /* public async Task<IActionResult> Edit(int id, [Bind("ConsumerID,LastName,FirstName,Birthday")] Consumer consumer)
         {
             if (!consumer.Firstname.Equals(id))
             {
                 return NotFound();
             }

             if (ModelState.IsValid)
             {
                 try
                 {
                     _context.Update(consumer);
                     await _context.SaveChangesAsync();
                 }
                 catch (DbUpdateConcurrencyException)
                 {
                     if (!ConsumerExists(consumer.Firstname))
                     {
                         return NotFound();
                     }
                     else
                     {
                         throw;
                     }
                 }
                 return RedirectToAction(nameof(Index));
             }
             return View(consumer);
         }*/

        // GET: Consumers/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var consumer = await _context.Consumers
                .SingleOrDefaultAsync(m => m.Firstname.Equals(id));
            if (consumer == null)
            {
                return NotFound();
            }

            return View(consumer);
        }

        // POST: Consumers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        /*public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var consumer = await _context.Consumers.SingleOrDefaultAsync(m => m.Firstname.Equals(id));
            _context.Consumers.Remove(consumer);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }*/

        private bool ConsumerExists(String id)
         {
            return _context.Consumers.Any(e => e.Firstname.Equals(id));
            
         }

    } 
}
