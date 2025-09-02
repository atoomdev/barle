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
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Bizim Hikayemiz</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Barle Kitchen & Pub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
            Lezzet tutkusunun geleneksel misafirperverlikle buluştuğu, her misafire unutulmaz anlar yaşatan bir deneyim.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-primary">Hakkımızda</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                2025 yılında basit ama iddialı bir vizyonla kurulan Barle Pub, sadece bir yemek mekanı yaratma arzusundan
                doğdu. Aşçılık mükemmeliyetinin samimi misafirperverlikle buluştuğu, her yemeğin unutulmaz bir deneyime
                dönüştüğü bir yer hayal ettik.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                Uzun zamandır arkadaş olan birkaç kişinin hayali olarak başlayan bu yolculuk, sevilen bir topluluk
                buluşma noktasına dönüştü. En kaliteli yerel malzemeleri temin etme, olağanüstü yemekler hazırlama ve
                sıcak, özenli hizmet sunma konusundaki bağlılığımız, bizi yerel yemek sahnesinin temel taşlarından biri
                haline getirdi.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                Bugün, Barle Pub, tutkunun, adanmışlığın ve harika yemeklerin ve samimi misafirperverliğin insanları
                anlamlı şekillerde bir araya getirebileceğine olan inancın bir kanıtı olarak duruyor.
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
            <h2 className="text-4xl font-bold text-primary mb-4">Misyonumuz ve Değerlerimiz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Barle Pub'da yaptığımız her şeyi yönlendiren ilkeler
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
              icon: <Heart className="h-8 w-8 text-accent" />,
              title: "Mükemmellik Tutkusu",
              description:
                "Her yemek, her içecek, her etkileşim gerçek bir özen ve dikkatle hazırlanır.",
              },
              {
              icon: <Users className="h-8 w-8 text-accent" />,
              title: "Önce Topluluk",
              description: "Biz sadece bir restoran değiliz - insanları bir araya getiren bir buluşma noktasıyız.",
              },
              {
              icon: <Award className="h-8 w-8 text-accent" />,
              title: "Tavizsiz Kalite",
              description: "Malzemelerden hizmete kadar, asla mükemmelin altında bir şeyle yetinmeyiz.",
              },
              {
              icon: <ChefHat className="h-8 w-8 text-accent" />,
              title: "Gastronomik Yenilik",
              description: "Geleneksel teknikleri yaratıcı bir dokunuşla harmanlayarak şaşırtıcı ve keyifli deneyimler sunarız.",
              },
              {
              icon: <Wine className="h-8 w-8 text-accent" />,
              title: "Özenle Hazırlanmış Deneyimler",
              description: "Her öğe, unutulmaz yemek deneyimleri yaratmak için özenle seçilir.",
              },
              {
              icon: <Clock className="h-8 w-8 text-accent" />,
              title: "Zamansız Misafirperverlik",
              description: "Her misafiri aileden biri gibi hissettiren sıcak ve samimi bir hizmet.",
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
            <h2 className="text-4xl font-bold mb-6">Barle Pub Farkını Deneyimleyin</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Her detayın özen ve tutkuyla hazırlandığı eşsiz bir yemek deneyimi için bize katılın.
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
              <Link href="/menu">Menümüzü Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
