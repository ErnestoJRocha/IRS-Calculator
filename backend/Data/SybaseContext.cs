using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data
{
  public class SybaseContext : DbContext
  {
    public SybaseContext(DbContextOptions<SybaseContext> options) : base(options) { }

    public DbSet<Sybase_Nivel> NIVEL { get; set; }
    public DbSet<Sybase_Colaborador_Nivel> DW_COLABORADORNIVEL { get; set; }

  }
}
