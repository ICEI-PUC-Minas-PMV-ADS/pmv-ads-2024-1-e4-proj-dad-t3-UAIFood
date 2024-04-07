using APIUAIFood.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;
namespace APIUAIFood.Services
{
    public class BebidasService
    {
        private readonly IMongoCollection<Bebidas> _bebidasCollection;
        public BebidasService(
            IOptions<BookStoreDatabaseSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                bookStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                bookStoreDatabaseSettings.Value.DatabaseName);
            _bebidasCollection = mongoDatabase.GetCollection<Bebidas>(
                bookStoreDatabaseSettings.Value.BooksCollectionName);
        }
        public async Task<List<Bebidas>> GetAsync() =>
            await _bebidasCollection.Find(_ => true).ToListAsync();
        public async Task<Bebidas?> GetAsync(string id) =>
            await _bebidasCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Bebidas newBebidas) =>
            await _bebidasCollection.InsertOneAsync(newBebidas);
        public async Task UpdateAsync(string id, Bebidas updatedBebidas) =>
            await _bebidasCollection.ReplaceOneAsync(x => x.Id == id, updatedBebidas);
        public async Task RemoveAsync(string id) =>
            await _bebidasCollection.DeleteOneAsync(x => x.Id == id);

    }
}
