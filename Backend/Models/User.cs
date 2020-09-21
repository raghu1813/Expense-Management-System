using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class User: IdentityUser<int>
    {
        public ICollection<Expense> Expenses { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
