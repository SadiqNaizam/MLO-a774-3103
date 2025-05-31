import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import FunnelCountCard from '@/components/Dashboard/FunnelCountCard';
import SourcesCard from '@/components/Dashboard/SourcesCard';
import LeadsTrackingCard from '@/components/Dashboard/LeadsTrackingCard';
import ReasonLostCard from '@/components/Dashboard/ReasonLostCard';
import OtherDataCard from '@/components/Dashboard/OtherDataCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard">
      <Tabs defaultValue="leads" className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-2">
          <TabsList>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          <Button variant="outline" className="w-full sm:w-auto">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>Last 6 months</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <TabsContent value="sales">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 min-h-[300px] flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">Sales Insights Dashboard</h3>
            <p className="text-sm text-muted-foreground mt-3 text-center max-w-md">
              This section will provide a comprehensive overview of sales performance,
              including revenue trends, deal closures, and sales team productivity.
              Currently under construction. Check back soon for updates!
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="leads">
          <div className="space-y-6">
            {/* First Row: Funnel Count & Sources */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <FunnelCountCard />
              </div>
              <div className="lg:col-span-1">
                <SourcesCard />
              </div>
            </div>
            
            {/* Second Row: Leads Tracking */}
            <div>
              <LeadsTrackingCard />
            </div>
            
            {/* Third Row: Reasons Lost & Other Data */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <ReasonLostCard />
              </div>
              <div className="lg:col-span-2">
                <OtherDataCard />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default DashboardPage;
