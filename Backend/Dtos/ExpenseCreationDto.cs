using Backend.Data;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class ExpenseCreationDto
    {
        public string SubmitterName { get; set; }
        public string Type { get; set; }
        public float Amount { get; set; }
        public DateTime IncurredDate { get; set; }
        public DateTime SubmittedDate { get; set; }
        public string Status { get; set; }
        public string  Receipts { get; set; }
        public ExpenseCreationDto()
        {
            SubmittedDate = DateTime.Now;
            Status = "Submitted";
        }
    }
}
