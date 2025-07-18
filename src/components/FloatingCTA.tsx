import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Zap, Calendar } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalendar = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-primary hover:bg-primary/90 shadow-glow animate-pulse"
          size="lg"
        >
          <Zap className="w-5 h-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gradient-card border border-primary/20 rounded-xl shadow-strong p-4 max-w-sm animate-scale-in">
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="mb-3">
        <div className="font-bold text-sm mb-1">🔥 Limited Time Offer</div>
        <div className="text-xs text-muted-foreground mb-1">
          Save 40% on all plans during our beta launch
        </div>
        <div className="text-xs text-primary font-medium">
          ✅ Setup form sent within minutes
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="cta" 
          size="sm" 
          className="flex-1"
          onClick={scrollToPricing}
        >
          <Zap className="w-4 h-4 mr-1" />
          Start Now
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={scrollToCalendar}
        >
          <Calendar className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}