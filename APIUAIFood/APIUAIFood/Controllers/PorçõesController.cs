using APIUAIFood.Services;
using APIUAIFood.Models;
using Microsoft.AspNetCore.Mvc;

namespace APIUAIFood.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PorçõesController : ControllerBase
    {
        private readonly PorçõesService _porçõesService;
        public PorçõesController(PorçõesService porçõesService)
        {
            _porçõesService = porçõesService;
        }
        [HttpGet]
        public async Task<List<Porções>> Get() =>
            await _porçõesService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Porções>> Get(string id)
        {
            var porções = await _porçõesService.GetAsync(id);
            if (porções == null)
            {
                return NotFound();
            }
            return porções;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Porções newPorções)
        {
            await _porçõesService.CreateAsync(newPorções);

            return CreatedAtAction(nameof(Get), new { id = newPorções.Id }, newPorções);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Porções UpdatedPorções)
        {
            var porções = await _porçõesService.GetAsync(id);
            if (porções == null)
                return NotFound();
            UpdatedPorções.Id = porções.Id;
            await _porçõesService.UpdateAsync(id, UpdatedPorções);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var porções = await _porçõesService.GetAsync(id);
            if (porções is null)
                return NotFound();
            await _porçõesService.RemoveAsync(id);
            return NoContent();
        }
    }
}
