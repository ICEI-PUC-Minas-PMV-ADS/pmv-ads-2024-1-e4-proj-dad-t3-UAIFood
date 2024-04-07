using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace APIUAIFood.Models
{
    public class Porções
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("Nome")]
        public string porçõesName { get; set; } = null!;

        public decimal Preço { get; set; }

        public string Tamanho { get; set; } = null!;

        public string Categoria { get; set; } = null!;


    }
}
