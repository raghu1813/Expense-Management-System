using AutoMapper;
using Backend.Controllers;
using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Backend.UnitTests
{
    [TestFixture]
    public class ExpensesControllerTests
    {
        [SetUp]
        public void Setup()
        {
            
        }


        [Test]
        public async Task  PutExpense_WhenCalled_UpdatesExpense()
        {
            

            var repo = new Mock<IExpenseRepository>();
            var mapper = new Mock<IMapper>();
            var controller = new ExpensesController(mapper.Object, repo.Object);
            var expense = new ExpenseUpdateDto()
            {
                Id =17,
                Type = "A",
                Amount = 500,
                IncurredDate = new DateTime(2020, 09, 15),
                SubmitterName ="rajendra",
                Receipts = null

            };
            
            var res = await controller.PutExpense(17, expense);

            repo.Verify(r => r.UpdateExpense(17, expense));
           
           
        }

        [Test]
        public async Task GetExpenses_WhenCalled_GivesListOfExpeses()
        {
            var repo = new Mock<IExpenseRepository>();
            var mapper = new Mock<IMapper>();
            var controller = new ExpensesController(mapper.Object, repo.Object);
            var list = await controller.GetExpenses(1);
            repo.Verify(r => r.GetExpenses(1));

            
        }

        [Test]
        public async Task GetExpense_WhenCalled_ReturnExpense()
        {
            var repo = new Mock<IExpenseRepository>();
            var mapper = new Mock<IMapper>();
            var controller = new ExpensesController(mapper.Object, repo.Object);
            var expense =  await controller.GetExpense(42);
            repo.Verify(r => r.GetExpense(42));
        }


    }
}