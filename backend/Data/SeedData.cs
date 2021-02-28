using backend.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data
{
  public class SeedData
  {
    private readonly DataContext _context;
    private readonly SybaseContext _sybaseContext;

    public SeedData(DataContext context, SybaseContext sybaseContext)
    {
      _context = context;
      _sybaseContext = sybaseContext;
    }
    public void SeedIrsAreas()
    {
      if (_context.IRS_Areas.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/IRS_Areas.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<IRS_Area>>(json);
        foreach (var area in jsonConvert)
        {
          _context.IRS_Areas.Add(area);
        }

        _context.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine("Add SeedIrsAreas...");
      });
    }
    public void SeedIrsDependents()
    {
      if (_context.IRS_Dependents.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/IRS_Dependents.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<IRS_Dependent>>(json);
        foreach (var dependent in jsonConvert)
        {
          _context.IRS_Dependents.Add(dependent);
        }

        _context.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine(" Add SeedIrsDependents...");
      });
    }
    public void SeedIrsMaritalSates()
    {
      if (_context.IRS_Marital_States.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/IRS_Marital_States.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<IRS_Marital_Status>>(json);
        foreach (var marital_status in jsonConvert)
        {
          _context.IRS_Marital_States.Add(marital_status);
        }

        _context.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine(" Add SeedIrsMaritalSates...");
      });
    }
    public void SeedIrsTaxes()
    {
      if (_context.IRS_Taxes.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/IRS_Taxes.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<IRS_Tax>>(json);
        foreach (var tax in jsonConvert)
        {
          _context.IRS_Taxes.Add(tax);
        }

        _context.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine(" Add SeedIrsTaxes...");
      });
    }
    public void SeedIrsTables()
    {
      if (_context.IRS_Table.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/IRS_Table.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<IRS_Table>>(json);
        foreach (var table in jsonConvert)
        {
          _context.IRS_Table.Add(table);
        }

        _context.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine(" Add SeedIrsTables...");
      });
    }

    public void SeedNivel()
    {
      if (_sybaseContext.NIVEL.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/Sybase_Nivel.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<Sybase_Nivel>>(json);
        foreach (var nivel in jsonConvert)
        {
          _sybaseContext.NIVEL.Add(nivel);
        }

        _sybaseContext.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine("Add SeedNivel...");
      });
    }

    public void SeedIrsAreaNivels()
    {
      if (_context.IRS_Area_Nivels.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/IRS_Area_Nivels.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<IRS_Area_Nivel>>(json);
        foreach (var areaNivel in jsonConvert)
        {
          _context.IRS_Area_Nivels.Add(areaNivel);
        }

        _context.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine("Add SeedIrsAreaNivels...");
      });
    }

    public void SeedColaboradorNivel()
    {
      if (_sybaseContext.DW_COLABORADORNIVEL.Count() == 0)
      {
        var json = System.IO.File.ReadAllText("Data/Sybase_Colaborador_Nivel.json");
        var jsonConvert = JsonConvert.DeserializeObject<List<Sybase_Colaborador_Nivel>>(json);
        foreach (var colaborador in jsonConvert)
        {
          _sybaseContext.DW_COLABORADORNIVEL.Add(colaborador);
        }

        _sybaseContext.SaveChanges();
      }
      Task t = Task.Run(() =>
      {
        Task.Delay(5000).Wait();
        Console.WriteLine("Add SeedColaboradorNivel...");
      });
    }




  }
}