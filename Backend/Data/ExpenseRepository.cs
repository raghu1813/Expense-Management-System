using AutoMapper;
using Backend.Dtos;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Backend.Data
{
    public class ExpenseRepository : IExpenseRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ExpenseRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Expense> GetExpense(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            return expense;

        }

        public async Task<IEnumerable<Expense>> GetExpenses(int id)
        {
            var user = await GetUser(id);
            return user.Expenses.ToList();
        }

        public async Task<User> GetUser(int id)
        {
            var q = _context.Users.Include(e => e.Expenses).AsQueryable();
            var user = await q.FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync()>0;
        }

        public async Task<bool> UpdateExpense(int id, ExpenseUpdateDto expenseUpdate)
        {

       
            var expense = await this.GetExpense(id);
            _mapper.Map(expenseUpdate, expense);
           return await SaveAll();
        }
    }
}
