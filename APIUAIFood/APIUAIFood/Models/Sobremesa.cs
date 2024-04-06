using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace APIUAIFood.Models
{
    public class Sobremesa
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("Nome")]
        public string SobremesaName { get; set; } = null!;

        public decimal Preço { get; set; }

        public string Porção { get; set; } = null!;

    }
}
