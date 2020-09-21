using Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;

        }

        public async Task<User> Login(string Username, string password)
        {
            var user = await _context.Users.Include(e => e.Expenses).FirstOrDefaultAsync(x => x.UserName == Username);
            if (user == null)
            {
                return null;
            }

            return user;
        }


        public async Task<User> Register(User user, string password)
        {

            //byte[] passwordHash, passwordSalt;
            //CreatePasswordHash(password, out passwordHash, out passwordSalt);
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;




        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            }


        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(x => x.UserName == username))
                return true;


            return false;


        }
    }
}
