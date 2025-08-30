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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
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
    "Regular Dining",
    "Birthday Celebration",
    "Anniversary",
    "Business Dinner",
    "Date Night",
    "Family Gathering",
    "Special Occasion",
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
              <CardTitle className="text-3xl text-primary">Reservation Confirmed!</CardTitle>
              <CardDescription className="text-lg">
                Thank you for choosing Barle Pub. We look forward to serving you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-lg">Reservation Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formData.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{formData.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{formData.guests} guests</span>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  A confirmation email has been sent to {formData.email}. Please arrive 10 minutes before your
                  reservation time.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Make Another Reservation
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="/menu">View Our Menu</a>
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Table Reservations</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Reserve Your Table
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              Secure your spot at Barle Pub for an exceptional dining experience. We recommend booking in advance,
              especially for weekend evenings and special events.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Reservation Details</CardTitle>
                  <CardDescription>
                    Please fill out the form below to reserve your table. All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
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
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option} {option === "1" ? "guest" : "guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occasion">Occasion</Label>
                      <Select value={formData.occasion} onValueChange={(value) => handleInputChange("occasion", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion (optional)" />
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
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                      {isLoading ? "Processing Reservation..." : "Confirm Reservation"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Reservation Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Timing</h4>
                      <p className="text-sm text-muted-foreground">
                        Please arrive within 15 minutes of your reservation time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Party Size</h4>
                      <p className="text-sm text-muted-foreground">
                        For parties of 8 or more, please call us directly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Cancellation</h4>
                      <p className="text-sm text-muted-foreground">Please cancel at least 2 hours in advance.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">reservations@barlepub.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For special events or large parties, please contact us directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Opening Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>4:00 PM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
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
        </div>
      </section>
    </div>
  )
}
