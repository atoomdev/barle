import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, MapPin, Users, Wine, Utensils, Music, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Kahraman Bölümü */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arka Plan Görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat gpu-accelerated"
        style={{
        backgroundImage: `url('/elegant-pub-interior-with-warm-lighting-wooden-tab.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Kahraman İçeriği */}
      {/* Logo */}
      <div className="relative z-10 text-center w-full px-4">
        <img 
        src="/logo.webp"   // logoyu public klasörüne koyun
        alt="Barle Pub Logo"
        className="h-20 mb-4 mx-auto"   // yüksekliği 80px, altta boşluk bırakır, ortalanır
        />
        <div className="text-center text-white max-w-4xl mx-auto">
        <Badge className="mb-6 bg-accent text-accent-foreground animate-fade-in-up hover-scale">
          Premium Yemek Deneyimi
        </Badge>
        <h1 className="text-responsive-6xl font-bold mb-6 animate-fade-in-up-delay-1 text-balance">
          <span className="text-accent animate-parallax-float inline-block">Barle Pub</span>'a Hoş Geldiniz
        </h1>
        <p className="text-responsive-2xl mb-8 text-white/90 animate-fade-in-up-delay-2 max-w-2xl mx-auto text-pretty">
          Gelenekle modern mükemmeliyetin buluştuğu yer. Şık atmosferimizde eşsiz mutfak, el yapımı içecekler ve unutulmaz anlar yaşayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground btn-primary hover-lift"
          >
          <Link href="/menu">Menümüzü Keşfedin</Link>
          </Button>
          <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-primary hover-lift bg-transparent"
          >
          <Link href="/reservation">Masanızı Ayırtın</Link>
          </Button>
        </div>
        </div>
      </div>
        {/* Kaydırma Göstergesi */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Özellikler Bölümü */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-responsive-4xl font-bold text-primary mb-4">Neden Barle Pub'ı Seçmelisiniz?</h2>
              <p className="text-responsive-xl text-muted-foreground max-w-2xl mx-auto">
                Bizi olağanüstü yemek ve eğlence için birinci sınıf bir destinasyon yapan şeyleri keşfedin
              </p>
            </div>
          </ScrollReveal>

          <div className="grid responsive-grid">
            {[
              {
                icon: <Utensils className="h-8 w-8 text-accent" />,
                title: "Olağanüstü Mutfak",
                description: "En kaliteli malzemeler ve mutfak uzmanlığıyla hazırlanmıştır",
              },
              {
                icon: <Wine className="h-8 w-8 text-accent" />,
                title: "Premium İçecekler",
                description: "Şaraplar, el yapımı biralar ve imza kokteyllerinden oluşan seçkin bir koleksiyon",
              },
              {
                icon: <Music className="h-8 w-8 text-accent" />,
                title: "Canlı Eğlence",
                description: "Unutulmaz akşamlar için düzenli canlı müzik ve özel etkinlikler",
              },
              {
                icon: <Users className="h-8 w-8 text-accent" />,
                title: "Sıcak Atmosfer",
                description: "Samimi akşam yemekleri ve sosyal toplantılar için mükemmel ortam",
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

      {/* Vurgulanan Bölümler */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Menü Vurgusu */}
            <ScrollReveal>
              <div className="space-y-6">
                <Badge className="bg-primary text-primary-foreground hover-scale">Menümüz</Badge>
                <h3 className="text-responsive-4xl font-bold text-primary">Mutfak Mükemmelliği</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Geleneksel pub favorilerinden yenilikçi modern yemeklere kadar, menümüz her iki dünyanın en iyilerini sergiliyor. Her yemek, yerel kaynaklı malzemeler ve zamanla test edilmiş teknikler kullanılarak özenle hazırlanır.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["İmza Biftekler", "Taze Deniz Ürünleri", "El Yapımı Burgerler", "Vejetaryen Seçenekler"].map((item, index) => (
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
                  <Link href="/menu">Tam Menüyü Görüntüle</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative hover-lift">
                <img
                  src="/gourmet-pub-food-plating-with-elegant-presentation.png"
                  alt="Gurme pub mutfağı"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover gpu-accelerated"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Etkinlikler ve Hakkımızda Önizlemesi */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Etkinlikler Kartı */}
            <ScrollReveal>
              <Card className="card-interactive hover-lift gpu-accelerated">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-6 w-6 text-accent" />
                    <Badge className="bg-accent text-accent-foreground hover-scale">Yaklaşan Etkinlikler</Badge>
                  </div>
                  <CardTitle className="text-2xl">Canlı Müzik ve Özel Etkinlikler</CardTitle>
                  <CardDescription className="text-base">
                    Canlı performanslar ve özel kutlamalarla unutulmaz akşamlar için bize katılın
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg hover-lift">
                    <Music className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Caz Gecesi</p>
                      <p className="text-sm text-muted-foreground">Her Cuma 20:00'de</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg hover-lift">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Şarap Tadımı</p>
                      <p className="text-sm text-muted-foreground">Aylık özel etkinlikler</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full hover-lift bg-transparent">
                    <Link href="/events">Tüm Etkinlikleri Görüntüle</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Hakkımızda Kartı */}
            <ScrollReveal delay={200}>
              <Card className="card-interactive hover-lift gpu-accelerated">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    <Badge className="bg-primary text-primary-foreground hover-scale">Hikayemiz</Badge>
                  </div>
                  <CardTitle className="text-2xl">Barle Pub Hakkında</CardTitle>
                  <CardDescription className="text-base">
                    Olağanüstü yemek deneyimimizin arkasındaki tutku ve adanmışlığı keşfedin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Mükemmel bir buluşma yeri yaratma vizyonuyla kurulan Barle Pub, geleneksel misafirperverliği çağdaş bir zarafetle birleştiriyor. Kalite ve hizmete olan bağlılığımız, bizi yemek tutkunları ve sosyal toplantılar için sevilen bir destinasyon haline getirdi.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>2020'de Kuruldu</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Aile İşletmesi</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full hover-lift bg-transparent">
                    <Link href="/about">Hakkımızda Daha Fazla Bilgi Edinin</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Eylem Çağrısı */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-responsive-4xl font-bold mb-6">Olağanüstü Bir Deneyime Hazır mısınız?</h2>
            <p className="text-responsive-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Unutulmaz bir yemek deneyimi için Barle Pub'a katılın. Bugün masanızı ayırtın ve neden olağanüstü mutfak ve misafirperverlik için birinci sınıf bir destinasyon olduğumuzu keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90 btn-primary hover-lift"
              >
                <Link href="/reservation">Rezervasyon Yapın</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover-lift"
              >
                <Link href="/contact">Bize Ulaşın</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
