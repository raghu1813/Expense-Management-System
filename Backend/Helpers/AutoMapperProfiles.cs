using AutoMapper;
using Backend.Dtos;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<UserForRegisterDto, User>();
            CreateMap<ExpenseCreationDto, Expense>();
            CreateMap<ExpenseUpdateDto, Expense>();
        }
    }
}
