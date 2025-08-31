"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/menu", label: "Menü" },
    { href: "/events", label: "Etkinlikler" },
    { href: "/reservation", label: "Rezervasyon" },
    { href: "/contact", label: "İletişim" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-105">
             <img 
              src="/logo.webp"   // logonuzu public klasörüne koyun
              alt="Barle Pub Logo"
              className="h-17 w-auto" // yüksekliği 48px, orantılı genişlik
             />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-primary hover-lift animate-fade-in-up"
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              <Link href="/reservation">Rezervasyon Yap</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-all duration-300 hover-scale"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
                />
                <X
                  className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-border/50 px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium rounded-md animate-slide-in-right"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 animate-slide-in-right" style={{ animationDelay: `${navItems.length * 0.05}s` }}>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground btn-primary">
                <Link href="/reservation" onClick={() => setIsOpen(false)}>
                  Rezervasyon Yap
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
