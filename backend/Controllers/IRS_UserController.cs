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
  public class IRS_UserController : ControllerBase
  {
    private readonly DataContext _context;

    public IRS_UserController(DataContext context)
    {
      _context = context;
    }

    // GET: api/IRS_User
    [HttpGet]
    public async Task<ActionResult<IEnumerable<IRS_User>>> GetIRS_Users()
    {
      return await _context.IRS_Users.ToListAsync();
    }

    // GET: api/IRS_User/5
    [HttpGet("{id}")]
    public async Task<ActionResult<IRS_User>> GetIRS_User(int id)
    {
      var iRS_User = await _context.IRS_Users.FindAsync(id);

      if (iRS_User == null)
      {
        return NotFound();
      }

      return iRS_User;
    }

    // PUT: api/IRS_User/5
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutIRS_User(int id, IRS_User iRS_User)
    {
      if (!IRS_UserExists(id))
      {
        _context.Database.ExecuteSqlInterpolated($"SET IDENTITY_INSERT [dbo].[IRS_Users] ON INSERT INTO [dbo].[IRS_Users] ([id]) VALUES ({id}) SET IDENTITY_INSERT [dbo].[IRS_Users] OFF");
      }
      if (id != iRS_User.Id)
      {
        return BadRequest();
      }

      _context.Entry(iRS_User).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!IRS_UserExists(id))
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

    // POST: api/IRS_User
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    [HttpPost]
    public async Task<ActionResult<IRS_User>> PostIRS_User(IRS_User iRS_User)
    {
      _context.IRS_Users.Add(iRS_User);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetIRS_User", new { id = iRS_User.Id }, iRS_User);
    }

    // DELETE: api/IRS_User/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<IRS_User>> DeleteIRS_User(int id)
    {
      var iRS_User = await _context.IRS_Users.FindAsync(id);
      if (iRS_User == null)
      {
        return NotFound();
      }

      _context.IRS_Users.Remove(iRS_User);
      await _context.SaveChangesAsync();

      return iRS_User;
    }

    private bool IRS_UserExists(int id)
    {
      return _context.IRS_Users.Any(e => e.Id == id);
    }
  }
}
