import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, DollarSign, Clock, TrendingDown, ArrowRight } from "lucide-react";
import { InteractiveFeatureModal } from "./InteractiveFeatureModal";

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Expensive, Disconnected Real Estate Tools",
      description: "Paying $550-1,650/month for real estate CRM, lead gen, IDX, chatbots, and missed call services that don't work together.",
      cost: "$550-1,650/mo",
      detailedDescription: "Most REALTORS® juggle 5-8 separate real estate tools (CRM, IDX, lead capture, chatbots, calling systems) that don't communicate with each other, leading to data silos, manual work, and missed opportunities. You're paying premium prices for inferior, disconnected solutions.",
      painPoints: [
        "CRM that doesn't sync with your lead sources",
        "Separate chatbot systems that lose conversation history", 
        "Manual data entry between multiple platforms",
        "No unified view of your sales pipeline",
        "Expensive monthly subscriptions for each tool",
        "Time wasted switching between different systems"
      ],
      stats: [
        { label: "Tools Needed", value: "5-8" },
        { label: "Monthly Cost", value: "$550-1,650" },
        { label: "Data Sync", value: "Manual" },
        { label: "Time Wasted", value: "10+ hrs/wk" }
      ]
    },
    {
      icon: Clock,
      title: "Missed Leads After Hours",
      description: "Losing qualified prospects because no one answers calls, texts, or social media messages outside business hours.",
      cost: "40+ Lost Leads/mo",
      detailedDescription: "Studies show 78% of home buyers contact the first agent who responds. When you're not available 24/7, those leads go to your competitors who have automated systems in place.",
      painPoints: [
        "Calls going to voicemail after business hours",
        "Social media messages sitting unread for hours",
        "Website visitors leaving without engagement",
        "Weekend and holiday leads going cold",
        "Competitors capturing your missed opportunities",
        "No way to qualify leads instantly"
      ],
      stats: [
        { label: "After Hours Leads", value: "60%" },
        { label: "Response Time Needed", value: "<5 min" },
        { label: "Lost Monthly", value: "40+ leads" },
        { label: "Commission Value", value: "$240,000" }
      ]
    },
    {
      icon: TrendingDown,
      title: "Manual Follow-up Chaos",
      description: "Spending hours on repetitive tasks instead of closing deals. No automated nurturing or qualification.",
      cost: "40+ Hours/mo",
      detailedDescription: "Successful realtors should focus on high-value activities like showing homes and closing deals. Instead, most spend 40+ hours monthly on repetitive tasks that could be automated.",
      painPoints: [
        "Manually calling past clients for referrals",
        "Typing the same follow-up messages repeatedly",
        "Forgetting to follow up with warm leads",
        "No systematic nurturing process",
        "Inconsistent communication with prospects",
        "Time spent on admin work instead of sales"
      ],
      stats: [
        { label: "Manual Tasks", value: "40+ hrs/mo" },
        { label: "Follow-up Rate", value: "30%" },
        { label: "Automation Possible", value: "90%" },
        { label: "Value Per Hour", value: "$200+" }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Low Conversion Rates",
      description: "Industry average 8% lead conversion because of slow response times and inconsistent follow-up.",
      cost: "Lost Revenue",
      detailedDescription: "The real estate industry has notoriously low conversion rates due to poor lead management. Agents with automated systems achieve 20-30% conversion rates while the industry average remains at 8%.",
      painPoints: [
        "Slow response times kill lead interest",
        "Inconsistent follow-up processes",
        "No lead scoring or prioritization",
        "Prospects going cold due to delays",
        "Unable to nurture long-term leads effectively",
        "Missing qualification opportunities"
      ],
      stats: [
        { label: "Industry Average", value: "8%" },
        { label: "With Automation", value: "23%" },
        { label: "Revenue Increase", value: "3x" },
        { label: "ROI Improvement", value: "850%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Hidden Cost of <span className="text-destructive">Outdated Real Estate Systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most REALTORS® lose 60-80% of potential leads due to slow response times, 
            disconnected systems, and manual processes. Here's what it's really costing your real estate business:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
              <CardHeader className="text-center pb-3">
                <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">{problem.description}</p>
                <div className="text-destructive font-semibold">{problem.cost}</div>
                
                <InteractiveFeatureModal
                  trigger={
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      See Full Impact
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  }
                  title={problem.title}
                  description={problem.detailedDescription}
                  benefits={problem.painPoints}
                  stats={problem.stats}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reality Check */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-destructive mb-4">
            The Reality: You're Losing $50,000+ Per Year
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            With average commission of $6,000 per deal, losing just 8-10 leads per month 
            costs you more than most agents make in a year.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
            <div>
              <div className="text-3xl font-bold text-destructive">8-10</div>
              <div className="text-sm text-muted-foreground">Lost Leads/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive">$6,000</div>
              <div className="text-sm text-muted-foreground">Avg Commission</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive">$50,000+</div>
              <div className="text-sm text-muted-foreground">Annual Loss</div>
            </div>
          </div>
          
          <InteractiveFeatureModal
            trigger={
              <Button variant="destructive" size="lg" className="group">
                Calculate Your Exact Loss
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            }
            title="Your Real Cost of Inaction"
            description="Every month you delay implementing an automated lead capture and nurturing system, you're losing significant revenue. Here's the breakdown of what manual processes and disconnected tools are really costing you."
            benefits={[
              "Missed after-hours leads: 40+ per month = $240,000 annual loss",
              "Poor conversion rates: 8% vs 23% possible = $300,000 missed revenue",
              "Manual task time: 40 hours monthly = $8,000 opportunity cost",
              "Disconnected tools: $1,200+ monthly for inferior solutions",
              "No follow-up automation: 70% of leads never contacted again",
              "Late response times: 78% of leads choose first responder"
            ]}
            stats={[
              { label: "Annual Revenue Loss", value: "$500K+" },
              { label: "Time Wasted Monthly", value: "40+ hrs" },
              { label: "Tool Inefficiency Cost", value: "$14K/yr" },
              { label: "Conversion Opportunity", value: "3x More" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}