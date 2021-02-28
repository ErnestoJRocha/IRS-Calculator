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
    public class IRS_Marital_StatusController : ControllerBase
    {
        private readonly DataContext _context;

        public IRS_Marital_StatusController(DataContext context)
        {
            _context = context;
        }

        // GET: api/IRS_Marital_Status
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IRS_Marital_Status>>> GetIRS_Marital_States()
        {
            return await _context.IRS_Marital_States.ToListAsync();
        }

        // GET: api/IRS_Marital_Status/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IRS_Marital_Status>> GetIRS_Marital_Status(int id)
        {
            var iRS_Marital_Status = await _context.IRS_Marital_States.FindAsync(id);

            if (iRS_Marital_Status == null)
            {
                return NotFound();
            }

            return iRS_Marital_Status;
        }

        // PUT: api/IRS_Marital_Status/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIRS_Marital_Status(int id, IRS_Marital_Status iRS_Marital_Status)
        {
            if (id != iRS_Marital_Status.Id)
            {
                return BadRequest();
            }

            _context.Entry(iRS_Marital_Status).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IRS_Marital_StatusExists(id))
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

        // POST: api/IRS_Marital_Status
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<IRS_Marital_Status>> PostIRS_Marital_Status(IRS_Marital_Status iRS_Marital_Status)
        {
            _context.IRS_Marital_States.Add(iRS_Marital_Status);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIRS_Marital_Status", new { id = iRS_Marital_Status.Id }, iRS_Marital_Status);
        }

        // DELETE: api/IRS_Marital_Status/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IRS_Marital_Status>> DeleteIRS_Marital_Status(int id)
        {
            var iRS_Marital_Status = await _context.IRS_Marital_States.FindAsync(id);
            if (iRS_Marital_Status == null)
            {
                return NotFound();
            }

            _context.IRS_Marital_States.Remove(iRS_Marital_Status);
            await _context.SaveChangesAsync();

            return iRS_Marital_Status;
        }

        private bool IRS_Marital_StatusExists(int id)
        {
            return _context.IRS_Marital_States.Any(e => e.Id == id);
        }
    }
}
