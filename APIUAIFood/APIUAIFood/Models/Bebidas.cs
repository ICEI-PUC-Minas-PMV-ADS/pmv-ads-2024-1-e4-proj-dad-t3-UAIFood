using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace APIUAIFood.Models
{
    public class Bebidas
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("Name")]
        public string BebidasName { get; set; } = null!;

        public decimal Price { get; set; }

        public string Tamanho { get; set; } = null!;

        public string Categoria { get; set; } = null!;  

    }
}