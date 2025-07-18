import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, BookOpen, Users, FileText, Clock } from "lucide-react";
import { InteractiveFeatureModal } from "./InteractiveFeatureModal";
import narLogo from "@/assets/nar-logo.png";
import realtorLogo from "@/assets/realtor-logo.png";
import realtorTech from "@/assets/realtor-technology.jpg";

export function ComplianceSection() {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "NAR Code Compliant",
      description: "Fully compliant with Article 12: Technology Standards and Data Protection",
      details: [
        "Transparent AI disclosure in all communications",
        "Secure data handling per NAR guidelines",
        "Consumer consent protocols built-in",
        "Professional representation standards maintained"
      ]
    },
    {
      icon: FileText,
      title: "TCPA Compliant",
      description: "Built-in consent management and call/text compliance",
      details: [
        "Automatic consent tracking and documentation",
        "Opt-out mechanisms in every communication",
        "Call time restrictions and DNC list compliance",
        "Written consent required for auto-dialing"
      ]
    },
    {
      icon: BookOpen,
      title: "Fair Housing Compliant",
      description: "AI trained to avoid discriminatory language and practices",
      details: [
        "Fair housing law compliance in all communications",
        "No discriminatory language or targeting",
        "Equal service standards for all prospects",
        "Regular compliance training for AI systems"
      ]
    },
    {
      icon: Users,
      title: "Broker Oversight Ready",
      description: "Full transparency and control for brokers and compliance officers",
      details: [
        "Complete audit trails for all communications",
        "Broker dashboard with full oversight",
        "Customizable compliance rules and restrictions",
        "Real-time monitoring and reporting"
      ]
    }
  ];

  const scrollToCalendar = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-8 mb-8">
            <img src={narLogo} alt="NAR Logo" className="h-16 object-contain" />
            <img src={realtorLogo} alt="REALTOR Logo" className="h-16 object-contain" />
          </div>
          
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Shield className="mr-2 h-4 w-4" />
            NAR Regulation Safe & Compliant
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="text-primary">REALTORS®</span> by REALTORS®
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our AI system is specifically designed for real estate professionals with full NAR compliance, 
            Fair Housing standards, and TCPA regulations built-in. Focus on growing your business while 
            we handle the compliance complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <img 
              src={realtorTech} 
              alt="Real Estate Professional Using Compliant AI Technology" 
              className="w-full h-auto rounded-xl shadow-strong"
            />
            
            {/* Floating Compliance Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-strong">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm">100% Compliant</div>
                  <div className="text-xs text-muted-foreground">NAR Approved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Why Compliance Matters for REALTORS®
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">NAR Article 12 Compliance</p>
                  <p className="text-sm text-muted-foreground">Our AI clearly identifies itself and maintains professional standards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">TCPA & DNC Protection</p>
                  <p className="text-sm text-muted-foreground">Built-in consent management prevents costly violations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Fair Housing Trained</p>
                  <p className="text-sm text-muted-foreground">AI systems trained to avoid any discriminatory practices</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Broker Oversight Ready</p>
                  <p className="text-sm text-muted-foreground">Full transparency and control for compliance officers</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold mb-2 text-primary">Peace of Mind Guarantee</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our system is continuously updated to maintain compliance with evolving regulations. 
                We work with real estate attorneys and NAR to ensure your business stays protected.
              </p>
              <Button variant="outline" onClick={scrollToCalendar} className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Discuss Compliance with Our Team
              </Button>
            </div>
          </div>
        </div>

        {/* Compliance Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
                
                <InteractiveFeatureModal
                  trigger={
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  }
                  title={feature.title}
                  description={`Learn how our system ensures ${feature.title.toLowerCase()} for your real estate business.`}
                  benefits={feature.details}
                  stats={[
                    { label: "Compliance Level", value: "100%" },
                    { label: "Updates", value: "Automatic" },
                    { label: "Violations", value: "0" },
                    { label: "Peace of Mind", value: "Guaranteed" }
                  ]}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-subtle border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Grow Your Real Estate Business Safely?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of REALTORS® who've increased their lead conversion by 3x while 
            staying 100% compliant with all industry regulations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InteractiveFeatureModal
              trigger={
                <Button variant="default" size="lg">
                  <Shield className="mr-2 h-5 w-5" />
                  See Compliance Documentation
                </Button>
              }
              title="Complete Compliance Framework"
              description="Review our comprehensive compliance documentation and see exactly how we protect your business from regulatory risks while maximizing your lead conversion."
              benefits={[
                "Detailed NAR Article 12 compliance documentation",
                "TCPA and DNC compliance protocols",
                "Fair Housing training certification",
                "State-specific real estate regulation compliance",
                "Ongoing legal updates and system adjustments",
                "Full audit trail and reporting capabilities"
              ]}
              stats={[
                { label: "Regulations Covered", value: "25+" },
                { label: "Compliance Rate", value: "100%" },
                { label: "Legal Reviews", value: "Monthly" },
                { label: "Client Protection", value: "Guaranteed" }
              ]}
            />
            
            <Button variant="outline" size="lg" onClick={scrollToCalendar}>
              <Users className="mr-2 h-5 w-5" />
              Book Compliance Review Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}