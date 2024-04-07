using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace CaldosAPI
{
    public class Caldo
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Ingredientes { get; set; }
    }

    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public class CaldosController
    {
        private static List<Caldo> _caldos = new List<Caldo>
        {

            
            new Caldo { Id = 1, Nome = "Caldo Verde", Ingredientes = "Couve, batata, linguiça calabresa, cebola, alho" },
            new Caldo { Id = 2, Nome = "Canjiquinha", Ingredientes = "Canjiquinha, costelinha suína, linguiça calabresa, cebola, alho" },
            new Caldo { Id = 3, Nome = "Caldo de mandioquinha", Ingredientes = "Mandioquinha, frango desfiado, cebola, alho, salsinha" },
            new Caldo { Id = 4, Nome = "Caldinho de feijão", Ingredientes = "Feijão, bacon, linguiça calabresa, cebola, alho" },
            new Caldo { Id = 5, Nome = "Caldo de abóbora", Ingredientes = "Abóbora, carne seca, cebola, alho, coentro" },
            new Caldo { Id = 6, Nome = "Caldo de milho verde", Ingredientes = "Milho verde, frango desfiado, cebola, alho, cheiro-verde" },
            new Caldo { Id = 7, Nome = "Caldo de carne seca", Ingredientes = "Carne seca, mandioca, cebola, alho, pimenta" }
        };

        [HttpGet("/caldos")]
        public async Task GetCaldos(HttpContext context)
        {
            var json = JsonConvert.SerializeObject(_caldos);
            await context.Response.WriteAsync(json);
        }

        [HttpGet("/caldos/{id}")]
        public async Task GetCaldoById(HttpContext context, int id)
        {
            var caldo = _caldos.Find(c => c.Id == id);
            if (caldo != null)
            {
                var json = JsonConvert.SerializeObject(caldo);
                await context.Response.WriteAsync(json);
            }
            else
            {
                await context.Response.WriteAsync($"Caldo com ID {id} não encontrado.");
            }
        }

        [HttpPost("/caldos")]
        public async Task AddCaldo(HttpContext context)
        {
            using (var reader = new StreamReader(context.Request.Body))
            {
                var body = await reader.ReadToEndAsync();
                var caldo = JsonConvert.DeserializeObject<Caldo>(body);
                _caldos.Add(caldo);
                await context.Response.WriteAsync("Caldo adicionado com sucesso.");
            }
        }

        [HttpDelete("/caldos/{id}")]
        public async Task DeleteCaldo(HttpContext context, int id)
        {
            var caldo = _caldos.Find(c => c.Id == id);
            if (caldo != null)
            {
                _caldos.Remove(caldo);
                await context.Response.WriteAsync($"Caldo com ID {id} removido com sucesso.");
            }
            else
            {
                await context.Response.WriteAsync($"Caldo com ID {id} não encontrado.");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}