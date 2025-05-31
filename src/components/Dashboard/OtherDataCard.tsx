import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Users, Clock, Info, TrendingUp } from 'lucide-react'; // Added TrendingUp for completeness
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: React.ElementType;
  tooltip?: string;
}

const otherData: StatItem[] = [
  { id: 'total_leads', value: '900', label: 'total leads count', icon: Users },
  { id: 'avg_conversion_time', value: '12', label: 'days in average to convert lead', icon: Clock },
  { id: 'inactive_leads', value: '30', label: 'inactive leads', icon: Info, tooltip: 'Leads with no activity in the last 30 days' },
  { id: 'conversion_rate', value: '25%', label: 'lead to deal conversion rate', icon: TrendingUp, tooltip: 'Percentage of leads that became deals' }, // Added one more for better look
];

interface OtherDataCardProps {
  className?: string;
}

const OtherDataCard: React.FC<OtherDataCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
        <CardDescription>Key performance indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col p-4 bg-card rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className="w-6 h-6 text-primary" />
                  {stat.tooltip && (
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{stat.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherDataCard;
