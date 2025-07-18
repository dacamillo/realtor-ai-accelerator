import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, Target } from "lucide-react";
import { UsageExamplesModal } from "./UsageExamplesModal";

export function TestimonialsSection() {
  const usageExamples = [
    {
      plan: "Enterprise",
      title: "Market Domination Blueprint",
      description: "The secret system top producers use to control entire markets...",
      highlight: "5,000+ AI calls/month",
      urgent: "🚀 Most Popular"
    },
    {
      plan: "Professional", 
      title: "Team Leader Transformation",
      description: "How solo agents build million-dollar teams in 90 days...",
      highlight: "2,000 AI calls/month",
      urgent: "⚡ Best Value"
    },
    {
      plan: "Starter",
      title: "Rookie to Rockstar Formula", 
      description: "The exact playbook new agents use to close 10+ deals monthly...",
      highlight: "500 AI calls/month",
      urgent: "🎯 Perfect Start"
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
          
          <div className="grid lg:grid-cols-3 gap-6">
            {usageExamples.map((example, index) => (
              <div key={index} className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-2 border-primary/20 shadow-glow hover:shadow-strong hover:border-primary/40 transition-all duration-300 rounded-xl p-6 group overflow-hidden">
                {/* Urgent Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {example.urgent}
                </div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative text-center space-y-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs font-bold text-primary border-primary bg-primary/10">
                      {example.plan} Plan
                    </Badge>
                    <div className="text-lg font-bold text-primary">{example.highlight}</div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {example.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {example.description}
                  </p>
                  
                  <UsageExamplesModal
                    plan={example.plan}
                    triggerButton={
                      <Button 
                        variant="default" 
                        className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      >
                        🔓 Unlock Strategy
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