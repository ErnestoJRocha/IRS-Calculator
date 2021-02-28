using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<IRS_Area> IRS_Areas { get; set; }
    public DbSet<IRS_Area_Nivel> IRS_Area_Nivels { get; set; }
    public DbSet<IRS_Dependent> IRS_Dependents { get; set; }
    public DbSet<IRS_Marital_Status> IRS_Marital_States { get; set; }
    public DbSet<IRS_Simulation> IRS_Simulations { get; set; }
    public DbSet<IRS_Tax> IRS_Taxes { get; set; }
    public DbSet<IRS_User> IRS_Users { get; set; }
    public DbSet<IRS_Table> IRS_Table { get; set; }

  }
}
