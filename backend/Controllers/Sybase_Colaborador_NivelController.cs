using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class Sybase_Colaborador_NivelController : ControllerBase
  {
    private readonly SybaseContext _context;

    public Sybase_Colaborador_NivelController(SybaseContext context)
    {
      _context = context;
    }

    // GET: api/Sybase_Colaborador_Nivel
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Sybase_Colaborador_Nivel>>> GetDW_COLABORADORNIVEL()
    {
      return await _context.DW_COLABORADORNIVEL.Where(colaborator => colaborator.estado_colaborador == "Activo").ToListAsync();
    }

    // GET: api/Sybase_Colaborador_Nivel/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Sybase_Colaborador_Nivel>> GetSybase_Colaborador_Nivel(int? id)
    {
      var sybase_Colaborador_Nivel = await _context.DW_COLABORADORNIVEL.FindAsync(id);

      if (sybase_Colaborador_Nivel == null)
      {
        return NotFound();
      }

      return sybase_Colaborador_Nivel;
    }

    // PUT: api/Sybase_Colaborador_Nivel/5
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSybase_Colaborador_Nivel(int? id, Sybase_Colaborador_Nivel sybase_Colaborador_Nivel)
    {
      if (id != sybase_Colaborador_Nivel.colaboradorid)
      {
        return BadRequest();
      }

      _context.Entry(sybase_Colaborador_Nivel).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!Sybase_Colaborador_NivelExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Sybase_Colaborador_Nivel
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPost]
    public async Task<ActionResult<Sybase_Colaborador_Nivel>> PostSybase_Colaborador_Nivel(Sybase_Colaborador_Nivel sybase_Colaborador_Nivel)
    {
      _context.DW_COLABORADORNIVEL.Add(sybase_Colaborador_Nivel);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSybase_Colaborador_Nivel", new { id = sybase_Colaborador_Nivel.colaboradorid }, sybase_Colaborador_Nivel);
    }

    // DELETE: api/Sybase_Colaborador_Nivel/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Sybase_Colaborador_Nivel>> DeleteSybase_Colaborador_Nivel(int? id)
    {
      var sybase_Colaborador_Nivel = await _context.DW_COLABORADORNIVEL.FindAsync(id);
      if (sybase_Colaborador_Nivel == null)
      {
        return NotFound();
      }

      _context.DW_COLABORADORNIVEL.Remove(sybase_Colaborador_Nivel);
      await _context.SaveChangesAsync();

      return sybase_Colaborador_Nivel;
    }

    private bool Sybase_Colaborador_NivelExists(int? id)
    {
      return _context.DW_COLABORADORNIVEL.Any(e => e.colaboradorid == id);
    }
  }
}
