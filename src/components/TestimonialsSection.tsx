import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Clock, Phone, Target, Calendar, Database } from "lucide-react";

export function TestimonialsSection() {
  const usageExamples = [
    {
      name: "Jennifer's Team",
      title: "Enterprise Plan User",
      location: "Dallas, TX",
      avatar: "JT",
      plan: "Enterprise",
      strategy: "Market Domination Strategy",
      description: "How Jennifer's team uses their 5,000+ monthly calls to dominate 4 different markets simultaneously.",
      weeklyBreakdown: [
        {
          week: "Week 1: Market Domination Blitz",
          calls: "1,250 calls",
          details: [
            "150 calls per listing (8 new listings = 1,200 calls)",
            "50 calls to VIP client list for exclusive previews",
            "Targets: 250 contacts, 25-35 listing appointments"
          ]
        },
        {
          week: "Week 2: Event Marketing Blitz", 
          calls: "1,250 calls",
          details: [
            "300 calls per open house (3 houses = 900 calls)",
            "200 calls for investor seminar, 150 for buyer workshop",
            "Targets: 75-100 total event attendees"
          ]
        },
        {
          week: "Week 3: Geographic Expansion",
          calls: "1,250 calls", 
          details: [
            "625 calls per luxury neighborhood (2 areas)",
            "Focus on high-value properties ($500K+)",
            "Targets: 200 contacts, 15-25 luxury consultations"
          ]
        },
        {
          week: "Week 4: Database & Referral Maximization",
          calls: "1,250 calls",
          details: [
            "400 calls to past clients, 400 to sphere, 450 to old leads",
            "Targets: 200 contacts, 25-35 appointments, 15-25 referrals"
          ]
        }
      ],
      advantages: [
        "Multi-agent CRM management",
        "White-label team branding", 
        "Dedicated account manager",
        "Custom voice training for team",
        "Advanced analytics & reporting",
        "24/7 priority support"
      ]
    },
    {
      name: "Mike Rodriguez",
      title: "Professional Plan User",
      location: "Phoenix, AZ",
      avatar: "MR",
      plan: "Professional", 
      strategy: "Scaling Strategy",
      description: "How Mike uses his 2,000 monthly calls to scale from solo agent to team leader.",
      weeklyBreakdown: [
        {
          week: "Week 1: Multi-Listing Prospecting",
          calls: "500 calls",
          details: [
            "150 calls per new listing to surrounding areas",
            "Hi, this is Mike's AI assistant. We have multiple new listings...",
            "Targets: 100 contacts, 8-12 listing appointments"
          ]
        },
        {
          week: "Week 2: Open House + Market Events",
          calls: "500 calls",
          details: [
            "200 calls per open house + 100 for market seminar", 
            "Targets: 30-40 open house attendees, 15-20 seminar attendees"
          ]
        },
        {
          week: "Week 3: Geographic Farming Expansion", 
          calls: "500 calls",
          details: [
            "Systematic calling of 500 homes in target area",
            "Mike is expanding his services to your neighborhood...",
            "Targets: 100 contacts, 5-8 potential listings"
          ]
        },
        {
          week: "Week 4: Database Maximization",
          calls: "500 calls",
          details: [
            "Reactivating old leads and sphere of influence",
            "Targets: 80 contacts, 8-12 appointments, 4-6 referrals"
          ]
        }
      ],
      scalingFeatures: [
        "4x more calls than Starter plan",
        "Advanced lead scoring and qualification",
        "Priority support with custom voice training",
        "Advanced automation workflows"
      ]
    },
    {
      name: "Sarah Chen",
      title: "Starter Plan User",
      location: "Tampa, FL", 
      avatar: "SC",
      plan: "Starter",
      strategy: "Foundation Building Strategy",
      description: "How Sarah uses her 500 monthly calls to build a solid foundation as a new agent.",
      weeklyBreakdown: [
        {
          week: "Week 1: Circle Prospecting",
          calls: "125 calls",
          details: [
            "Calls neighbors around new listings",
            "Hi, this is Sarah's AI assistant about recent activity on Oak Street...",
            "Targets: 25 contacts, 3-5 seller leads"
          ]
        },
        {
          week: "Week 2: Open House Invitations",
          calls: "125 calls", 
          details: [
            "Invites neighborhood to Saturday open house",
            "We're hosting an open house this Saturday at 456 Elm Street...",
            "Targets: 15-20 attendees, 2-3 buyer leads"
          ]
        },
        {
          week: "Week 3: Past Client Check-ins",
          calls: "125 calls",
          details: [
            "Quarterly touch-base with previous clients",
            "Hi, this is Sarah checking in. How are you enjoying your home?",
            "Targets: 5-8 referrals, 1-2 repeat clients"
          ]
        },
        {
          week: "Week 4: Lead Nurturing", 
          calls: "125 calls",
          details: [
            "Follows up on website inquiries and cold leads",
            "Targets: 3-5 listing appointments, 2-3 buyer consultations"
          ]
        }
      ],
      perfectFor: [
        "New agents building their business",
        "Part-time realtors with limited time",
        "Agents afraid of cold calling",
        "Building consistent lead flow"
      ]
    },
    {
      name: "David Kim",
      title: "ROI Calculator User",
      location: "Seattle, WA",
      avatar: "DK", 
      plan: "Calculator",
      strategy: "Strategic Investment Analysis",
      description: "How David uses our ROI calculator to make data-driven decisions about his plan selection.",
      calculatorInputs: [
        "Average Commission: $4,000",
        "Current Deals Per Month: 3", 
        "Plan Selection: Professional ($997/mo)"
      ],
      calculations: [
        "Current Monthly Income: $12,000",
        "Plan Cost: $997/month",
        "Expected Additional Deals: 4-8 per month",
        "New Monthly Income: $28,000-44,000",
        "Monthly ROI Increase: $15,003-31,003",
        "ROI Percentage: 1,505-3,110%"
      ],
      breakEvenAnalysis: [
        "Break even with just 1 extra deal every 4 months",
        "Typical results show 4-8 extra deals per month", 
        "That's a 133-267% increase in income"
      ]
    }
  ];

  const stats = [
    {
      icon: Phone,
      value: "5,000+",
      label: "AI Calls Per Month"
    },
    {
      icon: Users,
      value: "500+",
      label: "Active Users"
    },
    {
      icon: Target,
      value: "100%",
      label: "NAR Compliant"
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Usage Examples
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-primary">Real Agents</span> Use Smart Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how agents implement our AI system to transform their daily operations.
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

        {/* Usage Examples Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {usageExamples.map((example, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {example.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{example.name}</div>
                    <div className="text-sm text-muted-foreground">{example.title}</div>
                    <div className="text-xs text-muted-foreground">{example.location}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {example.plan}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{example.strategy}</CardTitle>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {example.weeklyBreakdown && (
                  <div className="space-y-3">
                    {example.weeklyBreakdown.map((week, idx) => (
                      <div key={idx} className="bg-muted/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{week.week}</h4>
                          <Badge variant="outline" className="text-xs">{week.calls}</Badge>
                        </div>
                        <ul className="space-y-1">
                          {week.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="text-xs text-muted-foreground">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {example.advantages && (
                  <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                    <h4 className="font-semibold text-success mb-2 text-sm">Enterprise Advantages:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {example.advantages.map((advantage, idx) => (
                        <div key={idx} className="text-xs flex items-center gap-1">
                          <div className="w-1 h-1 bg-success rounded-full"></div>
                          {advantage}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {example.scalingFeatures && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <h4 className="font-semibold text-primary mb-2 text-sm">Scaling Power:</h4>
                    {example.scalingFeatures.map((feature, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                )}

                {example.perfectFor && (
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                    <h4 className="font-semibold text-accent mb-2 text-sm">Perfect For:</h4>
                    {example.perfectFor.map((item, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        • {item}
                      </div>
                    ))}
                  </div>
                )}

                {example.calculatorInputs && (
                  <div className="space-y-2">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-2">Calculator Inputs:</h4>
                      {example.calculatorInputs.map((input, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">• {input}</div>
                      ))}
                    </div>
                    <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                      <h4 className="font-semibold text-success text-sm mb-2">Calculations:</h4>
                      {example.calculations.map((calc, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">• {calc}</div>
                      ))}
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <h4 className="font-semibold text-primary text-sm mb-2">Break-Even Analysis:</h4>
                      {example.breakEvenAnalysis.map((analysis, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">• {analysis}</div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Implement <span className="text-primary">Your Own Strategy?</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Choose your plan and start your AI implementation today.
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