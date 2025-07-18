import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Target } from "lucide-react";
import { UsageExamplesModal } from "./UsageExamplesModal";

export function TestimonialsSection() {
  const usageExamples = [
    {
      plan: "Enterprise",
      title: "Market Domination Strategy",
      description: "5,000+ monthly calls to dominate multiple markets simultaneously",
      color: "primary"
    },
    {
      plan: "Professional", 
      title: "Scaling Strategy",
      description: "2,000 monthly calls to scale from solo agent to team leader",
      color: "secondary"
    },
    {
      plan: "Starter",
      title: "Foundation Building Strategy", 
      description: "500 monthly calls to build a solid foundation as a new agent",
      color: "accent"
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
            <h3 className="text-2xl font-bold mb-2">Implementation Strategies</h3>
            <p className="text-muted-foreground">Choose your path to success with our proven frameworks</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {usageExamples.map((example, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-strong transition-all duration-300 rounded-xl p-6">
                <div className="text-center space-y-4">
                  <Badge variant="secondary" className="text-sm font-medium">
                    {example.plan} Plan
                  </Badge>
                  <h4 className="text-xl font-bold">{example.title}</h4>
                  <p className="text-muted-foreground text-sm">{example.description}</p>
                  
                  <UsageExamplesModal
                    plan={example.plan}
                    triggerButton={
                      <Button variant="outline" className="w-full mt-4">
                        View Strategy Details
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