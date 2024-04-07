using APIUAIFood.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;
namespace APIUAIFood.Services
{
    public class PorçõesService
    {
        private readonly IMongoCollection<Porções> _porçõesCollection;
        public PorçõesService(
            IOptions<BookStoreDatabaseSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                bookStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                bookStoreDatabaseSettings.Value.DatabaseName);
            _porçõesCollection = mongoDatabase.GetCollection<Porções>(
                bookStoreDatabaseSettings.Value.BooksCollectionName);
        }
        public async Task<List<Porções>> GetAsync() =>
            await _porçõesCollection.Find(_ => true).ToListAsync();
        public async Task<Porções?> GetAsync(string id) =>
            await _porçõesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Porções newPorções) =>
            await _porçõesCollection.InsertOneAsync(newPorções);
        public async Task UpdateAsync(string id, Porções updatedPorções) =>
            await _porçõesCollection.ReplaceOneAsync(x => x.Id == id, updatedPorções);
        public async Task RemoveAsync(string id) =>
            await _porçõesCollection.DeleteOneAsync(x => x.Id == id);

    }
}
