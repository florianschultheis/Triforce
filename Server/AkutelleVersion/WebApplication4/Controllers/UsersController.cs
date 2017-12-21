using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication4.Daten;
using WebApplication4.Models;

namespace WebApplication4
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        
        private readonly LolocoContext _context;
        public bool isseller;
        public UsersController(LolocoContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {

            

            return Ok(_context.Users.ToList());


        }
        //Jana Teutenberg: Methode, die überpürft, ob der User vorhanden ist 
        [HttpGet("Get/{id}", Name = "GetbyId")]
        // GET: Users/GetbyId/5
        public IActionResult GetbyId(string id)
        {
            bool vorhanden;
            
            
           var Person = _context.Users.SingleOrDefault(
               c => c.I == id);
            if (Person == null)
            {
                // Create a new user                 
                Person = new User()
                {
                    
                    I = id,
                    
     
                };

                _context.Users.Add(Person);
                vorhanden = false;

            }
            else
            {
                vorhanden = true;
            }
         
            _context.SaveChanges();

            return Ok(vorhanden);

        }

        [HttpPost]
        public IActionResult SetSeller([FromBody] Person person)
        {
            var Person = _context.Users.SingleOrDefault(
               c => c.I == person.I);
            if (Person == null)
            {
                return BadRequest();
            }

            else
            {
                Person.IsSeller = person.IsSeller;
            }


            _context.Users.Update(Person);
            _context.SaveChanges();

            return Ok();
        }
        public class Person
        {
            public string I { get; set; }
            public bool IsSeller { get; set; }
            
        }

        // GET: Users
        public async Task<IActionResult> Index()
        {
            return View(await _context.Users.ToListAsync());
        }

        // GET: Users/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .SingleOrDefaultAsync(m => m.Userid == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Userid,Lastname,Firstname,street,number,i")] User user)
        {
            if (ModelState.IsValid)
            {
                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.SingleOrDefaultAsync(m => m.Userid == id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Userid,Lastname,Firstname,street,number,i")] User user)
        {
            if (id != user.Userid)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(user);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(user.Userid))
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
            return View(user);
        }

        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .SingleOrDefaultAsync(m => m.Userid == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var user = await _context.Users.SingleOrDefaultAsync(m => m.Userid == id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Userid == id);
        }
    }
}
