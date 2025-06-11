namespace agrimak.domain
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
        public double Price { get; set; }
        public Category Category { get; set; }
        public string Unit { get; set; }
    }
}
