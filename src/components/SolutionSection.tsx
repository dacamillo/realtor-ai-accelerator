import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageSquare, 
  Users, 
  Brain, 
  Zap, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { InteractiveFeatureModal } from "./InteractiveFeatureModal";

export function SolutionSection() {
  const features = [
    {
      icon: Users,
      title: "Lead Connector CRM",
      subtitle: "White-Labeled",
      description: "Complete contact management, pipeline automation, and deal tracking. Looks like your own system.",
      benefits: ["Unlimited contacts", "Pipeline automation", "Custom branding", "Advanced reporting"],
      stats: [
        { label: "Contact Capacity", value: "Unlimited" },
        { label: "Pipeline Stages", value: "Fully Custom" }
      ],
      detailedDescription: "Get the industry's most powerful CRM system, white-labeled for your business. Manage unlimited contacts, automate your sales pipeline, and track every deal from lead to closing with advanced reporting and analytics."
    },
    {
      icon: Phone,
      title: "AI Voice Receptionist",
      subtitle: "24/7 Inbound",
      description: "Never miss a call again. AI answers, qualifies leads, books appointments, and transfers when needed.",
      benefits: ["24/7 availability", "Lead qualification", "Appointment booking", "Smart transfers"],
      stats: [
        { label: "Call Answer Rate", value: "100%" },
        { label: "Lead Qualification", value: "24/7" }
      ],
      detailedDescription: "Our AI Voice Receptionist acts as your personal assistant, answering every call with professionalism and capturing every lead opportunity. It qualifies prospects, books appointments, and provides property information instantly."
    },
    {
      icon: Brain,
      title: "AI Outbound Calling",
      subtitle: "Automated Prospecting",
      description: "Circle prospecting, FSBO follow-up, past client check-ins, and expired listing outreach on autopilot.",
      benefits: ["Circle prospecting", "FSBO outreach", "Past client nurturing", "Expired listings"],
      stats: [
        { label: "Calls Per Hour", value: "500+" },
        { label: "Contact Rate", value: "85%" }
      ],
      detailedDescription: "Scale your outreach with AI that makes hundreds of calls per hour, qualifying leads and booking appointments while you focus on closing deals. Perfect for circle prospecting, past client nurturing, and FSBO outreach."
    },
    {
      icon: MessageSquare,
      title: "Missed Call Text Back",
      subtitle: "Instant Response",
      description: "Automatic SMS responses to missed calls with lead capture and appointment scheduling.",
      benefits: ["Instant SMS replies", "Lead qualification", "Appointment booking", "CRM integration"],
      stats: [
        { label: "Response Time", value: "<30s" },
        { label: "Lead Capture Rate", value: "94%" }
      ],
      detailedDescription: "Automatically text back missed callers within 30 seconds, capturing leads that would otherwise be lost. The system qualifies interest and books appointments via SMS, integrating seamlessly with your CRM."
    },
    {
      icon: Zap,
      title: "AI Social Media Bots",
      subtitle: "Multi-Platform",
      description: "Facebook Messenger and Instagram DM automation with intelligent lead capture and follow-up.",
      benefits: ["Facebook automation", "Instagram DMs", "Lead capture", "Smart sequences"],
      stats: [
        { label: "Platforms Covered", value: "All Major" },
        { label: "Response Rate", value: "3x Higher" }
      ],
      detailedDescription: "Engage with prospects across all social platforms automatically. Capture leads from Facebook, Instagram, and other platforms with intelligent conversations that qualify interest and book appointments."
    },
    {
      icon: BarChart3,
      title: "Complete Automation",
      subtitle: "Workflows & Analytics",
      description: "Lead scoring, drip campaigns, review requests, and referral follow-up with detailed analytics.",
      benefits: ["Lead scoring", "Drip campaigns", "Review automation", "Advanced analytics"],
      stats: [
        { label: "Time Saved", value: "40+ hrs/mo" },
        { label: "Conversion Increase", value: "300%" }
      ],
      detailedDescription: "Set up sophisticated automation workflows that nurture leads, request reviews, follow up on referrals, and score leads automatically. Save 40+ hours per month while increasing conversions by 300%."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Complete AI Suite
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Platform. <span className="text-primary">Six Powerful Tools.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Replace 5-8 separate tools with our integrated AI + CRM solution. 
            Everything works together seamlessly to capture, qualify, and convert more leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{feature.subtitle}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <InteractiveFeatureModal
                  trigger={
                    <Button variant="outline" className="w-full group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  }
                  title={feature.title}
                  description={feature.detailedDescription}
                  benefits={feature.benefits}
                  stats={feature.stats}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Highlight */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-primary">Seamless Integration</span> - Everything Works Together
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Unlike disconnected tools, our platform shares data instantly across all features. 
            When the AI captures a lead, it's immediately in your CRM, ready for automated follow-up.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2">AI Voice → CRM</Badge>
            <Badge variant="outline" className="px-4 py-2">Missed Calls → SMS</Badge>
            <Badge variant="outline" className="px-4 py-2">Social → Pipeline</Badge>
            <Badge variant="outline" className="px-4 py-2">Leads → Automation</Badge>
          </div>
          
          <InteractiveFeatureModal
            trigger={
              <Button variant="cta" size="lg" className="group">
                See Integration Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            }
            title="Seamless Integration Advantage"
            description="Unlike disconnected tools, our platform shares data instantly across all features. When the AI captures a lead, it's immediately in your CRM, ready for automated follow-up, scoring, and conversion tracking."
            benefits={[
              "Real-time data sync across all tools",
              "No manual data entry or imports needed",
              "Leads automatically enter your sales pipeline",
              "Complete conversation history preserved",
              "Unified reporting and analytics",
              "One login for everything"
            ]}
            stats={[
              { label: "Integration Speed", value: "Instant" },
              { label: "Data Accuracy", value: "100%" },
              { label: "Manual Work Eliminated", value: "90%" },
              { label: "Setup Time", value: "1 Day" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}