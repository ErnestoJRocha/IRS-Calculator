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
    public class Sybase_NivelController : ControllerBase
    {
        private readonly SybaseContext _context;

        public Sybase_NivelController(SybaseContext context)
        {
            _context = context;
        }

        // GET: api/Sybase_Nivel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sybase_Nivel>>> GetNIVEL()
        {
            return await _context.NIVEL.ToListAsync();
        }

        // GET: api/Sybase_Nivel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sybase_Nivel>> GetSybase_Nivel(int id)
        {
            var sybase_Nivel = await _context.NIVEL.FindAsync(id);

            if (sybase_Nivel == null)
            {
                return NotFound();
            }

            return sybase_Nivel;
        }

        // PUT: api/Sybase_Nivel/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSybase_Nivel(int id, Sybase_Nivel sybase_Nivel)
        {
            if (id != sybase_Nivel.nivelid)
            {
                return BadRequest();
            }

            _context.Entry(sybase_Nivel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Sybase_NivelExists(id))
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

        // POST: api/Sybase_Nivel
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Sybase_Nivel>> PostSybase_Nivel(Sybase_Nivel sybase_Nivel)
        {
            _context.NIVEL.Add(sybase_Nivel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSybase_Nivel", new { id = sybase_Nivel.nivelid }, sybase_Nivel);
        }

        // DELETE: api/Sybase_Nivel/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Sybase_Nivel>> DeleteSybase_Nivel(int id)
        {
            var sybase_Nivel = await _context.NIVEL.FindAsync(id);
            if (sybase_Nivel == null)
            {
                return NotFound();
            }

            _context.NIVEL.Remove(sybase_Nivel);
            await _context.SaveChangesAsync();

            return sybase_Nivel;
        }

        private bool Sybase_NivelExists(int id)
        {
            return _context.NIVEL.Any(e => e.nivelid == id);
        }
    }
}
