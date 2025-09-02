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
        name: "Trüf Arancini",
        description: "Yabani mantar, trüf yağı ve parmesan ile çıtır risotto topları",
        price: "$16",
        image: "/placeholder.svg?height=200&width=300&text=Truffle+Arancini",
        badges: ["Vejetaryen"],
        popular: true,
      },
      {
        name: "Izgara Deniz Tarağı",
        description: "Karnabahar püresi ve pancetta cipsi ile tavada kızartılmış deniz tarakları",
        price: "$22",
        image: "/placeholder.svg?height=200&width=300&text=Seared+Scallops",
        badges: ["Glutensiz"],
      },
      {
        name: "Şarküteri Tabağı",
        description: "El yapımı etler, peynirler ve eşlikçilerden oluşan bir seçim",
        price: "$28",
        image: "/placeholder.svg?height=200&width=300&text=Charcuterie+Board",
        badges: [],
      },
    ],
    mains: [
      {
        name: "Kuru Dinlendirilmiş Antrikot",
        description: "28 gün dinlendirilmiş antrikot, kavrulmuş kemik iliği ve mevsim sebzeleri ile",
        price: "$48",
        image: "/placeholder.svg?height=200&width=300&text=Ribeye+Steak",
        badges: ["Şefin Özel"],
        popular: true,
      },
      {
        name: "Tavada Kızartılmış Somon",
        description: "Limon otlu kabuk ve kinoa pilavı ile Atlantik somonu",
        price: "$32",
        image: "/placeholder.svg?height=200&width=300&text=Salmon+Dish",
        badges: ["Sağlıklı Seçim"],
      },
      {
        name: "Barle Burger",
        description: "Wagyu dana köftesi, yaşlandırılmış çedar, karamelize soğan ve trüf patates kızartması ile",
        price: "$24",
        image: "/placeholder.svg?height=200&width=300&text=Gourmet+Burger",
        badges: ["İmza"],
        popular: true,
      },
      {
        name: "Yabani Mantar Risotto",
        description: "Mevsim mantarları ve yaşlandırılmış parmesan ile kremalı arborio pirinci",
        price: "$26",
        image: "/placeholder.svg?height=200&width=300&text=Mushroom+Risotto",
        badges: ["Vejetaryen"],
      },
    ],
    drinks: [
      {
        name: "Barle Old Fashioned",
        description: "Premium bourbon, ev yapımı bitters, portakal kabuğu",
        price: "$16",
        image: "/placeholder.svg?height=200&width=300&text=Old+Fashioned",
        badges: ["İmza"],
        popular: true,
      },
      {
        name: "Craft Bira Seçimi",
        description: "Yerel ve uluslararası craft biraların dönen seçimi",
        price: "$8-14",
        image: "/placeholder.svg?height=200&width=300&text=Craft+Beer",
        badges: ["Yerel"],
      },
      {
        name: "Kadeh Şarap",
        description: "Dünyanın dört bir yanından seçilmiş premium şaraplar",
        price: "$12-22",
        image: "/placeholder.svg?height=200&width=300&text=Wine+Glass",
        badges: [],
      },
    ],
    desserts: [
      {
        name: "Çikolatalı Lava Kek",
        description: "Sıcak çikolatalı kek, akışkan merkez ve vanilyalı dondurma ile",
        price: "$12",
        image: "/placeholder.svg?height=200&width=300&text=Chocolate+Cake",
        badges: [],
        popular: true,
      },
      {
        name: "Mevsim Meyveli Tart",
        description: "Taze mevsim meyveleri, pastacı kreması ve bademli taban ile",
        price: "$10",
        image: "/placeholder.svg?height=200&width=300&text=Fruit+Tart",
        badges: ["Mevsimlik"],
      },
    ],
  }

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "İmza":
      case "Şefin Özel":
        return "default"
      case "Vejetaryen":
        return "secondary"
      case "Sağlıklı Seçim":
        return "outline"
      default:
        return "outline"
    }
  }

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Vejetaryen":
        return <Leaf className="h-3 w-3" />
      case "Şefin Özel":
      case "İmza":
        return <Star className="h-3 w-3" />
      case "Baharatlı":
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
                  Popüler
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
      {/* Kahraman Bölümü */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Menümüz</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Mutfak Mükemmelliği
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              En kaliteli malzemeler, yenilikçi teknikler ve hem geleneği hem de yaratıcılığı kutlayan lezzetlerle özenle hazırlanmış menümüzü keşfedin.
            </p>
            <div className="mt-8">
            <Button variant="outline" className="animate-fade-in-up bg-transparent">
              <Link href="/barlemenu.pdf" target="_blank" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Tüm Menüyü İndir (PDF)
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menü İçeriği */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="appetizers" className="text-sm">
                Başlangıçlar
              </TabsTrigger>
              <TabsTrigger value="mains" className="text-sm">
                Ana Yemekler
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-sm">
                İçecekler
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-sm">
                Tatlılar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appetizers" className="space-y-8">
              <MenuSection title="Başlangıçlar ve Küçük Tabaklar" items={menuCategories.appetizers} />
            </TabsContent>

            <TabsContent value="mains" className="space-y-8">
              <MenuSection title="Ana Yemekler" items={menuCategories.mains} />
            </TabsContent>

            <TabsContent value="drinks" className="space-y-8">
              <MenuSection title="İçecekler ve Kokteyller" items={menuCategories.drinks} />
            </TabsContent>

            <TabsContent value="desserts" className="space-y-8">
              <MenuSection title="Tatlılar ve Tatlı İkramlar" items={menuCategories.desserts} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Özel Teklifler */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Özel Teklifler</h2>
            <p className="text-xl text-muted-foreground">Bu sınırlı süreli deneyimleri kaçırmayın</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground">Mutlu Saat</Badge>
                <CardTitle className="text-2xl">Hafta İçi Mutlu Saat</CardTitle>
                <CardDescription className="text-base">Pazartesi - Perşembe, 16:00 - 18:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hafta içi mutlu saatimizde tüm başlangıçlar ve el yapımı kokteyllerde %25 indirimden yararlanın.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tüm başlangıçlarda %25 indirim</li>
                  <li>• El yapımı kokteyllerde %25 indirim</li>
                  <li>• Kadeh şaraplar $9'dan başlayan fiyatlarla</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-accent text-accent-foreground">Hafta Sonu Özel</Badge>
                <CardTitle className="text-2xl">Pazar Brunch'ı</CardTitle>
                <CardDescription className="text-base">Pazar günleri, 10:00 - 15:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sınırsız mimoza ve imza yemekler içeren hafta sonu brunch'ımızın keyfini çıkarın.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sınırsız mimoza $18</li>
                  <li>• Eggs Benedict çeşitleri</li>
                  <li>• Taze hamur işleri ve kahve</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eylem Çağrısı */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Menümüzü Denemeye Hazır mısınız?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Bugün masanızı ayırtın ve mutfak ekibimizin sizin için unutulmaz bir yemek deneyimi yaratmasına izin verin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/reservation">Rezervasyon Yap</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
