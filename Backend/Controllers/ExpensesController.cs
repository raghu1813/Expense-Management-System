using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using Backend.Dtos;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Backend.Helpers;
using System.IO;
using log4net;
using System.Reflection;
using log4net.Config;

namespace Backend.Controllers
{
    [AllowAnonymous]
    [Route("api/{userId}/expenses")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
  
        private readonly IMapper _mapper;
        private readonly IExpenseRepository _repo;
        public ExpensesController(IMapper mapper, IExpenseRepository repo)
        {
            _mapper = mapper;
            _repo = repo;

        }

        // GET: api/Expenses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses(int userId)
        {
            //  var user = await _repo.GetUser(userId);
            // return user.Expenses.ToList();
            var expenses = await _repo.GetExpenses(userId);
            return Ok(expenses);
        }

        // GET: api/Expenses/5
        [HttpGet("{id}", Name ="GetExpense")]
        public async Task<ActionResult<Expense>> GetExpense(int id)
        {
            var expense = await _repo.GetExpense(id);

            if (expense == null)
            {
                return NotFound();
            }

            return expense;
        }

       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpense(int id, ExpenseUpdateDto expenseUpdate)
        {

            /*if (id != expenseUpdate.Id)
            {
                return BadRequest();
            }
            var expense = await _repo.GetExpense(id);
            _mapper.Map(expenseUpdate, expense);
            if (await _repo.SaveAll())
                return NoContent();*/
            await _repo.UpdateExpense(id, expenseUpdate);
              return NoContent();
            

           throw new Exception($"Updating expemse {id} failed on save");

           
        }

       
        [HttpPost]
        public async Task<ActionResult<Expense>> PostExpense(int userId, ExpenseCreationDto expenseCreation)
        {
            Console.WriteLine("reached here");


             var user = await _repo.GetUser(userId);

             expenseCreation.SubmitterName = user.UserName;
             var expense = _mapper.Map<Expense>(expenseCreation);
             user.Expenses.Add(expense);
            if(await _repo.SaveAll())
             {
                var logRepo = LogManager.GetRepository(Assembly.GetEntryAssembly());
                XmlConfigurator.Configure(logRepo, new FileInfo("log4net.Config"));
                var logger = LogManager.GetLogger(typeof(ExpensesController));
                logger.Info("New Expense Submitted at "+ DateTime.Now);
                return CreatedAtRoute("GetExpense", new { userId = userId, id = expense.Id }, expense);
            }


             throw new Exception("Failed Creating expensing");
             
          
        }

       

        // DELETE: api/Expenses/5
      /*  [HttpDelete("{id}")]
        public async Task<ActionResult<Expense>> DeleteExpense(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();

            return expense;
        }

        private bool ExpenseExists(int id)
        {
            return _context.Expenses.Any(e => e.Id == id);
        }*/
    }
}
