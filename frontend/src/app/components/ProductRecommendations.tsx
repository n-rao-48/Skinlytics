import { motion } from "motion/react";

interface ProductRecommendationsProps {
  concern?: string;
  skinType?: string;
}

const products = [
  {
    id: 1,
    name: "Niacinamide Serum",
    brand: "The Ordinary",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1760895535234-2c39c57cf187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    name: "Retinol Treatment",
    brand: "Paula's Choice",
    price: "$58.00",
    image: "https://images.unsplash.com/photo-1771955216611-0a826d819978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    name: "Hyaluronic Acid",
    brand: "CeraVe",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1768483018807-bd0b9ab86539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    name: "Vitamin C Brightening",
    brand: "SkinCeuticals",
    price: "$166.00",
    image: "https://images.unsplash.com/photo-1739949154765-f2a23bdfa3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export function ProductRecommendations({ concern, skinType }: ProductRecommendationsProps) {
  // TODO: Call API to fetch products based on concern and skinType
  // For now, using static products
  
  return (
    <section className="py-24 px-8 bg-[#F8F7F5]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl text-[#0B0B0B] mb-4 text-center">
          Curated Products
        </h2>
        <p className="text-[#6B7280] text-center mb-16 max-w-2xl mx-auto">
          Premium formulations featuring your recommended ingredient
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#0B0B0B]/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden bg-[#E8E6E1]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#6B7280] mb-1">{product.brand}</p>
                <h3 className="text-lg text-[#0B0B0B] mb-3">{product.name}</h3>
                <p className="text-[#0B0B0B]">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
