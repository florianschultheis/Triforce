using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication4.Models
{
    public class User
    {
        public int Userid { get; set; }

        public string Lastname { get; set; }
        public string Firstname { get; set; }

        public string Email { get; set; }
        public string Street { get; set; }
        public string I { get; set; }
        public bool IsSeller{ get; set; } 

        public bool vorhanden { get; set; }


    }
}
