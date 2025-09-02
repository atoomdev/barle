"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="pt-16">
      {/* Kahraman Bölümü */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">İletişime Geçin</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Bize Ulaşın
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              Sizi duymaktan mutluluk duyarız. Sorularınız, geri bildirimleriniz veya özel bir etkinlik planlamak
              istiyorsanız, ekibimiz size yardımcı olmaya hazır.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Bizi Ziyaret Edin</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Şehrin kalbinde yer alan Barle Pub, kolayca erişilebilir ve tüm etkinlikler için sıcak, samimi bir
                  atmosfer sunar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Adres</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      İncek Şehit Savcı Mehmet Selim Kiraz Blv No:406/37
                      <br />
                      Vista AVM, Kızılcaşar Mahallesi
                      <br />
                      Gölbaşı/Ankara
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Telefon</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Çalışma saatlerinde ulaşılabilir</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">E-posta</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@barlepub.com" className="hover:text-primary transition-colors">
                        info@barlepub.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">24 saat içinde yanıt vereceğiz</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Çalışma Saatleri</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Pzt - Per</span>
                        <span>16:00 - 00:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cuma - Cts</span>
                        <span>16:00 - 02:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pazar</span>
                        <span>14:00 - 23:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Bize Bir Mesaj Gönderin</CardTitle>
                  <CardDescription>
                    Bir sorunuz mu var veya geri bildirimde mi bulunmak istiyorsunuz? Sizi duymaktan mutluluk duyarız.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Mesajınız için teşekkür ederiz! Size 24 saat içinde geri dönüş yapacağız.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Adınızı ve soyadınızı girin"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta Adresi *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="ornek.email@domain.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Konu *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                          placeholder="Bu konu ne hakkında?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          placeholder="Sorgunuz hakkında daha fazla bilgi verin..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                        <Send className="h-4 w-4 mr-2" />
                        {isLoading ? "Mesaj Gönderiliyor..." : "Mesaj Gönder"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Harita Bölümü */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Bizi Bulun</h2>
            <p className="text-xl text-muted-foreground">
              Şehir merkezinin kalbinde, araba veya toplu taşıma ile kolayca ulaşılabilir
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Google Haritalar için Yer Tutucu - Gerçek bir uygulamada, Google Haritalar API'si ile entegre edersiniz */}
            <div className="bg-muted h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Etkileşimli Harita</h3>
                  <p className="text-muted-foreground">Google Haritalar entegrasyonu burada uygulanacaktır</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    İncek Vista AVM, Kızılcaşar, Incek Şht. Savcı Mehmet Selim Kiraz Blv D:406/37, 06770 Gölbaşı/Ankara
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.google.com/maps/place/Barle+Kitchen+%26+Pub/@39.8299369,32.7353361,17z/data=!4m17!1m10!3m9!1s0x14d341aff0532d65:0x3b44033391237992!2sBarle+Kitchen+%26+Pub!8m2!3d39.8299369!4d32.7353361!10e5!14m1!1BCgIgARICGAI!16s%2Fg%2F11xnw03kv_!3m5!1s0x14d341aff0532d65:0x3b44033391237992!8m2!3d39.8299369!4d32.7353361!16s%2Fg%2F11xnw03kv_?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Haritalar'da Aç
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ek Bilgiler */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Özel Etkinlikler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Özel bir kutlama mı planlıyorsunuz? Her boyutta grup için özel yemek seçenekleri sunuyoruz.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:events@barlepub.com">Etkinlik Ekibiyle İletişime Geçin</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Catering Hizmetleri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Barle Pub'ın mükemmel mutfağını catering hizmetlerimizle mekanınıza getirin.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:catering@barlepub.com">Catering Sorguları</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Hediye Kartları</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Barle Pub hediye kartları ile mükemmel bir yemek deneyimi hediye edin, her durum için mükemmel.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:info@barlepub.com?subject=Gift Card Inquiry">Hediye Kartları Satın Al</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eylem Çağrısı */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Barle Pub'ı Denemeye Hazır mısınız?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            İster özel bir gece planlıyor olun ister sadece harika yemek ve içeceklerin tadını çıkarmak isteyin, buradayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="/reservation">Rezervasyon Yap</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="/menu">Menümüzü Görüntüle</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
