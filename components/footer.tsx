import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marka ve Açıklama */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Barle Pub</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Geleneksel pub atmosferi ile modern mutfak mükemmelliğinin mükemmel birleşimini deneyimleyin. Harika yemekler, içecekler ve unutulmaz anlar için varış noktanız.
            </p>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">123 Ana Cadde, Şehir, Eyalet 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@barlepub.com</span>
              </div>
            </div>
          </div>

          {/* Açılış Saatleri */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Açılış Saatleri</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <div className="text-primary-foreground/80">
                  <div>Pzt-Per: 16:00 - 00:00</div>
                  <div>Cuma-Cmt: 16:00 - 02:00</div>
                  <div>Paz: 14:00 - 23:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bülten ve Sosyal Medya */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Bağlantıda Kalın</h4>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="E-posta adresiniz"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Abone Ol
                </Button>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Barle Pub. Tüm hakları saklıdır. Sizin için için özenle tasarlandı.
          </p>
        </div>
      </div>
    </footer>
  )
}
