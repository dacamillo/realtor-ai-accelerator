import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Target, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function UsageExamplesModal({ plan, triggerButton }: { plan: string, triggerButton: React.ReactNode }) {
  const getContent = () => {
    switch (plan) {
      case 'Starter':
        return {
          title: "Starter Plan Usage Strategy",
          description: "How to use 500 monthly calls to build a solid foundation",
          tabs: [
            {
              id: "breakdown",
              label: "Weekly Breakdown",
              content: (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Week 1: Circle Prospecting (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Calls neighbors around new listings</li>
                        <li>• "Hi, this is [Agent]'s AI assistant about recent activity on Oak Street..."</li>
                        <li>• Targets: 25 contacts, 3-5 seller leads</li>
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
                        <li>• Targets: 15-20 attendees, 2-3 buyer leads</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Week 3: Past Client Check-ins (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Quarterly touch-base with previous clients</li>
                        <li>• "Hi, this is [Agent] checking in. How are you enjoying your home?"</li>
                        <li>• Targets: 5-8 referrals, 1-2 repeat clients</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 border border-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Week 4: Lead Nurturing (125 calls)
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Follows up on website inquiries and cold leads</li>
                        <li>• Targets: 3-5 listing appointments, 2-3 buyer consultations</li>
                      </ul>
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
          title: "Professional Plan Scaling Strategy",
          description: "How to use 2,000 monthly calls to scale from solo agent to team leader",
          tabs: [
            {
              id: "breakdown",
              label: "Weekly Breakdown",
              content: (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Week 1: Multi-Listing Prospecting (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 150 calls per new listing to surrounding areas</li>
                        <li>• "Hi, this is [Agent]'s AI assistant. We have multiple new listings..."</li>
                        <li>• Targets: 100 contacts, 8-12 listing appointments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2">Week 2: Open House + Market Events (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 200 calls per open house + 100 for market seminar</li>
                        <li>• Targets: 30-40 open house attendees, 15-20 seminar attendees</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Week 3: Geographic Farming Expansion (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Systematic calling of 500 homes in target area</li>
                        <li>• "[Agent] is expanding services to your neighborhood..."</li>
                        <li>• Targets: 100 contacts, 5-8 potential listings</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 border border-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Week 4: Database Maximization (500 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Reactivating old leads and sphere of influence</li>
                        <li>• Targets: 80 contacts, 8-12 appointments, 4-6 referrals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: "scaling",
              label: "Scaling Features",
              content: (
                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-3">Scaling Power:</h4>
                    <div className="grid gap-2">
                      {[
                        "4x more calls than Starter plan",
                        "Advanced lead scoring and qualification",
                        "Priority support with custom voice training",
                        "Advanced automation workflows"
                      ].map((feature, idx) => (
                        <div key={idx} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
          ]
        };
      
      case 'Enterprise':
        return {
          title: "Enterprise Plan Market Domination Strategy",
          description: "How to use 5,000+ monthly calls to dominate multiple markets simultaneously",
          tabs: [
            {
              id: "breakdown",
              label: "Weekly Breakdown", 
              content: (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Week 1: Market Domination Blitz (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 150 calls per listing (8 new listings = 1,200 calls)</li>
                        <li>• 50 calls to VIP client list for exclusive previews</li>
                        <li>• Targets: 250 contacts, 25-35 listing appointments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2">Week 2: Event Marketing Blitz (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 300 calls per open house (3 houses = 900 calls)</li>
                        <li>• 200 calls for investor seminar, 150 for buyer workshop</li>
                        <li>• Targets: 75-100 total event attendees</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Week 3: Geographic Expansion (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 625 calls per luxury neighborhood (2 areas)</li>
                        <li>• Focus on high-value properties ($500K+)</li>
                        <li>• Targets: 200 contacts, 15-25 luxury consultations</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 border border-muted rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Week 4: Database & Referral Maximization (1,250 calls)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 400 calls to past clients, 400 to sphere, 450 to old leads</li>
                        <li>• Targets: 200 contacts, 25-35 appointments, 15-25 referrals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            },
            {
              id: "advantages",
              label: "Enterprise Advantages",
              content: (
                <div className="space-y-4">
                  <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                    <h4 className="font-semibold text-success mb-3">Enterprise Advantages:</h4>
                    <div className="grid gap-2">
                      {[
                        "Multi-agent CRM management",
                        "White-label team branding", 
                        "Dedicated account manager",
                        "Custom voice training for team",
                        "Advanced analytics & reporting",
                        "24/7 priority support"
                      ].map((advantage, idx) => (
                        <div key={idx} className="text-sm flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          {advantage}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
          ]
        };
      
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{content.title}</DialogTitle>
          <p className="text-muted-foreground">{content.description}</p>
        </DialogHeader>
        
        <Tabs defaultValue={content.tabs[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            {content.tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {content.tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}