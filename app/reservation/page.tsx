"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    eposta: "",
    telefon: "",
    gün: "",
    saat: "",
    misafirSayisi: "",
    özelGün: "",
    özelİstekler: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Form gönderimini simüle et
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ]

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]

  const occasions = [
    "Normal Yemek",
    "Doğum Günü Kutlaması",
    "Yıldönümü",
    "İş Yemeği",
    "Randevu Gecesi",
    "Aile Toplantısı",
    "Özel Gün",
  ]

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-primary">Rezervasyon Onaylandı!</CardTitle>
              <CardDescription className="text-lg">
                Barle Pub'ı tercih ettiğiniz için teşekkür ederiz. Size hizmet etmek için sabırsızlanıyoruz.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-lg">Rezervasyon Detayları</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>
                      {formData.ad} {formData.soyad}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formData.gün}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{formData.saat}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{formData.misafirSayisi} misafir</span>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {formData.eposta} adresine bir onay e-postası gönderildi. Lütfen rezervasyon saatinden 10 dakika önce gelin.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Başka Bir Rezervasyon Yap
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="/menu">Menümüzü Görüntüle</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Kahraman Bölümü */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Masa Rezervasyonları</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Masanızı Rezerve Edin
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              Barle Pub'da olağanüstü bir yemek deneyimi için yerinizi ayırtın. Özellikle hafta sonları ve özel etkinlikler için önceden rezervasyon yapmanızı öneririz.
            </p>
          </div>
        </div>
      </section>

      {/* Rezervasyon Formu */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Rezervasyon Detayları</CardTitle>
                  <CardDescription>
                    Lütfen aşağıdaki formu doldurun. * ile işaretli alanlar zorunludur.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Kişisel Bilgiler */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Ad *</Label>
                        <Input
                          id="firstName"
                          value={formData.ad}
                          onChange={(e) => handleInputChange("ad", e.target.value)}
                          required
                          placeholder="Adınızı girin"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Soyad *</Label>
                        <Input
                          id="lastName"
                          value={formData.soyad}
                          onChange={(e) => handleInputChange("soyad", e.target.value)}
                          required
                          placeholder="Soyadınızı girin"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta Adresi *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.eposta}
                          onChange={(e) => handleInputChange("eposta", e.target.value)}
                          required
                          placeholder="ornek.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon Numarası *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.telefon}
                          onChange={(e) => handleInputChange("telefon", e.target.value)}
                          required
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Rezervasyon Detayları */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Tarih *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.gün}
                          onChange={(e) => handleInputChange("gün", e.target.value)}
                          required
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Saat *</Label>
                        <Select value={formData.saat} onValueChange={(value) => handleInputChange("saat", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Saat seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Misafir Sayısı *</Label>
                        <Select value={formData.misafirSayisi} onValueChange={(value) => handleInputChange("misafirSayisi", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Misafir sayısını seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option} {option === "1" ? "misafir" : "misafir"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occasion">Özel Gün</Label>
                      <Select value={formData.özelGün} onValueChange={(value) => handleInputChange("özelGün", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Özel gün seçin (isteğe bağlı)" />
                        </SelectTrigger>
                        <SelectContent>
                          {occasions.map((occasion) => (
                            <SelectItem key={occasion} value={occasion}>
                              {occasion}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Özel İstekler</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.özelİstekler}
                        onChange={(e) => handleInputChange("özelİstekler", e.target.value)}
                        placeholder="Herhangi bir diyet kısıtlaması, erişilebilirlik ihtiyacı veya özel istekler..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                      {isLoading ? "Rezervasyon İşleniyor..." : "Rezervasyonu Onayla"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Yan Bilgi */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Rezervasyon Politikası</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Zamanlama</h4>
                      <p className="text-sm text-muted-foreground">
                        Lütfen rezervasyon saatinizden itibaren 15 dakika içinde gelin.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Grup Büyüklüğü</h4>
                      <p className="text-sm text-muted-foreground">
                        8 veya daha fazla kişilik gruplar için lütfen doğrudan bizi arayın.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">İptal</h4>
                      <p className="text-sm text-muted-foreground">Lütfen en az 2 saat önceden iptal edin.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">İletişim Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-posta</p>
                      <p className="text-sm text-muted-foreground">reservations@barlepub.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Özel etkinlikler veya büyük gruplar için lütfen doğrudan bizimle iletişime geçin.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Çalışma Saatleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Pazartesi - Perşembe</span>
                      <span>16:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cuma - Cumartesi</span>
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
        </div>
      </section>
    </div>
  )
}
