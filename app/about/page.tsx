import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Clock, ChefHat, Wine } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              About Barle Pub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              Where passion for exceptional cuisine meets the warmth of traditional hospitality, creating unforgettable
              experiences for every guest.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-primary">Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020 with a simple yet ambitious vision, Barle Pub was born from a desire to create more than
                just a dining establishment. We envisioned a place where culinary excellence meets genuine hospitality,
                where every meal becomes a memorable experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a dream between longtime friends has evolved into a beloved community gathering place.
                Our commitment to sourcing the finest local ingredients, crafting exceptional dishes, and providing
                warm, attentive service has made us a cornerstone of the local dining scene.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Barle Pub stands as a testament to the power of passion, dedication, and the belief that great
                food and genuine hospitality can bring people together in meaningful ways.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Barle+Pub+Interior"
                alt="Barle Pub interior atmosphere"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Barle Pub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-accent" />,
                title: "Passion for Excellence",
                description:
                  "Every dish, every drink, every interaction is crafted with genuine care and attention to detail.",
              },
              {
                icon: <Users className="h-8 w-8 text-accent" />,
                title: "Community First",
                description: "We're more than a restaurant - we're a gathering place that brings people together.",
              },
              {
                icon: <Award className="h-8 w-8 text-accent" />,
                title: "Quality Without Compromise",
                description: "From ingredients to service, we never settle for anything less than exceptional.",
              },
              {
                icon: <ChefHat className="h-8 w-8 text-accent" />,
                title: "Culinary Innovation",
                description: "Blending traditional techniques with creative flair to surprise and delight.",
              },
              {
                icon: <Wine className="h-8 w-8 text-accent" />,
                title: "Curated Experiences",
                description: "Every element is thoughtfully selected to create memorable dining experiences.",
              },
              {
                icon: <Clock className="h-8 w-8 text-accent" />,
                title: "Timeless Hospitality",
                description: "Warm, genuine service that makes every guest feel like family.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals who make Barle Pub special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Head Chef & Co-Founder",
                image: "/placeholder.svg?height=300&width=300&text=Sarah+Mitchell",
                description:
                  "With over 15 years of culinary experience, Sarah brings creativity and precision to every dish.",
              },
              {
                name: "James Rodriguez",
                role: "General Manager & Co-Founder",
                image: "/placeholder.svg?height=300&width=300&text=James+Rodriguez",
                description:
                  "James ensures every guest receives exceptional service and feels welcomed from the moment they arrive.",
              },
              {
                name: "Emma Thompson",
                role: "Sommelier & Beverage Director",
                image: "/placeholder.svg?height=300&width=300&text=Emma+Thompson",
                description:
                  "Emma curates our wine selection and crafts signature cocktails that perfectly complement our cuisine.",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Experience the Barle Pub Difference</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join us for an exceptional dining experience where every detail is crafted with care and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/reservation">Make a Reservation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
