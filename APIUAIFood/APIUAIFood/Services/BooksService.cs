using APIUAIFood.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;
namespace APIUAIFood.Services
{
    public class BooksService
    {
        private readonly IMongoCollection<Sobremesa> _booksCollection;
        public BooksService(
            IOptions<BookStoreDatabaseSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                bookStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(
                bookStoreDatabaseSettings.Value.DatabaseName);
            _booksCollection = mongoDatabase.GetCollection<Sobremesa>(
                bookStoreDatabaseSettings.Value.BooksCollectionName);
        }
        public async Task<List<Sobremesa>> GetAsync() =>
            await _booksCollection.Find(_ =>true).ToListAsync();
        public async Task<Sobremesa?> GetAsync(string id)=>
            await _booksCollection.Find(x =>x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(Sobremesa newSobremesa) =>
            await _booksCollection.InsertOneAsync(newSobremesa);
        public async Task UpdateAsync(string id, Sobremesa updatedSobremesa) =>
            await _booksCollection.ReplaceOneAsync(x => x.Id == id, updatedSobremesa);
        public async Task RemoveAsync(string id) =>
            await _booksCollection.DeleteOneAsync(x => x.Id == id);

    }
}
