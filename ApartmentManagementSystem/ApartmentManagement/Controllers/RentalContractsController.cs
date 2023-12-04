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
    public class RentalContractsController : ControllerBase
    {
        private readonly ApartmentDbContext _context;

        public RentalContractsController(ApartmentDbContext context)
        {
            _context = context;
        }

        // GET: api/RentalContracts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentalContract>>> GetRentalContracts()
        {
            return await _context.RentalContracts.ToListAsync();
        }

        // GET: api/RentalContracts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentalContract>> GetRentalContract(int id)
        {
            var rentalContract = await _context.RentalContracts.FindAsync(id);

            if (rentalContract == null)
            {
                return NotFound();
            }

            return rentalContract;
        }

        // PUT: api/RentalContracts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentalContract(int id, RentalContract rentalContract)
        {
            if (id != rentalContract.RentalContractId)
            {
                return BadRequest();
            }

            _context.Entry(rentalContract).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentalContractExists(id))
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

        // POST: api/RentalContracts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<RentalContract>> PostRentalContract(RentalContract rentalContract)
        {
            _context.RentalContracts.Add(rentalContract);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRentalContract", new { id = rentalContract.RentalContractId }, rentalContract);
        }

        // DELETE: api/RentalContracts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RentalContract>> DeleteRentalContract(int id)
        {
            var rentalContract = await _context.RentalContracts.FindAsync(id);
            if (rentalContract == null)
            {
                return NotFound();
            }

            _context.RentalContracts.Remove(rentalContract);
            await _context.SaveChangesAsync();

            return rentalContract;
        }

        private bool RentalContractExists(int id)
        {
            return _context.RentalContracts.Any(e => e.RentalContractId == id);
        }
    }
}
