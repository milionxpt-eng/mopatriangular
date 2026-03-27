import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [handle]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-gold" />
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <p className="text-muted-foreground">Producto no encontrado</p>
      <Link to="/" className="text-gold hover:underline">Volver</Link>
    </div>
  );

  const selectedVariant = product.variants.edges[selectedVariantIdx]?.node;
  const images = product.images.edges;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("¡Añadido al carrito!", { position: "top-center" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              {images.length > 0 && (
                <div>
                  <div className="rounded-2xl overflow-hidden bg-secondary mb-4">
                    <img
                      src={images[selectedImage]?.node.url}
                      alt={images[selectedImage]?.node.altText || product.title}
                      className="w-full h-auto max-h-[500px] object-contain"
                    />
                  </div>
                  {images.length > 1 && (
                    <div className="flex gap-2">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-gold' : 'border-border'}`}
                        >
                          <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-gradient-gold mb-6">
                {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}€
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

              {product.options.map((option, oi) => (
                option.values.length > 1 && (
                  <div key={oi} className="mb-6">
                    <label className="text-sm font-semibold mb-2 block">{option.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.edges.map((v, vi) => (
                        <button
                          key={vi}
                          onClick={() => setSelectedVariantIdx(vi)}
                          className={`px-4 py-2 rounded-lg border text-sm transition-colors ${vi === selectedVariantIdx ? 'border-gold bg-gold/10 text-gold' : 'border-border hover:border-gold/50'}`}
                        >
                          {v.node.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              ))}

              <Button
                onClick={handleAddToCart}
                disabled={isLoading || !selectedVariant?.availableForSale}
                className="bg-gradient-gold text-primary-foreground font-bold py-6 text-lg hover:opacity-90"
                size="lg"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><ShoppingCart className="w-5 h-5 mr-2" /> Añadir al carrito</>}
              </Button>

              {selectedVariant && !selectedVariant.availableForSale && (
                <p className="text-destructive mt-2 text-sm">Producto agotado</p>
              )}

              <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground">
                <span>📦 Envío gratis</span>
                <span>🔄 30 días devolución</span>
                <span>🔒 Pago seguro</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
