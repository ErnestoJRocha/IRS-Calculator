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
  public class IRS_TableController : ControllerBase
  {
    private readonly DataContext _context;

    public IRS_TableController(DataContext context)
    {
      _context = context;
    }

    // GET: api/IRS_Table
    [HttpGet]
    public async Task<ActionResult<IEnumerable<IRS_Table>>> GetIRS_Table()
    {
      return await _context.IRS_Table.ToListAsync();
    }

    // GET: api/IRS_Table/5
    [HttpGet("{id}")]
    public async Task<ActionResult<IRS_Table>> GetIRS_Table(int id)
    {
      var iRS_Table = await _context.IRS_Table.FindAsync(id);

      if (iRS_Table == null)
      {
        return NotFound();
      }

      return iRS_Table;
    }

    // PUT: api/IRS_Table/5
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutIRS_Table(int id, IRS_Table iRS_Table)
    {
      if (id != iRS_Table.id_row)
      {
        return BadRequest();
      }

      _context.Entry(iRS_Table).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!IRS_TableExists(id))
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

    // POST: api/IRS_Table
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPost]
    public async Task<ActionResult<IRS_Table>> PostIRS_Table(IRS_Table iRS_Table)
    {
      _context.IRS_Table.Add(iRS_Table);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetIRS_Table", new { id = iRS_Table.id_row }, iRS_Table);
    }

    // DELETE: api/IRS_Table/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<IRS_Table>> DeleteIRS_Table(int id)
    {
      var iRS_Table = await _context.IRS_Table.FindAsync(id);
      if (iRS_Table == null)
      {
        return NotFound();
      }

      _context.IRS_Table.Remove(iRS_Table);
      await _context.SaveChangesAsync();

      return iRS_Table;
    }

    private bool IRS_TableExists(int id)
    {
      return _context.IRS_Table.Any(e => e.id_row == id);
    }
  }
}
