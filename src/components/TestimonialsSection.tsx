import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Target } from "lucide-react";
import { UsageExamplesModal } from "./UsageExamplesModal";

export function TestimonialsSection() {
  const usageExamples = [
    {
      plan: "Enterprise",
      title: "Market Domination Blueprint",
      description: "How 20+ top producers control entire markets using our system...",
      highlight: "5,000+ AI calls/month",
      urgent: "🚀 Most Popular",
      useCases: [
        "Circle Prospect 8+ New Listings Weekly",
        "Dominate Multiple Luxury Markets",
        "Generate 25+ Listing Appointments/Week",
        "Scale Team to 6-Figure Monthly Production",
        "Run 3+ Open Houses Simultaneously"
      ]
    },
    {
      plan: "Professional", 
      title: "Team Leader Transformation",
      description: "The 90-day roadmap from solo agent to team leader...",
      highlight: "2,000 AI calls/month",
      urgent: "⚡ Best Value",
      useCases: [
        "Scale Beyond 50 Transactions/Year",
        "Build Consistent Listing Pipeline",
        "Run Weekly Market Events",
        "Geographic Farm Expansion",
        "Database Reactivation System"
      ]
    },
    {
      plan: "Starter",
      title: "Rookie to Rockstar Formula", 
      description: "The exact system new agents use to close 10+ deals monthly...",
      highlight: "500 AI calls/month",
      urgent: "🎯 Perfect Start",
      useCases: [
        "Circle Prospect Every New Listing",
        "Host Successful Open Houses",
        "Nurture Past Client Relationships",
        "Convert Cold Leads to Appointments",
        "Build Foundation for Growth"
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

        {/* Usage Examples Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Real Agent Success Blueprints</h3>
            <p className="text-muted-foreground">Discover the exact strategies our top performers use daily</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {usageExamples.map((example, index) => (
              <div key={index} className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-2 border-primary/20 shadow-glow hover:shadow-strong hover:border-primary/40 transition-all duration-300 rounded-xl p-8 group overflow-hidden min-h-[480px]">
                {/* Urgent Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg z-10">
                  {example.urgent}
                </div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative text-center space-y-6 h-full flex flex-col">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-sm font-bold text-primary border-primary bg-primary/10 px-3 py-1">
                      {example.plan} Plan
                    </Badge>
                    <div className="text-xl font-bold text-primary">{example.highlight}</div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {example.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {example.description}
                  </p>
                  
                  {/* Use Cases Preview */}
                  <div className="flex-1 text-left space-y-3">
                    <h5 className="text-sm font-semibold text-center text-muted-foreground mb-4">What You'll Learn:</h5>
                    <div className="space-y-2">
                      {example.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <UsageExamplesModal
                    plan={example.plan}
                    triggerButton={
                      <Button 
                        variant="default" 
                        size="lg"
                        className="w-full mt-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 py-3"
                      >
                        🔓 Unlock Complete Strategy
                      </Button>
                    }
                  />
                </div>
              </div>
            ))}
          </div>
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