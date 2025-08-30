import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Barle Pub</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the perfect blend of traditional pub atmosphere with modern culinary excellence. Your
              destination for great food, drinks, and memorable moments.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">123 Main Street, City, State 12345</span>
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

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <div className="text-primary-foreground/80">
                  <div>Mon-Thu: 4:00 PM - 12:00 AM</div>
                  <div>Fri-Sat: 4:00 PM - 2:00 AM</div>
                  <div>Sun: 2:00 PM - 11:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
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
            © 2024 Barle Pub. All rights reserved. | Designed with care for exceptional experiences.
          </p>
        </div>
      </div>
    </footer>
  )
}
