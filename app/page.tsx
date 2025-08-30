import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, MapPin, Users, Wine, Utensils, Music, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat gpu-accelerated"
          style={{
            backgroundImage: `url('/elegant-pub-interior-with-warm-lighting-wooden-tab.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-accent text-accent-foreground animate-fade-in-up hover-scale">
            Premium Dining Experience
          </Badge>
          <h1 className="text-responsive-6xl font-bold mb-6 animate-fade-in-up-delay-1 text-balance">
            Welcome to <span className="text-accent animate-parallax-float inline-block">Barle Pub</span>
          </h1>
          <p className="text-responsive-2xl mb-8 text-white/90 animate-fade-in-up-delay-2 max-w-2xl mx-auto text-pretty">
            Where tradition meets modern excellence. Experience exceptional cuisine, craft beverages, and unforgettable
            moments in our elegant atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-primary hover-lift"
            >
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hover-lift bg-transparent"
            >
              <Link href="/reservation">Reserve Your Table</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-responsive-4xl font-bold text-primary mb-4">Why Choose Barle Pub?</h2>
              <p className="text-responsive-xl text-muted-foreground max-w-2xl mx-auto">
                Discover what makes us the premier destination for exceptional dining and entertainment
              </p>
            </div>
          </ScrollReveal>

          <div className="grid responsive-grid">
            {[
              {
                icon: <Utensils className="h-8 w-8 text-accent" />,
                title: "Exceptional Cuisine",
                description: "Crafted with the finest ingredients and culinary expertise",
              },
              {
                icon: <Wine className="h-8 w-8 text-accent" />,
                title: "Premium Beverages",
                description: "Curated selection of wines, craft beers, and signature cocktails",
              },
              {
                icon: <Music className="h-8 w-8 text-accent" />,
                title: "Live Entertainment",
                description: "Regular live music and special events for memorable evenings",
              },
              {
                icon: <Users className="h-8 w-8 text-accent" />,
                title: "Warm Atmosphere",
                description: "Perfect setting for intimate dinners and social gatherings",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="text-center card-interactive hover-lift gpu-accelerated">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit hover-scale">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Sections */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Menu Highlight */}
            <ScrollReveal>
              <div className="space-y-6">
                <Badge className="bg-primary text-primary-foreground hover-scale">Our Menu</Badge>
                <h3 className="text-responsive-4xl font-bold text-primary">Culinary Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From traditional pub favorites to innovative modern dishes, our menu showcases the best of both
                  worlds. Each dish is carefully crafted using locally sourced ingredients and time-honored techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Signature Steaks", "Fresh Seafood", "Craft Burgers", "Vegetarian Options"].map((item, index) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="text-sm hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 btn-primary hover-lift">
                  <Link href="/menu">View Full Menu</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative hover-lift">
                <img
                  src="/gourmet-pub-food-plating-with-elegant-presentation.png"
                  alt="Gourmet pub cuisine"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover gpu-accelerated"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Events & About Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Events Card */}
            <ScrollReveal>
              <Card className="card-interactive hover-lift gpu-accelerated">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-6 w-6 text-accent" />
                    <Badge className="bg-accent text-accent-foreground hover-scale">Upcoming Events</Badge>
                  </div>
                  <CardTitle className="text-2xl">Live Music & Special Events</CardTitle>
                  <CardDescription className="text-base">
                    Join us for unforgettable evenings featuring live performances and special celebrations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg hover-lift">
                    <Music className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Jazz Night</p>
                      <p className="text-sm text-muted-foreground">Every Friday at 8 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg hover-lift">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Wine Tasting</p>
                      <p className="text-sm text-muted-foreground">Monthly special events</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full hover-lift bg-transparent">
                    <Link href="/events">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* About Card */}
            <ScrollReveal delay={200}>
              <Card className="card-interactive hover-lift gpu-accelerated">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    <Badge className="bg-primary text-primary-foreground hover-scale">Our Story</Badge>
                  </div>
                  <CardTitle className="text-2xl">About Barle Pub</CardTitle>
                  <CardDescription className="text-base">
                    Discover the passion and dedication behind our exceptional dining experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Founded with a vision to create the perfect gathering place, Barle Pub combines traditional
                    hospitality with contemporary sophistication. Our commitment to quality and service has made us a
                    beloved destination for food enthusiasts and social gatherings alike.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Est. 2020</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Family Owned</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full hover-lift bg-transparent">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-responsive-4xl font-bold mb-6">Ready for an Exceptional Experience?</h2>
            <p className="text-responsive-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join us at Barle Pub for an unforgettable dining experience. Reserve your table today and discover why
              we're the premier destination for exceptional cuisine and hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90 btn-primary hover-lift"
              >
                <Link href="/reservation">Make a Reservation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover-lift"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
