import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, CreditCard, ArrowDown } from "lucide-react";

interface FeatureModalProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  stats?: { label: string; value: string }[];
}

export function InteractiveFeatureModal({ trigger, title, description, benefits, stats }: FeatureModalProps) {
  const [open, setOpen] = useState(false);

  const scrollToPricing = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToCalendar = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-card border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-muted-foreground text-center text-lg">
            {description}
          </p>

          {stats && (
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-primary/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Key Benefits:</h4>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-success/5 border border-success/20 rounded-lg p-4">
            <div className="text-success font-semibold text-center mb-2">
              💰 ROI Guarantee: Just 1 extra deal per month pays for everything!
            </div>
            <div className="text-xs text-center text-muted-foreground">
              Average realtor commission: $4,000-8,000 per deal
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="cta" 
              className="flex-1 group"
              onClick={scrollToPricing}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              See Pricing Plans
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={scrollToCalendar}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}