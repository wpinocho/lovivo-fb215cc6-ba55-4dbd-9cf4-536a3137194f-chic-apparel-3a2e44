import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop"
          alt="Atelier Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
          <div className="space-y-4">
            <div className="editorial-subheading text-primary-foreground">
              Est. 2025
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground">
              About Atelier
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Where timeless elegance meets contemporary design
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="editorial-subheading mb-4">
                Our Story
              </div>
              <h2 className="font-serif text-4xl mb-6">
                Crafting Modern Luxury
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to redefine contemporary women's fashion, 
                  Atelier emerged from a passion for timeless design and exceptional craftsmanship.
                </p>
                <p>
                  Every piece in our collection is thoughtfully curated to embody the perfect 
                  balance between classic elegance and modern sensibility. We believe that true 
                  luxury lies in quality, fit, and the confidence it inspires.
                </p>
                <p>
                  From our atelier to your wardrobe, each garment tells a story of dedication 
                  to excellence and attention to detail.
                </p>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop"
                alt="Fashion Design Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="border-t pt-16">
            <div className="editorial-subheading mb-8 text-center">
              Our Values
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-3">
                <h3 className="font-serif text-2xl">Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We source only the finest materials and work with skilled artisans 
                  to ensure every piece meets our exacting standards.
                </p>
              </div>
              <div className="text-center space-y-3">
                <h3 className="font-serif text-2xl">Sustainability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Committed to responsible fashion, we prioritize ethical production 
                  and timeless designs that transcend seasonal trends.
                </p>
              </div>
              <div className="text-center space-y-3">
                <h3 className="font-serif text-2xl">Craftsmanship</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each garment is a testament to traditional techniques combined 
                  with contemporary innovation and meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-subheading mb-12 text-center">
            Behind the Scenes
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=600&h=600&fit=crop"
                alt="Atelier workspace"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521335751419-603f61523713?w=600&h=600&fit=crop"
                alt="Fabric selection"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop"
                alt="Design sketches"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop"
                alt="Final touches"
                className="w-full h-full object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="editorial-subheading">
            Discover the Collection
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">
            Experience Atelier
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our carefully curated selection of timeless pieces 
            designed to elevate your everyday elegance.
          </p>
          <div className="pt-4">
            <Button size="lg" asChild>
              <Link to="/">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About