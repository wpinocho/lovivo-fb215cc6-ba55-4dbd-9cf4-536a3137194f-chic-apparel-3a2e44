import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card } from '@/components/ui/card'

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="editorial-subheading mb-3">
            Our Story
          </div>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            About ATELIER
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Where timeless elegance meets contemporary design
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl">
                Curating Fashion, Crafting Stories
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to redefine modern femininity, ATELIER brings together 
                the world's most coveted designers and emerging talents. Each piece in our 
                collection is carefully selected to embody sophistication, quality, and 
                timeless appeal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe fashion is more than clothing—it's a form of self-expression, 
                confidence, and art. Our curated selections empower women to embrace their 
                unique style while celebrating craftsmanship and design excellence.
              </p>
            </div>
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop"
                alt="ATELIER Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="editorial-subheading mb-3">
              What We Stand For
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">Quality First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every piece is meticulously inspected to ensure exceptional quality and craftsmanship.
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">Sustainable Fashion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We partner with brands committed to ethical production and environmental responsibility.
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">Customer Obsessed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your satisfaction is our priority. We're here to ensure every shopping experience is exceptional.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="editorial-subheading mb-3">
              Meet the Curators
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-muted overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="Sophia Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Sophia Chen</h3>
              <p className="text-sm text-muted-foreground mb-2">Creative Director</p>
              <p className="text-xs text-muted-foreground">
                Former Vogue editor with 15 years in luxury fashion curation
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-muted overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                  alt="Isabella Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Isabella Martinez</h3>
              <p className="text-sm text-muted-foreground mb-2">Buying Director</p>
              <p className="text-xs text-muted-foreground">
                Expert in emerging designers and sustainable fashion
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square bg-muted overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
                  alt="Emma Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">Emma Thompson</h3>
              <p className="text-sm text-muted-foreground mb-2">Head of Styling</p>
              <p className="text-xs text-muted-foreground">
                Celebrity stylist bringing runway trends to everyday wear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Join Our Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Experience curated fashion that celebrates your individuality. 
            Discover pieces that inspire confidence and elegance.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/#products" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8"
            >
              Shop Now
            </a>
            <a 
              href="/blog" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8"
            >
              Read Our Journal
            </a>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About