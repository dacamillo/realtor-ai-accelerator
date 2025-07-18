import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  TrendingUp, 
  Calculator, 
  Shield, 
  CheckCircle, 
  Star,
  Phone,
  Users,
  Target,
  DollarSign,
  Clock,
  FileText,
  Award
} from "lucide-react";

// Monthly Action Plan Pop-ups
export function MonthlyActionPlanPopup({ plan, triggerButton }: { plan: string, triggerButton: React.ReactNode }) {
  const getContent = () => {
    switch (plan) {
      case 'Starter':
        return {
          title: "How Sarah Uses Her 500 Monthly Calls",
          tabs: [
            {
              id: "breakdown",
              label: "Weekly Breakdown",
              content: (
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Week 1: Circle Prospecting (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Calls neighbors around new listings</li>
                        <li>• "Hi, this is Sarah's AI assistant about recent activity on Oak Street..."</li>
                        <li>• <span className="text-success font-medium">Results: 25 contacts, 3-5 seller leads</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Week 2: Open House Invitations (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Invites neighborhood to Saturday open house</li>
                        <li>• "We're hosting an open house this Saturday at 456 Elm Street..."</li>
                        <li>• <span className="text-success font-medium">Results: 15-20 attendees, 2-3 buyer leads</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Week 3: Past Client Check-ins (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Quarterly touch-base with previous clients</li>
                        <li>• "Hi, this is Sarah checking in. How are you enjoying your home?"</li>
                        <li>• <span className="text-success font-medium">Results: 5-8 referrals, 1-2 repeat clients</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 border border-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Week 4: Lead Nurturing (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Follows up on website inquiries and cold leads</li>
                        <li>• <span className="text-success font-medium">Results: 3-5 listing appointments, 2-3 buyer consultations</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: "results",
              label: "Monthly Results",
              content: (
                <div className="space-y-6">
                  <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                    <h3 className="font-bold text-success mb-4 text-xl flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      TOTAL MONTHLY IMPACT:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">500 calls made automatically</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">65-80 total contacts reached</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">8-14 appointments booked</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">2-4 new clients acquired</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm font-bold">$8,000-16,000 in commissions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm font-bold">1,500-3,100% ROI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      BREAK-EVEN ANALYSIS:
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>• Plan cost: <span className="font-semibold">$497/month</span></div>
                      <div>• Average commission: <span className="font-semibold">$4,000</span></div>
                      <div>• Break-even: <span className="font-semibold text-success">Just 1 deal every 8 months</span></div>
                      <div>• Typical results: <span className="font-semibold text-success">2-4 deals/month</span></div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: "perfect-for",
              label: "Perfect For",
              content: (
                <div className="space-y-4">
                  <div className="grid gap-3">
                    {[
                      "New agents building their business",
                      "Part-time realtors with limited time", 
                      "Agents afraid of cold calling",
                      "Anyone wanting to test AI calling",
                      "Building consistent lead flow"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-success/5 border border-success/20 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
          ]
        };
      
      case 'Professional':
        return {
          title: "How Mike Scales with 2,000 Monthly Calls",
          tabs: [
            {
              id: "breakdown",
              label: "Weekly Breakdown",
              content: (
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Week 1: Multi-Listing Prospecting (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 150 calls per new listing to surrounding areas</li>
                        <li>• "Hi, this is Mike's AI assistant. We have multiple new listings..."</li>
                        <li>• <span className="text-success font-medium">Results: 100 contacts, 8-12 listing appointments</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2">Week 2: Open House + Market Events (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 200 calls per open house + 100 for market seminar</li>
                        <li>• <span className="text-success font-medium">Results: 30-40 open house attendees, 15-20 seminar attendees</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Week 3: Geographic Farming Expansion (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Systematic calling of 500 homes in target area</li>
                        <li>• "Mike is expanding his services to your neighborhood..."</li>
                        <li>• <span className="text-success font-medium">Results: 100 contacts, 5-8 potential listings</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 border border-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Week 4: Database Maximization (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Reactivating old leads and sphere of influence</li>
                        <li>• <span className="text-success font-medium">Results: 80 contacts, 8-12 appointments, 4-6 referrals</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: "results",
              label: "Monthly Results",
              content: (
                <div className="space-y-6">
                  <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                    <h3 className="font-bold text-success mb-4 text-xl">TOTAL MONTHLY IMPACT:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">2,000 calls made automatically</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">310-380 total contacts reached</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">34-60 appointments booked</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">8-15 new clients acquired</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm font-bold">$32,000-60,000 in commissions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm font-bold">3,100-6,000% ROI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <h3 className="font-bold text-primary mb-4">SCALING POWER:</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>• 4x more calls than Starter</div>
                      <div>• 4x more appointments</div>
                      <div>• 4x more clients</div>
                      <div>• Same time investment from you</div>
                    </div>
                  </div>
                </div>
              )
            }
          ]
        };
      
      case 'Enterprise':
        return {
          title: "How Jennifer's Team Dominates with 5,000+ Calls",
          tabs: [
            {
              id: "breakdown",
              label: "Weekly Breakdown", 
              content: (
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Week 1: Market Domination Blitz (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 150 calls per listing (8 new listings = 1,200 calls)</li>
                        <li>• 50 calls to VIP client list for exclusive previews</li>
                        <li>• <span className="text-success font-medium">Results: 250 contacts, 25-35 listing appointments</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2">Week 2: Event Marketing Blitz (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 300 calls per open house (3 houses = 900 calls)</li>
                        <li>• 200 calls for investor seminar, 150 for buyer workshop</li>
                        <li>• <span className="text-success font-medium">Results: 75-100 total event attendees</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Week 3: Geographic Expansion (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 625 calls per luxury neighborhood (2 areas)</li>
                        <li>• Focus on high-value properties ($500K+)</li>
                        <li>• <span className="text-success font-medium">Results: 200 contacts, 15-25 luxury consultations</span></li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 border border-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Week 4: Database & Referral Maximization (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 400 calls to past clients, 400 to sphere, 450 to old leads</li>
                        <li>• <span className="text-success font-medium">Results: 200 contacts, 25-35 appointments, 15-25 referrals</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: "team-features",
              label: "Team Features",
              content: (
                <div className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <h3 className="font-bold text-primary mb-4 text-xl">ENTERPRISE ADVANTAGES:</h3>
                    <div className="grid gap-3">
                      {[
                        "Multi-agent CRM management",
                        "White-label team branding",
                        "Dedicated account manager",
                        "Custom voice training for team",
                        "Advanced analytics & reporting",
                        "24/7 priority support"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                    <h3 className="font-bold text-secondary mb-4">TEAM SCALING:</h3>
                    <div className="space-y-2 text-sm">
                      <div>• 5,000+ calls distributed across team</div>
                      <div>• Each agent gets customized AI voice</div>
                      <div>• Leads auto-distributed by specialization</div>
                      <div>• Team performance tracking</div>
                    </div>
                  </div>
                </div>
              )
            }
          ]
        };
      
      default:
        return { title: "", tabs: [] };
    }
  };

  const content = getContent();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{content.title}</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue={content.tabs[0]?.id} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {content.tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          
          {content.tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-6 p-4 bg-gradient-subtle border border-primary/20 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Ready to get started?</h4>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button variant="default" size="lg">Start {plan} Plan</Button>
            <Button variant="outline" size="lg">Book a Call First</Button>
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Setup form sent within minutes of payment</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Go live in 5-7 business days</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Success Stories Pop-up
export function SuccessStoriesPopup({ plan, triggerButton }: { plan: string, triggerButton: React.ReactNode }) {
  const getStories = () => {
    switch (plan) {
      case 'Starter':
        return [
          {
            name: "Sarah M.",
            title: "New Agent Success",
            story: "I was 6 months into real estate with only 2 deals. The AI started calling for me immediately. Within 3 months, I was consistently getting 3-5 deals per month. The AI does the prospecting I was too scared to do myself.",
            before: "2 deals in 6 months",
            after: "3-5 deals per month consistently",
            roi: "2,400% in first year"
          },
          {
            name: "Mike R.",
            title: "Part-Time Agent", 
            story: "I work real estate part-time while keeping my day job. The AI calls while I'm at work, and I come home to qualified appointments. It's like having a full-time prospector.",
            before: "1 deal every 2-3 months",
            after: "2-3 deals per month",
            roi: "1,800% increase"
          }
        ];
      case 'Professional':
        return [
          {
            name: "Jennifer L.",
            title: "Top Producer",
            story: "I was already doing 8-10 deals per month, but the AI helped me scale to 15-20 deals without working more hours. The lead qualification is incredible - I only take pre-qualified appointments now.",
            before: "8-10 deals per month",
            after: "15-20 deals per month",
            roi: "180% increase in production"
          },
          {
            name: "David K.",
            title: "Small Team Leader",
            story: "Managing 3 agents while trying to maintain my own production was killing me. Now the AI handles prospecting for the entire team. We've doubled our team production in 6 months.",
            before: "Team: 25 deals/month",
            after: "Team: 50+ deals/month",
            roi: "2x team production"
          }
        ];
      case 'Enterprise':
        return [
          {
            name: "Thompson Team",
            title: "15-Agent Powerhouse",
            story: "We were spending $8K/month on lead generation with mediocre results. The AI system not only costs less but generates 3x more qualified appointments. Every agent on our team is now consistently hitting their goals.",
            before: "$8K/month for 40 deals",
            after: "$2K/month for 120+ deals",
            roi: "300% more deals, 75% less cost"
          },
          {
            name: "Rodriguez Real Estate",
            title: "Multi-Market Expansion",
            story: "We expanded into 3 new markets without hiring additional staff. The AI handles prospecting in all markets while we focus on closings. We've maintained our 95% customer satisfaction while tripling our production.",
            before: "1 market, 60 deals/month",
            after: "4 markets, 180 deals/month",
            roi: "3x expansion with same team"
          }
        ];
      default:
        return [];
    }
  };

  const stories = getStories();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Real {plan} Plan Success Stories</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {stories.map((story, idx) => (
            <Card key={idx} className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{story.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">"{story.story}"</p>
                
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Before</div>
                    <div className="font-semibold text-destructive">{story.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">After</div>
                    <div className="font-semibold text-success">{story.after}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">ROI</div>
                    <div className="font-semibold text-primary">{story.roi}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-subtle border border-primary/20 rounded-lg text-center">
          <Badge variant="secondary" className="mb-2">
            🔥 Limited Beta Pricing - Save 40%
          </Badge>
          <div className="text-sm text-muted-foreground mb-2">
            ⏰ Only 47 spots remaining this month
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            🎯 Next price increase in 12 days
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button variant="default" size="lg">Start {plan} Plan</Button>
            <Button variant="outline" size="lg">Book a Call First</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ROI Calculator Pop-up
export function ROICalculatorPopup({ triggerButton }: { triggerButton: React.ReactNode }) {
  const [avgCommission, setAvgCommission] = useState(4000);
  const [currentDeals, setCurrentDeals] = useState(3);
  const [selectedPlan, setSelectedPlan] = useState<string>('Professional');
  
  const plans = {
    'Starter': { cost: 497, extraDeals: '2-4', callsPerMonth: 500 },
    'Professional': { cost: 997, extraDeals: '4-8', callsPerMonth: 2000 },
    'Enterprise': { cost: 1997, extraDeals: '8-15', callsPerMonth: 5000 }
  };
  
  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const currentIncome = avgCommission * currentDeals;
  const extraDealsMin = parseInt(currentPlan.extraDeals.split('-')[0]);
  const extraDealsMax = parseInt(currentPlan.extraDeals.split('-')[1]);
  const newIncomeMin = currentIncome + (avgCommission * extraDealsMin);
  const newIncomeMax = currentIncome + (avgCommission * extraDealsMax);
  const roiIncreaseMin = newIncomeMin - currentIncome - currentPlan.cost;
  const roiIncreaseMax = newIncomeMax - currentIncome - currentPlan.cost;
  const roiPercentageMin = Math.round((roiIncreaseMin / currentPlan.cost) * 100);
  const roiPercentageMax = Math.round((roiIncreaseMax / currentPlan.cost) * 100);
  const breakEvenDeals = Math.ceil(currentPlan.cost / avgCommission);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Calculator className="h-6 w-6" />
            See Your Exact ROI Based on Your Numbers
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="commission">Your Average Commission</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="commission"
                  type="number"
                  value={avgCommission}
                  onChange={(e) => setAvgCommission(parseInt(e.target.value) || 0)}
                  className="pl-10"
                  placeholder="4000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deals">Current Deals Per Month</Label>
              <Input
                id="deals"
                type="number"
                value={currentDeals}
                onChange={(e) => setCurrentDeals(parseInt(e.target.value) || 0)}
                placeholder="3"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="plan">Plan Selection</Label>
              <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Starter">Starter ($497/mo)</SelectItem>
                  <SelectItem value="Professional">Professional ($997/mo)</SelectItem>
                  <SelectItem value="Enterprise">Enterprise ($1,997/mo)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-center">Current Situation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Monthly Deals:</span>
                  <span className="font-semibold">{currentDeals}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Commission:</span>
                  <span className="font-semibold">${avgCommission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span>Monthly Income:</span>
                  <span className="font-bold text-lg">${currentIncome.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-success/5 border border-success/20">
              <CardHeader>
                <CardTitle className="text-center text-success">With {selectedPlan} Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Plan Cost:</span>
                  <span className="font-semibold">${currentPlan.cost.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Extra Deals:</span>
                  <span className="font-semibold">{currentPlan.extraDeals}/mo</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span>New Income:</span>
                  <span className="font-bold text-lg text-success">
                    ${newIncomeMin.toLocaleString()} - ${newIncomeMax.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-primary/5 border border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-primary flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your ROI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">
                    ${roiIncreaseMin.toLocaleString()} - ${roiIncreaseMax.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Monthly ROI Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {roiPercentageMin}% - {roiPercentageMax}%
                  </div>
                  <div className="text-sm text-muted-foreground">ROI Percentage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">
                    {breakEvenDeals} deal{breakEvenDeals > 1 ? 's' : ''}
                  </div>
                  <div className="text-sm text-muted-foreground">To break even</div>
                </div>
              </div>
              
              <div className="bg-success/10 border border-success/30 rounded-lg p-4 text-center">
                <div className="font-semibold text-success mb-2">Break-Even Analysis:</div>
                <div className="text-sm space-y-1">
                  <div>You'll break even with just <span className="font-bold">{breakEvenDeals} extra deal{breakEvenDeals > 1 ? 's' : ''}</span> every {Math.ceil(currentPlan.cost / avgCommission)} months</div>
                  <div>Typical results show <span className="font-bold">{currentPlan.extraDeals} extra deals per month</span></div>
                  <div>That's a <span className="font-bold">{Math.round(((extraDealsMin + extraDealsMax) / 2 / currentDeals) * 100)}% increase</span> in your income</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-4">
              "Join 500+ REALTORS® already growing with Smart Solution"
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="default" size="lg">Start {selectedPlan} Plan</Button>
              <Button variant="outline" size="lg">Book a Call First</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Compliance Details Pop-up
export function ComplianceDetailsPopup({ triggerButton }: { triggerButton: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Shield className="h-6 w-6" />
            100% NAR & TCPA Compliant - Here's How
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="nar" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="nar">NAR Article 12</TabsTrigger>
            <TabsTrigger value="tcpa">TCPA & DNC</TabsTrigger>
            <TabsTrigger value="fair-housing">Fair Housing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="nar" className="mt-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  NAR Article 12 Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "AI clearly identifies itself on every call",
                    "Professional standards maintained",
                    "No misleading representations", 
                    "Full broker oversight capabilities",
                    "Transparent technology use"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Standard AI Introduction:</h4>
                  <p className="text-sm italic text-muted-foreground">
                    "This is an AI assistant calling on behalf of [Agent Name]"
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tcpa" className="mt-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  TCPA & DNC Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Built-in consent management",
                    "Automatic DNC registry scrubbing",
                    "Call time restrictions (9 AM - 8 PM local)",
                    "Detailed consent records",
                    "Easy opt-out instructions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <h4 className="font-semibold text-success mb-2">ONLY CALLS CONSENTED LEADS:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Website inquiries</li>
                    <li>• Past clients</li>
                    <li>• Referrals with permission</li>
                    <li>• Open house sign-ins</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fair-housing" className="mt-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Fair Housing Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "AI trained to avoid discriminatory language",
                    "Equal treatment protocols",
                    "Fair housing law compliance",
                    "Regular training updates",
                    "Legal review processes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-semibold text-accent mb-2">Continuous Monitoring:</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI systems are continuously monitored and updated to ensure compliance with all fair housing regulations. 
                    We work with real estate attorneys and fair housing experts to maintain the highest standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 p-4 bg-gradient-subtle border border-primary/20 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Peace of Mind Guarantee</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Our system is continuously updated to maintain compliance with evolving regulations. 
            We work with real estate attorneys and NAR to ensure your business stays protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button variant="default" size="lg">Get Compliance Documentation</Button>
            <Button variant="outline" size="lg">Book Compliance Review</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}