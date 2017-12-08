using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NeuLoloco.Controllers
{
    [Route("api/[controller]")]
    public class TraderController : Controller
    {

        String vorname = "Hugo";
        String nachname = "Ernst";
        String adresse = "Geschäftsstraße 101";

        [HttpGet]
        public IActionResult Get()
        {
            var people = new List<Person>
            {
                new Person{Vorname= vorname, Nachname=nachname, Adresse = adresse }
            };

            return Ok(people);


        }
        [HttpPost]
        public IActionResult Post([FromBody] List<Person> people)
        {


            return Ok();
        }
    }
    [Route("api/[controller]")]
    public class PeopleController: Controller
    {
        
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
           
            return Ok(people);
           

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
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
