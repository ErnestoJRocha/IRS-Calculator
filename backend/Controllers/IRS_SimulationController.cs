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
    public class IRS_SimulationController : ControllerBase
    {
        private readonly DataContext _context;

        public IRS_SimulationController(DataContext context)
        {
            _context = context;
        }

        // GET: api/IRS_Simulation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IRS_Simulation>>> GetIRS_Simulations()
        {
            return await _context.IRS_Simulations.ToListAsync();
        }

        // GET: api/IRS_Simulation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IRS_Simulation>> GetIRS_Simulation(int id)
        {
            var iRS_Simulation = await _context.IRS_Simulations.FindAsync(id);

            if (iRS_Simulation == null)
            {
                return NotFound();
            }

            return iRS_Simulation;
        }

        // PUT: api/IRS_Simulation/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIRS_Simulation(int id, IRS_Simulation iRS_Simulation)
        {
            if (id != iRS_Simulation.Id)
            {
                return BadRequest();
            }

            _context.Entry(iRS_Simulation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IRS_SimulationExists(id))
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

        // POST: api/IRS_Simulation
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<IRS_Simulation>> PostIRS_Simulation(IRS_Simulation iRS_Simulation)
        {
            _context.IRS_Simulations.Add(iRS_Simulation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIRS_Simulation", new { id = iRS_Simulation.Id }, iRS_Simulation);
        }

        // DELETE: api/IRS_Simulation/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IRS_Simulation>> DeleteIRS_Simulation(int id)
        {
            var iRS_Simulation = await _context.IRS_Simulations.FindAsync(id);
            if (iRS_Simulation == null)
            {
                return NotFound();
            }

            _context.IRS_Simulations.Remove(iRS_Simulation);
            await _context.SaveChangesAsync();

            return iRS_Simulation;
        }

        private bool IRS_SimulationExists(int id)
        {
            return _context.IRS_Simulations.Any(e => e.Id == id);
        }
    }
}
