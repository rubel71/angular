using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApartmentManagement.Models;

namespace ApartmentManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AptCatagoriesController : ControllerBase
    {
        private readonly ApartmentDbContext _context;

        public AptCatagoriesController(ApartmentDbContext context)
        {
            _context = context;
        }

        // GET: api/AptCatagories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AptCatagory>>> GetAptCatagories()
        {
            return await _context.AptCatagories.ToListAsync();
        }

        // GET: api/AptCatagories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AptCatagory>> GetAptCatagory(int id)
        {
            var aptCatagory = await _context.AptCatagories.FindAsync(id);

            if (aptCatagory == null)
            {
                return NotFound();
            }

            return aptCatagory;
        }

        // PUT: api/AptCatagories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAptCatagory(int id, AptCatagory aptCatagory)
        {
            if (id != aptCatagory.AptCatagoryId)
            {
                return BadRequest();
            }

            _context.Entry(aptCatagory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AptCatagoryExists(id))
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

        // POST: api/AptCatagories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AptCatagory>> PostAptCatagory(AptCatagory aptCatagory)
        {
            _context.AptCatagories.Add(aptCatagory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAptCatagory", new { id = aptCatagory.AptCatagoryId }, aptCatagory);
        }

        // DELETE: api/AptCatagories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AptCatagory>> DeleteAptCatagory(int id)
        {
            var aptCatagory = await _context.AptCatagories.FindAsync(id);
            if (aptCatagory == null)
            {
                return NotFound();
            }

            _context.AptCatagories.Remove(aptCatagory);
            await _context.SaveChangesAsync();

            return aptCatagory;
        }

        private bool AptCatagoryExists(int id)
        {
            return _context.AptCatagories.Any(e => e.AptCatagoryId == id);
        }
    }
}
