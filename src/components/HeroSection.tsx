import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                🚀 Limited Beta Pricing - Save 40%
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Never Miss Another
                <span className="block text-primary-glow">Lead Again</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                The complete AI + CRM solution that replaces 5-8 separate tools. 
                Capture, qualify, and convert more leads while saving 40+ hours per month.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">847%</div>
                <div className="text-sm text-white/80">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">40+</div>
                <div className="text-sm text-white/80">Hours Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">23%</div>
                <div className="text-sm text-white/80">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">3.2x</div>
                <div className="text-sm text-white/80">More Deals</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30" />
                ))}
              </div>
              <span className="text-sm">Join 500+ realtors already using Smart Solution</span>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Smart Solution Agency AI CRM Dashboard" 
                className="w-full h-auto rounded-xl shadow-strong"
              />
              
              {/* Floating Feature Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-strong animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-3">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold text-sm">AI Voice Receptionist</div>
                    <div className="text-xs text-muted-foreground">24/7 Lead Capture</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-strong animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-success" />
                  <div>
                    <div className="font-semibold text-sm">+247% ROI</div>
                    <div className="text-xs text-muted-foreground">This Month</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-white rounded-lg p-4 shadow-strong animate-fade-in" style={{animationDelay: '1.1s'}}>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-accent" />
                  <div>
                    <div className="font-semibold text-sm">Auto SMS Response</div>
                    <div className="text-xs text-muted-foreground">Instant Reply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}