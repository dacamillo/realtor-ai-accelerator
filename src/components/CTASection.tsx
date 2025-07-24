import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Clock, 
  Shield, 
  Headphones, 
  Zap,
  CheckCircle
} from "lucide-react";

export function CTASection() {
  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const guarantees = [
    {
      icon: Clock,
      title: "Setup in 24 Hours",
      description: "Get started immediately with our expert setup team"
    },
    {
      icon: Shield,
      title: "30-Day Money Back",
      description: "Not satisfied? Get a full refund, no questions asked"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Direct access to our team for training and support"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/assets/realtor-technology.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Urgency Badge */}
          <Badge variant="outline" className="mb-6 bg-white/10 border-white/30 text-white">
            🔥 Limited Beta Pricing Ends Soon
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Don't Let Another Lead
            <span className="block text-white">Slip Away Tonight</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            While you're reading this, your competitors are capturing leads 24/7 with AI. 
            Every hour you wait is revenue walking out the door.
          </p>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-primary-glow mb-1">$50,000+</div>
              <div className="text-sm text-white/80">Lost annually without 24/7 lead capture</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-primary-glow mb-1">1 Deal</div>
              <div className="text-sm text-white/80">Pays for entire year of service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-primary-glow mb-1">40% OFF</div>
              <div className="text-sm text-white/80">Limited beta pricing expires soon</div>
            </div>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="group text-xl px-10 py-6" onClick={scrollToPricing}>
              <Zap className="w-5 h-5 mr-2" />
              Start Capturing Leads Tonight
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xl px-10 py-6" onClick={() => document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
          
          <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg p-4 mb-8">
            <div className="text-sm font-medium text-white">
              ✅ Setup form automatically sent within minutes of payment • Live in 24-48 hours
            </div>
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <guarantee.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{guarantee.title}</div>
                  <div className="text-xs text-white/70">{guarantee.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Reversal */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Zero Risk. Maximum Reward.</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Free setup and training included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Cancel anytime, keep the leads</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Setup form sent within minutes of payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>ROI tracking and optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Urgency */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm mb-4">
              Beta pricing ends December 31st. Lock in your 40% savings today.
            </p>
            <p className="text-primary-glow font-semibold">
              Start winning with Smart Solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}