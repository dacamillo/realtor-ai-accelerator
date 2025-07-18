import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: "Expensive, Disconnected Tools",
      description: "Paying $550-1,650/month for CRM, lead gen, chatbots, and missed call services that don't work together.",
      cost: "$550-1,650/mo"
    },
    {
      icon: Clock,
      title: "Missed Leads After Hours",
      description: "Losing qualified prospects because no one answers calls, texts, or social media messages outside business hours.",
      cost: "40+ Lost Leads/mo"
    },
    {
      icon: TrendingDown,
      title: "Manual Follow-up Chaos",
      description: "Spending hours on repetitive tasks instead of closing deals. No automated nurturing or qualification.",
      cost: "40+ Hours/mo"
    },
    {
      icon: AlertTriangle,
      title: "Low Conversion Rates",
      description: "Industry average 8% lead conversion because of slow response times and inconsistent follow-up.",
      cost: "Lost Revenue"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Hidden Cost of <span className="text-destructive">Outdated Systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most realtors lose 60-80% of potential leads due to slow response times, 
            disconnected systems, and manual processes. Here's what it's really costing you:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-3">
                <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-3">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-3">{problem.description}</p>
                <div className="text-destructive font-semibold">{problem.cost}</div>
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
          <div className="grid md:grid-cols-3 gap-6 text-center">
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
        </div>
      </div>
    </section>
  );
}