﻿using System;
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
    public class ComplainsController : ControllerBase
    {
        private readonly ApartmentDbContext _context;

        public ComplainsController(ApartmentDbContext context)
        {
            _context = context;
        }

        // GET: api/Complains
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Complain>>> GetComplains()
        {
            return await _context.Complains.ToListAsync();
        }

        // GET: api/Complains/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Complain>> GetComplain(int id)
        {
            var complain = await _context.Complains.FindAsync(id);

            if (complain == null)
            {
                return NotFound();
            }

            return complain;
        }

        // PUT: api/Complains/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComplain(int id, Complain complain)
        {
            if (id != complain.ComplainId)
            {
                return BadRequest();
            }

            _context.Entry(complain).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComplainExists(id))
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

        // POST: api/Complains
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Complain>> PostComplain(Complain complain)
        {
            _context.Complains.Add(complain);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComplain", new { id = complain.ComplainId }, complain);
        }

        // DELETE: api/Complains/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Complain>> DeleteComplain(int id)
        {
            var complain = await _context.Complains.FindAsync(id);
            if (complain == null)
            {
                return NotFound();
            }

            _context.Complains.Remove(complain);
            await _context.SaveChangesAsync();

            return complain;
        }

        private bool ComplainExists(int id)
        {
            return _context.Complains.Any(e => e.ComplainId == id);
        }
    }
}
