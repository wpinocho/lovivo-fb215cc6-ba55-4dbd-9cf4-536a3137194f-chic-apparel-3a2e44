import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { SizeGuideModal } from '@/components/SizeGuideModal';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import heroImage from '@/assets/hero-new-drops.jpg';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'tops', label: 'Tops' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'pants', label: 'Pants' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const filteredByCategory = selectedCategory === 'all'
    ? filteredProducts
    : filteredProducts.filter(p => p.tags?.some((tag: string) => tag.toLowerCase().includes(selectedCategory)));

  return (
    <EcommerceTemplate showCart={true}>
      {/* Editorial Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img 
          src={heroImage}
          alt="New Drops"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl space-y-6">
            <div className="editorial-subheading">
              New Season
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground leading-tight">
              New Drops
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-md">
              Discover the latest arrivals from our curated collection. 
              Timeless pieces designed for the modern woman.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Shop Now
              </Button>
              <SizeGuideModal />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Carousel */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-20 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="editorial-subheading mb-3">
                Curated for You
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">
                Trend Collections
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filters & Products */}
      <section id="products" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="editorial-subheading mb-3">
              {selectedCollectionId 
                ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'}` 
                : 'Shop by Category'
              }
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              {selectedCollectionId ? 'Collection' : 'All Products'}
            </h2>

            {/* Category Filters */}
            {!selectedCollectionId && (
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="uppercase tracking-wider text-xs"
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            )}

            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="mb-8"
              >
                View All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-background rounded h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredByCategory.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredByCategory.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="editorial-subheading mb-3">
              Style Inspiration
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">
              The Lookbook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 hover-lift cursor-pointer">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
                  alt="Power Dressing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2">Power Dressing</h3>
                <p className="text-sm text-muted-foreground">Tailored sophistication</p>
              </div>
            </div>

            <div className="space-y-4 hover-lift cursor-pointer">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop"
                  alt="Evening Elegance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2">Evening Elegance</h3>
                <p className="text-sm text-muted-foreground">Statement pieces</p>
              </div>
            </div>

            <div className="space-y-4 hover-lift cursor-pointer">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                  alt="Minimalist Chic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-2">Minimalist Chic</h3>
                <p className="text-sm text-muted-foreground">Effortless style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <FloatingCart />
    </EcommerceTemplate>
  );
};