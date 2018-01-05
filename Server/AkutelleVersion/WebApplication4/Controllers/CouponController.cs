using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication4.Daten;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    [Route("api/[controller]")]
    public class CouponController : Controller
    {
        private readonly LolocoContext _context;

        public CouponController(LolocoContext context)
        {
            _context = context;
        }

        //Jana Teutenberg: Methode, die den Gutscheinstring, Consumerid und Sellerid bekommt
        [HttpPost]
        public IActionResult Update([FromBody] Gutschein gutschein)
        {
            var Gutschein = _context.Coupon.SingleOrDefault(c => c.Couponid == gutschein.Couponid);

            if (Gutschein == null)
            {
                Gutschein = new Coupon()
                {
                    Couponid = gutschein.Couponid,
                    Selleri = gutschein.Selleri,
                    Useri = gutschein.Useri,
                };

                _context.Coupon.Add(Gutschein);
                _context.SaveChanges();

                return Ok();

            }

            else
            {
                return BadRequest();
            }


           

            
        }

        public class Gutschein
        {
            public string Couponid { get; set; }
            public string Selleri { get; set; }
            public string Useri { get; set; }
            

        }
    }
}
