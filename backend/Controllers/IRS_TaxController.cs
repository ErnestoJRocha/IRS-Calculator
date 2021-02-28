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
    public class IRS_TaxController : ControllerBase
    {
        private readonly DataContext _context;

        public IRS_TaxController(DataContext context)
        {
            _context = context;
        }

        // GET: api/IRS_Tax
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IRS_Tax>>> GetIRS_Taxes()
        {
            return await _context.IRS_Taxes.ToListAsync();
        }

        // GET: api/IRS_Tax/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IRS_Tax>> GetIRS_Tax(int id)
        {
            var iRS_Tax = await _context.IRS_Taxes.FindAsync(id);

            if (iRS_Tax == null)
            {
                return NotFound();
            }

            return iRS_Tax;
        }

        // PUT: api/IRS_Tax/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIRS_Tax(int id, IRS_Tax iRS_Tax)
        {
            if (id != iRS_Tax.Id)
            {
                return BadRequest();
            }

            _context.Entry(iRS_Tax).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IRS_TaxExists(id))
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

        // POST: api/IRS_Tax
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<IRS_Tax>> PostIRS_Tax(IRS_Tax iRS_Tax)
        {
            _context.IRS_Taxes.Add(iRS_Tax);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIRS_Tax", new { id = iRS_Tax.Id }, iRS_Tax);
        }

        // DELETE: api/IRS_Tax/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IRS_Tax>> DeleteIRS_Tax(int id)
        {
            var iRS_Tax = await _context.IRS_Taxes.FindAsync(id);
            if (iRS_Tax == null)
            {
                return NotFound();
            }

            _context.IRS_Taxes.Remove(iRS_Tax);
            await _context.SaveChangesAsync();

            return iRS_Tax;
        }

        private bool IRS_TaxExists(int id)
        {
            return _context.IRS_Taxes.Any(e => e.Id == id);
        }
    }
}
