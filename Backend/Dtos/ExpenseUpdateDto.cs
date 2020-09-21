using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class ExpenseUpdateDto
    {
        public int Id { get; set; }
        public string SubmitterName { get; set; }
        public string Type { get; set; }
        public float Amount { get; set; }
        public DateTime IncurredDate { get; set; }
        public DateTime SubmittedDate { get; set; }
        public string Status { get; set; }
        public string Receipts { get; set; }
        public ExpenseUpdateDto()
        {
            SubmittedDate = DateTime.Now;
            Status = "Submitted";
        }
    }
}
