namespace agrimak_domain
{
    public class Prduct
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
        public double Price { get; set; }
        public Category Category { get; set; }
    }
}
