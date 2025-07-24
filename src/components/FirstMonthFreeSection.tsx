import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, Flame } from "lucide-react";

export function FirstMonthFreeSection() {
  const scrollToCalendar = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-destructive text-destructive-foreground rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 to-red-600/30 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-xl" />
            
            <div className="relative z-10">
              {/* Fire emoji and urgency badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-300 animate-pulse" />
                  <span className="text-sm font-bold text-white">LIMITED TIME OFFER</span>
                  <Flame className="w-5 h-5 text-orange-300 animate-pulse" />
                </div>
              </div>

              {/* Main headline */}
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-white leading-tight">
                FIRST MONTH
                <span className="block text-5xl md:text-7xl text-yellow-300 drop-shadow-lg">
                  100% FREE
                </span>
              </h2>

              <div className="text-xl md:text-2xl font-bold mb-6 text-white">
                No Setup Fee • No Contract • Cancel Anytime
              </div>

              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Skip the payment page. Book a strategy call instead and we'll waive your entire first month. 
                <span className="font-bold text-yellow-300"> This offer expires without notice.</span>
              </p>

              {/* Arrow pointing down */}
              <div className="flex justify-center mb-6">
                <ArrowDown className="w-8 h-8 text-yellow-300 animate-bounce" />
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-white/90 text-xl px-12 py-6 font-black shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={scrollToCalendar}
              >
                <Calendar className="w-6 h-6 mr-3" />
                BOOK YOUR FREE STRATEGY CALL NOW
              </Button>

              <div className="mt-6 text-sm text-white/80">
                ⏰ Only available through calendar booking • Cannot be combined with other offers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}