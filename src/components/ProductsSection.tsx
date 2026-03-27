import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductsSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 10 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("¡Añadido al carrito!", { position: "top-center" });
  };

  if (loading) return (
    <section className="py-20">
      <div className="flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-gold" /></div>
    </section>
  );

  if (products.length === 0) return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Nuestros <span className="text-gradient-gold">Productos</span></h2>
        <p className="text-muted-foreground">No hay productos disponibles todavía.</p>
      </div>
    </section>
  );

  return (
    <section id="productos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Nuestros <span className="text-gradient-gold">Productos</span>
          </h2>
          <p className="text-muted-foreground text-lg">Elige el pack perfecto para tu hogar</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const variant = product.node.variants.edges[0]?.node;
            const image = product.node.images.edges[0]?.node;
            return (
              <motion.div
                key={product.node.id}
                className="bg-card rounded-2xl overflow-hidden border-gradient-gold group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.node.handle}`}>
                  <div className="aspect-square bg-secondary overflow-hidden">
                    {image && (
                      <img
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`/product/${product.node.handle}`}>
                    <h3 className="font-display font-bold text-lg mb-2 hover:text-gold transition-colors">{product.node.title}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.node.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient-gold">
                      {parseFloat(variant?.price.amount || "0").toFixed(2)}€
                    </span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      disabled={isLoading || !variant?.availableForSale}
                      className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" /> Añadir
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
