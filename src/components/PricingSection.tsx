import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap, Calendar, TrendingUp, Calculator, Shield } from "lucide-react";
import { MonthlyActionPlanPopup, SuccessStoriesPopup, ROICalculatorPopup, ComplianceDetailsPopup } from "./PricingPopups";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$497",
      originalPrice: "$829",
      description: "Perfect for new agents & part-time realtors",
      popular: false,
      paymentLink: "https://link.fastpaydirect.com/payment-link/687ab496d6ab80e70fe6b16a",
      features: [
        "Complete Lead Connector CRM",
        "AI Voice Receptionist (inbound)",
        "Missed Call Text Back",
        "Basic AI social bots",
        "500 outbound AI calls/month",
        "Email automation",
        "Basic reporting",
        "Standard support"
      ],
      roi: "1 extra deal every 8-16 months pays for entire year",
      savings: "vs $550-900/mo for separate tools"
    },
    {
      name: "Professional",
      price: "$997",
      originalPrice: "$1,662",
      description: "Perfect for established agents & small teams",
      popular: true,
      paymentLink: "https://link.fastpaydirect.com/payment-link/687ab4b3ddc6a63a70c55e03",
      features: [
        "Everything in Starter",
        "2,000 outbound AI calls/month",
        "Advanced AI social bots (all platforms)",
        "Lead scoring and qualification",
        "Advanced automation workflows",
        "Priority support",
        "Custom voice training",
        "Advanced analytics"
      ],
      roi: "1 extra deal every 4-8 months pays for entire year",
      savings: "vs $800-1,400/mo for separate tools"
    },
    {
      name: "Enterprise",
      price: "$1,997",
      originalPrice: "$3,328",
      description: "Perfect for top producers & team leaders",
      popular: false,
      paymentLink: "https://link.fastpaydirect.com/payment-link/687ab4c4ddc6a62cc0c55e05",
      features: [
        "Everything in Professional",
        "5,000+ outbound AI calls/month",
        "Multi-agent CRM management",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "24/7 priority support"
      ],
      roi: "1 extra deal every 2-4 months pays for entire year",
      savings: "vs $1,200-1,650/mo for separate tools"
    }
  ];

  return (
    <section id="pricing-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-primary">Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each plan pays for itself with just one extra deal. 
            Compare what you're currently paying for inferior, disconnected tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                
                <div className="my-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-2 text-success">
                    Save {Math.round(((parseInt(plan.originalPrice.replace('$', '').replace(',', '')) - parseInt(plan.price.replace('$', '').replace(',', ''))) / parseInt(plan.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <div className="text-success font-semibold text-sm mb-1">ROI Guarantee:</div>
                  <div className="text-xs text-muted-foreground">{plan.roi}</div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground text-center">{plan.savings}</div>
                </div>

                {/* Interactive Pop-up Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <MonthlyActionPlanPopup 
                    plan={plan.name}
                    triggerButton={
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        Monthly Plan
                      </Button>
                    }
                  />
                  
                  <SuccessStoriesPopup 
                    plan={plan.name}
                    triggerButton={
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Success Stories
                      </Button>
                    }
                  />
                  
                  <ROICalculatorPopup 
                    triggerButton={
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        <Calculator className="w-3 h-3 mr-1" />
                        Calculate ROI
                      </Button>
                    }
                  />
                  
                  <ComplianceDetailsPopup 
                    triggerButton={
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Compliance
                      </Button>
                    }
                  />
                </div>

                <Button 
                  variant={plan.popular ? "cta" : "default"} 
                  size="lg" 
                  className="w-full group mb-2"
                  onClick={() => window.open(plan.paymentLink, '_blank')}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  Start {plan.name} Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="text-xs text-center text-muted-foreground mb-2 px-2">
                  ✅ Setup form sent within minutes of payment
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book a Call First
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-destructive mb-4">Current Solution (Disconnected)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• CRM: $100-300/month</li>
              <li>• Lead Generation: $200-500/month</li>
              <li>• AI Chatbot: $100-400/month</li>
              <li>• Missed Call Service: $50-150/month</li>
              <li>• Social Media Management: $100-300/month</li>
              <li className="pt-2 border-t font-semibold text-destructive">
                Total: $550-1,650/month for inferior tools
              </li>
            </ul>
          </div>

          <div className="bg-success/5 border border-success/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-success mb-4">Smart Solution (Integrated)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Complete CRM + AI Suite</li>
              <li>• 24/7 Lead Capture & Qualification</li>
              <li>• Automated Follow-up & Nurturing</li>
              <li>• Multi-channel Communication</li>
              <li>• Advanced Analytics & Reporting</li>
              <li className="pt-2 border-t font-semibold text-success">
                Total: $497-1,997/month for superior integrated system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}