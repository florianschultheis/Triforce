using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication4.Daten;
using System.Web;

namespace WebApplication4.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {

        private readonly LolocoContext _context;

        public PeopleController(LolocoContext context)
        {
            _context = context;
        }
        String vorname = "Jana";
        String nachname = "Teu";
        String adresse = "Vorgebirgstraße 134";

       

        [HttpGet]
        public IActionResult Get()
        {
            
            var people = new List<Person>
            {
                new Person{Vorname= vorname, Nachname=nachname, Adresse = adresse }
            };

            return Ok(_context.Consumers.ToList());


        }

        private Microsoft.EntityFrameworkCore.DbSet<Models.Consumer> GetConsumers()
        {
            return _context.Consumers;
        }

        [HttpPost]
        public IActionResult Post([FromBody] List<Person> people)
        {


            return Ok();
        }
    }

    public class Person
    {
        public string Vorname { get; set; }
        public string Nachname { get; set; }
        public string Adresse { get; set; }
    }
}