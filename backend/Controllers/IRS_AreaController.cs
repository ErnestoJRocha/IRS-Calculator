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
    public class IRS_AreaController : ControllerBase
    {
        private readonly DataContext _context;

        public IRS_AreaController(DataContext context)
        {
            _context = context;
        }

        // GET: api/IRS_Area
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IRS_Area>>> GetIRS_Areas()
        {
            return await _context.IRS_Areas.ToListAsync();
        }

        // GET: api/IRS_Area/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IRS_Area>> GetIRS_Area(int id)
        {
            var iRS_Area = await _context.IRS_Areas.FindAsync(id);

            if (iRS_Area == null)
            {
                return NotFound();
            }

            return iRS_Area;
        }

        // PUT: api/IRS_Area/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIRS_Area(int id, IRS_Area iRS_Area)
        {
            if (id != iRS_Area.Id)
            {
                return BadRequest();
            }

            _context.Entry(iRS_Area).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IRS_AreaExists(id))
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

        // POST: api/IRS_Area
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<IRS_Area>> PostIRS_Area(IRS_Area iRS_Area)
        {
            _context.IRS_Areas.Add(iRS_Area);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIRS_Area", new { id = iRS_Area.Id }, iRS_Area);
        }

        // DELETE: api/IRS_Area/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IRS_Area>> DeleteIRS_Area(int id)
        {
            var iRS_Area = await _context.IRS_Areas.FindAsync(id);
            if (iRS_Area == null)
            {
                return NotFound();
            }

            _context.IRS_Areas.Remove(iRS_Area);
            await _context.SaveChangesAsync();

            return iRS_Area;
        }

        private bool IRS_AreaExists(int id)
        {
            return _context.IRS_Areas.Any(e => e.Id == id);
        }
    }
}
