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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              We'd love to hear from you. Whether you have questions, feedback, or want to plan a special event, our
              team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Visit Us</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Located in the heart of the city, Barle Pub is easily accessible and offers a warm, welcoming
                  atmosphere for all occasions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Main Street
                      <br />
                      Downtown District
                      <br />
                      City, State 12345
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Available during business hours</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@barlepub.com" className="hover:text-primary transition-colors">
                        info@barlepub.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Mon - Thu</span>
                        <span>4:00 PM - 12:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fri - Sat</span>
                        <span>4:00 PM - 2:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>2:00 PM - 11:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Have a question or want to share feedback? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                        <Send className="h-4 w-4 mr-2" />
                        {isLoading ? "Sending Message..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of downtown, easy to reach by car or public transport
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for Google Maps - In a real implementation, you'd integrate with Google Maps API */}
            <div className="bg-muted h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Interactive Map</h3>
                  <p className="text-muted-foreground">Google Maps integration would be implemented here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Main Street, Downtown District, City, State 12345
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.google.com/?q=123+Main+Street,+City,+State"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Private Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Planning a special celebration? We offer private dining options for groups of all sizes.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:events@barlepub.com">Contact Events Team</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Catering Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bring Barle Pub's exceptional cuisine to your location with our catering services.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:catering@barlepub.com">Catering Inquiries</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Gift Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Give the gift of exceptional dining with Barle Pub gift cards, perfect for any occasion.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:info@barlepub.com?subject=Gift Card Inquiry">Purchase Gift Cards</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Barle Pub?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you're planning a special night out or just want to enjoy great food and drinks, we're here to make
            it memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="/reservation">Make a Reservation</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="/menu">View Our Menu</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
