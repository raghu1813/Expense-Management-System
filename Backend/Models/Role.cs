using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Backend.Models
{
    public class Role: IdentityRole<int>
    {
        public virtual ICollection<UserRole> UserRoles { get; set; }

    }
}
