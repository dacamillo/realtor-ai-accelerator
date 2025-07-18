import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Clock } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Top Producer",
      location: "Austin, TX",
      avatar: "SM",
      testimonial: "Smart Solution transformed my business completely. I went from 12 deals to 38 deals in my first year. The AI voice receptionist captures leads I would have lost, and the automation saves me 6 hours every day.",
      metrics: {
        deals: "+217% deals",
        time: "6 hrs saved/day",
        roi: "1,247% ROI"
      },
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "Real Estate Team Leader",
      location: "Miami, FL",
      avatar: "MR",
      testimonial: "Managing a team of 8 agents was chaos until Smart Solution. Now every lead is captured, qualified, and routed automatically. Our team conversion rate jumped from 11% to 28%. This system is a game-changer.",
      metrics: {
        conversion: "28% conversion",
        team: "8 agents managed",
        growth: "+156% revenue"
      },
      rating: 5
    },
    {
      name: "Jennifer Chen",
      title: "Luxury Real Estate Specialist",
      location: "San Francisco, CA",
      avatar: "JC",
      testimonial: "The AI outbound calling feature is incredible. It does my circle prospecting, FSBO follow-up, and past client check-ins automatically. I closed 3 deals last month just from AI-generated appointments.",
      metrics: {
        calls: "2,400 calls/month",
        appointments: "47 appointments",
        deals: "3 deals from AI"
      },
      rating: 5
    },
    {
      name: "David Thompson",
      title: "Commercial Realtor",
      location: "Denver, CO",
      avatar: "DT",
      testimonial: "I was skeptical about AI, but Smart Solution proved me wrong. The missed call text back feature alone has captured 23 leads this month that I would have lost. The ROI is unbelievable.",
      metrics: {
        leads: "23 recovered leads",
        response: "< 30 sec response",
        conversion: "34% conversion"
      },
      rating: 5
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "847%",
      label: "Average ROI Increase"
    },
    {
      icon: Users,
      value: "500+",
      label: "Successful Realtors"
    },
    {
      icon: Clock,
      value: "40+",
      label: "Hours Saved Per Month"
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-success border-success">
            Proven Results
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from <span className="text-primary">Real Realtors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Smart Solution Agency is transforming real estate businesses across the country.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center bg-muted/30 rounded-lg p-2">
                      <div className="font-semibold text-sm text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join 500+ Realtors Already <span className="text-primary">Winning with Smart Solution</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Don't let another lead slip away. Start your transformation today.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ Setup included</span>
            <span>✓ Dedicated support</span>
          </div>
        </div>
      </div>
    </section>
  );
}