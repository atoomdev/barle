import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Star, Leaf, Flame } from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  const menuCategories = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with wild mushrooms, truffle oil, and parmesan",
        price: "$16",
        image: "/placeholder.svg?height=200&width=300&text=Truffle+Arancini",
        badges: ["Vegetarian"],
        popular: true,
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée and pancetta crisps",
        price: "$22",
        image: "/placeholder.svg?height=200&width=300&text=Seared+Scallops",
        badges: ["Gluten-Free"],
      },
      {
        name: "Charcuterie Board",
        description: "Selection of artisanal meats, cheeses, and accompaniments",
        price: "$28",
        image: "/placeholder.svg?height=200&width=300&text=Charcuterie+Board",
        badges: [],
      },
    ],
    mains: [
      {
        name: "Dry-Aged Ribeye",
        description: "28-day aged ribeye with roasted bone marrow and seasonal vegetables",
        price: "$48",
        image: "/placeholder.svg?height=200&width=300&text=Ribeye+Steak",
        badges: ["Chef's Special"],
        popular: true,
      },
      {
        name: "Pan-Roasted Salmon",
        description: "Atlantic salmon with lemon herb crust and quinoa pilaf",
        price: "$32",
        image: "/placeholder.svg?height=200&width=300&text=Salmon+Dish",
        badges: ["Healthy Choice"],
      },
      {
        name: "Barle Burger",
        description: "Wagyu beef patty with aged cheddar, caramelized onions, and truffle fries",
        price: "$24",
        image: "/placeholder.svg?height=200&width=300&text=Gourmet+Burger",
        badges: ["Signature"],
        popular: true,
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice with seasonal mushrooms and aged parmesan",
        price: "$26",
        image: "/placeholder.svg?height=200&width=300&text=Mushroom+Risotto",
        badges: ["Vegetarian"],
      },
    ],
    drinks: [
      {
        name: "Barle Old Fashioned",
        description: "Premium bourbon, house-made bitters, orange peel",
        price: "$16",
        image: "/placeholder.svg?height=200&width=300&text=Old+Fashioned",
        badges: ["Signature"],
        popular: true,
      },
      {
        name: "Craft Beer Selection",
        description: "Rotating selection of local and international craft beers",
        price: "$8-14",
        image: "/placeholder.svg?height=200&width=300&text=Craft+Beer",
        badges: ["Local"],
      },
      {
        name: "Wine by the Glass",
        description: "Curated selection of premium wines from around the world",
        price: "$12-22",
        image: "/placeholder.svg?height=200&width=300&text=Wine+Glass",
        badges: [],
      },
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        price: "$12",
        image: "/placeholder.svg?height=200&width=300&text=Chocolate+Cake",
        badges: [],
        popular: true,
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Fresh seasonal fruits with pastry cream and almond crust",
        price: "$10",
        image: "/placeholder.svg?height=200&width=300&text=Fruit+Tart",
        badges: ["Seasonal"],
      },
    ],
  }

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Signature":
      case "Chef's Special":
        return "default"
      case "Vegetarian":
        return "secondary"
      case "Healthy Choice":
        return "outline"
      default:
        return "outline"
    }
  }

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Vegetarian":
        return <Leaf className="h-3 w-3" />
      case "Chef's Special":
      case "Signature":
        return <Star className="h-3 w-3" />
      case "Spicy":
        return <Flame className="h-3 w-3" />
      default:
        return null
    }
  }

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
              {item.popular && (
                <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <span className="text-xl font-bold text-primary">{item.price}</span>
              </div>
              <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
            </CardHeader>
            {item.badges.length > 0 && (
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge: string, badgeIndex: number) => (
                    <Badge key={badgeIndex} variant={getBadgeVariant(badge)} className="text-xs">
                      {getBadgeIcon(badge)}
                      <span className={getBadgeIcon(badge) ? "ml-1" : ""}>{badge}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Our Menu</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Culinary Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              Discover our carefully crafted menu featuring the finest ingredients, innovative techniques, and flavors
              that celebrate both tradition and creativity.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="animate-fade-in-up bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download Full Menu (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="appetizers" className="text-sm">
                Appetizers
              </TabsTrigger>
              <TabsTrigger value="mains" className="text-sm">
                Main Courses
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-sm">
                Beverages
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-sm">
                Desserts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appetizers" className="space-y-8">
              <MenuSection title="Appetizers & Small Plates" items={menuCategories.appetizers} />
            </TabsContent>

            <TabsContent value="mains" className="space-y-8">
              <MenuSection title="Main Courses" items={menuCategories.mains} />
            </TabsContent>

            <TabsContent value="drinks" className="space-y-8">
              <MenuSection title="Beverages & Cocktails" items={menuCategories.drinks} />
            </TabsContent>

            <TabsContent value="desserts" className="space-y-8">
              <MenuSection title="Desserts & Sweet Treats" items={menuCategories.desserts} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Special Offers</h2>
            <p className="text-xl text-muted-foreground">Don't miss these limited-time experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground">Happy Hour</Badge>
                <CardTitle className="text-2xl">Weekday Happy Hour</CardTitle>
                <CardDescription className="text-base">Monday - Thursday, 4:00 PM - 6:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enjoy 25% off all appetizers and craft cocktails during our weekday happy hour.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All appetizers 25% off</li>
                  <li>• Craft cocktails 25% off</li>
                  <li>• Wine by the glass starting at $9</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-accent text-accent-foreground">Weekend Special</Badge>
                <CardTitle className="text-2xl">Sunday Brunch</CardTitle>
                <CardDescription className="text-base">Sundays, 10:00 AM - 3:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Indulge in our weekend brunch featuring bottomless mimosas and signature dishes.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bottomless mimosas $18</li>
                  <li>• Eggs Benedict variations</li>
                  <li>• Fresh pastries and coffee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Menu?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Reserve your table today and let our culinary team create an unforgettable dining experience for you.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
