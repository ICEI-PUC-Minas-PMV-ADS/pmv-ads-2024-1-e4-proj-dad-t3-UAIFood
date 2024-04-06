using APIUAIFood.Services;
using APIUAIFood.Models;
using Microsoft.AspNetCore.Mvc; 

namespace APIUAIFood.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SobremesasController : ControllerBase
    {
       private readonly BooksService _booksService;
        public SobremesasController(BooksService booksService)
        {
            _booksService = booksService;
        }
        [HttpGet]
        public async Task<List<Sobremesa>> Get() =>
            await _booksService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Sobremesa>> Get(string id)
        {
            var sobremesa = await _booksService.GetAsync(id);
            if (sobremesa == null)
            {
                return NotFound();
            }
            return sobremesa;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Sobremesa newSobremesa)
        {
            await _booksService.CreateAsync(newSobremesa);

            return CreatedAtAction(nameof(Get), new { id = newSobremesa.Id }, newSobremesa);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string  id, Sobremesa UpdatedSobremesa)
        {
            var sobremesa = await _booksService.GetAsync(id);
            if (sobremesa == null)   
                return NotFound();
            UpdatedSobremesa.Id = sobremesa.Id;
            await _booksService.UpdateAsync(id, UpdatedSobremesa);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var sobremesa = await _booksService.GetAsync(id);
            if (sobremesa is null)
                return NotFound();
            await _booksService.RemoveAsync(id);
            return NoContent();
        }
    }
}
