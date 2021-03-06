﻿using System;
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
        //Jana Teutenberg: Methode, die alle Users zurück gibt
        [HttpGet]
        public IActionResult Get()
        {

            

            return Ok(_context.Users.ToList());


        }
        //Jana Teutenberg: Methode, die überpürft, ob der User vorhanden ist und ihn sonst anlegt mit einer Id
        [HttpGet("Get/{id}", Name = "GetbyId")]
        // GET: Users/Get/5
        public IActionResult GetbyId(string id)
        {
           // bool vorhanden;
            
            
           var Person = _context.Users.SingleOrDefault(
               c => c.I == id);
            if (Person == null)
            {
                // Create a new user                 
                Person = new User()
                {

                    I = id,
                    vorhanden = true,
                    
     
                };

                _context.Users.Add(Person);
                _context.SaveChanges();
                //vorhanden = false;
                return Ok(null);

            }
            else
            {
                //vorhanden = true;
                Person.vorhanden = false;
                _context.SaveChanges(); 
                return Ok(Person);
            }
         
            

           // return Ok(vorhanden);

        }
        //Jana Teutenberg: Methode, die eine Id bekommt und weitere Informationen, die aktualisiert werden
        [HttpPost]
        public IActionResult Update([FromBody] Person person)
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
                Person.Firstname = person.Firstname;
                Person.Lastname = person.Lastname;
                Person.Email = person.Email;
                Person.Street = person.Street;
            }


            _context.Users.Update(Person);
            _context.SaveChanges();

            return Ok();
        }
        public class Person
        {
            public string I { get; set; }
            public bool IsSeller { get; set; }
            public string Firstname { get; set; }
            public string Lastname { get; set; }
            public string Street { get; set; }

            public string Email { get; set; }
            public bool vorhanden { get; set; }

        }

        //Jana Teutenberg: Methode, die überpürft, ob der User vorhanden ist und ihn dann löscht
        [HttpGet("Delete/{id}", Name = "Delete")]
        // GET: Users/Delete/5
        public IActionResult Delete(string id)
        {
            


            var Person = _context.Users.SingleOrDefault(
                c => c.I == id);
            if (Person == null)
            {
                return BadRequest();
            }
            else
            {
                _context.Remove(Person);
                _context.SaveChanges();
            }



            return Ok(true);

        }

        //Jana Teutenberg: Methode, die überpürft, ob Daten des Users vollständig
        [HttpGet("Complete/{id}", Name = "Complete")]
        // GET: Users/Complete/5
        public IActionResult Complete(string id)
        {



            var Person = _context.Users.SingleOrDefault(
                c => c.I == id);
            if (Person == null)
            {
                return BadRequest();
            }
            if (Person.Firstname == null|| Person.Lastname == null|| Person.Street == null )
            {
                return Ok(false);
            }
            else
            { return Ok(true);
            }



            

        }

















    }
}
