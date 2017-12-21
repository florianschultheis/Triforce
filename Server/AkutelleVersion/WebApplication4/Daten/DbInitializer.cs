using WebApplication4.Models;
using System;
using System.Linq;

namespace WebApplication4.Daten
{
    public static class DbInitializer
    {
        public static void Initialize(LolocoContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Consumers.Any())
            {
                return;   // DB has been seeded
            }

            var consumers = new Consumer[]
            {
            new Consumer{Firstname="Carson",Lastname="Alexander", i ="1", street = "Hallo" },
             new Consumer{Firstname="Hugo",Lastname="Boss" },
             new Consumer{Firstname="Mu",Lastname="Bo" , i="2", street="hu"}

            };
            foreach (Consumer s in consumers)
            {
                context.Consumers.Add(s);
            }
            context.SaveChanges();

            

            
            
        }
    }
}