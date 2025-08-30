"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Music, Users, Star, ChefHat } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const [selectedMonth, setSelectedMonth] = useState("december")

  const featuredEvents = [
    {
      id: 1,
      title: "New Year's Eve Gala",
      date: "December 31, 2024",
      time: "8:00 PM - 2:00 AM",
      image: "/placeholder.svg?height=300&width=500&text=New+Years+Eve+Gala",
      description: "Ring in the new year with an elegant evening of fine dining, live jazz, and champagne toasts.",
      price: "$125 per person",
      category: "Special Event",
      featured: true,
      capacity: "Limited seating available",
    },
    {
      id: 2,
      title: "Wine Tasting Evening",
      date: "January 15, 2025",
      time: "6:30 PM - 9:00 PM",
      image: "/placeholder.svg?height=300&width=500&text=Wine+Tasting",
      description: "Explore exceptional wines from renowned vineyards paired with artisanal cheese selections.",
      price: "$65 per person",
      category: "Wine Event",
      featured: true,
      capacity: "20 guests maximum",
    },
  ]

  const upcomingEvents = [
    {
      id: 3,
      title: "Jazz Night with The Blue Notes",
      date: "Every Friday",
      time: "8:00 PM - 11:00 PM",
      icon: <Music className="h-6 w-6 text-accent" />,
      description: "Enjoy smooth jazz performances while savoring our signature cocktails.",
      recurring: true,
    },
    {
      id: 4,
      title: "Chef's Table Experience",
      date: "First Saturday of each month",
      time: "7:00 PM - 10:00 PM",
      icon: <ChefHat className="h-6 w-6 text-accent" />,
      description: "An intimate dining experience with our head chef featuring a 7-course tasting menu.",
      recurring: true,
      price: "$95 per person",
    },
    {
      id: 5,
      title: "Trivia Night",
      date: "Every Wednesday",
      time: "7:00 PM - 9:00 PM",
      icon: <Users className="h-6 w-6 text-accent" />,
      description: "Test your knowledge and win prizes in our weekly trivia competition.",
      recurring: true,
    },
    {
      id: 6,
      title: "Sunday Brunch & Live Acoustic",
      date: "Every Sunday",
      time: "10:00 AM - 3:00 PM",
      icon: <Music className="h-6 w-6 text-accent" />,
      description: "Relaxing acoustic performances complement our weekend brunch menu.",
      recurring: true,
    },
  ]

  const monthlyEvents = {
    december: [
      { date: "Dec 6", event: "Wine Pairing Dinner", time: "7:00 PM" },
      { date: "Dec 13", event: "Holiday Jazz Night", time: "8:00 PM" },
      { date: "Dec 20", event: "Christmas Celebration", time: "6:00 PM" },
      { date: "Dec 31", event: "New Year's Eve Gala", time: "8:00 PM", featured: true },
    ],
    january: [
      { date: "Jan 3", event: "New Year Recovery Brunch", time: "10:00 AM" },
      { date: "Jan 10", event: "Burns Night Celebration", time: "7:00 PM" },
      { date: "Jan 15", event: "Wine Tasting Evening", time: "6:30 PM", featured: true },
      { date: "Jan 24", event: "Winter Comfort Food Night", time: "6:00 PM" },
    ],
    february: [
      { date: "Feb 7", event: "Valentine's Day Preview", time: "7:00 PM" },
      { date: "Feb 14", event: "Valentine's Day Special", time: "6:00 PM", featured: true },
      { date: "Feb 21", event: "Whiskey Tasting", time: "7:30 PM" },
      { date: "Feb 28", event: "Leap Year Celebration", time: "8:00 PM" },
    ],
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground animate-fade-in-up">Events & Entertainment</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up text-balance">
              Unforgettable Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up text-pretty">
              From intimate wine tastings to lively jazz nights, discover the events that make Barle Pub a destination
              for memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Events</h2>
            <p className="text-xl text-muted-foreground">Don't miss these special occasions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-64 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{event.capacity}</span>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/reservation">Reserve Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Regular Events</h2>
            <p className="text-xl text-muted-foreground">Weekly entertainment you can count on</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {event.icon}
                    <Badge variant="secondary">Regular Event</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    {event.price && <span className="font-medium text-primary">{event.price}</span>}
                    <Button variant="outline" asChild>
                      <Link href="/reservation">Book Table</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Event Calendar</h2>
            <p className="text-xl text-muted-foreground">Plan your visits around our special events</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {Object.keys(monthlyEvents).map((month) => (
                  <Button
                    key={month}
                    variant={selectedMonth === month ? "default" : "outline"}
                    onClick={() => setSelectedMonth(month)}
                    className="capitalize"
                  >
                    {month}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monthlyEvents[selectedMonth as keyof typeof monthlyEvents].map((event, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow duration-300 ${
                    event.featured ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{event.date.split(" ")[1]}</div>
                          <div className="text-xs text-muted-foreground uppercase">{event.date.split(" ")[0]}</div>
                        </div>
                        <div>
                          <h4 className="font-medium">{event.event}</h4>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                      {event.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Us for Your Next Event</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether it's a special celebration or a regular night out, Barle Pub offers the perfect atmosphere for
            memorable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/reservation">Reserve Your Table</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Private Event Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
