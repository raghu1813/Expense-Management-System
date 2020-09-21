using Backend.Dtos;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
    public interface IExpenseRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<User> GetUser(int id);
        Task<Expense> GetExpense(int id);
        Task<bool> UpdateExpense(int id, ExpenseUpdateDto expense);
        Task<IEnumerable<Expense>> GetExpenses(int id);
    }
}
