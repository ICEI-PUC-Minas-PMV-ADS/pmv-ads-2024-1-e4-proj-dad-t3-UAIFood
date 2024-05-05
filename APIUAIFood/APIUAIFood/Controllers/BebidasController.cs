using APIUAIFood.Services;
using APIUAIFood.Models;
using Microsoft.AspNetCore.Mvc;

namespace APIUAIFood.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BebidasController : ControllerBase
    {
        private readonly BebidasService _bebidasService;
        public BebidasController(BebidasService bebidasService)
        {
            _bebidasService = bebidasService;
        }
        [HttpGet]
        public async Task<List<Bebidas>> Get() =>
            await _bebidasService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Bebidas>> Get(string id)
        {
            var bebidas = await _bebidasService.GetAsync(id);
            if (bebidas == null)
            {
                return NotFound();
            }
            return bebidas;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Bebidas newBebidas)
        {
            await _bebidasService.CreateAsync(newBebidas);

            return CreatedAtAction(nameof(Get), new { id = newBebidas.Id }, newBebidas);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Bebidas UpdatedBebidas)
        {
            var bebidas = await _bebidasService.GetAsync(id);
            if (bebidas == null)
                return NotFound();
            UpdatedBebidas.Id = bebidas.Id;
            await _bebidasService.UpdateAsync(id, UpdatedBebidas);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var bebidas = await _bebidasService.GetAsync(id);
            if (bebidas is null)
                return NotFound();
            await _bebidasService.RemoveAsync(id);
            return NoContent();
        }
    }
}
