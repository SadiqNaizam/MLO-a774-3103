import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Users, Target, MessageSquare, Handshake, CheckCircle2, Minus } from 'lucide-react';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  avgTime: string;
  color: string;
  icon: React.ElementType;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, avgTime: '2 days', color: 'bg-red-500', icon: Users },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, avgTime: '2 days', color: 'bg-yellow-500', icon: Target },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, avgTime: 'N/A', color: 'bg-indigo-500', icon: MessageSquare }, // avgTime: 'average time on this stage' from image implies it may not be for all
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, avgTime: '8 days', color: 'bg-green-500', icon: Handshake },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, avgTime: '10 days', color: 'bg-purple-500', icon: CheckCircle2 },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

interface FunnelCountCardProps {
  className?: string;
}

const FunnelCountCard: React.FC<FunnelCountCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <CardDescription className="text-2xl font-bold text-foreground">600 <span className="text-sm font-normal text-muted-foreground">active leads</span></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex h-3 rounded-full overflow-hidden">
            {funnelData.map((stage) => (
              <div
                key={stage.id}
                className={cn("h-full", stage.color)}
                style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
                title={`${stage.name}: ${stage.count}`}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          {funnelData.map((stage) => {
            const IconComponent = stage.icon || Minus;
            return (
              <div key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
                <IconComponent className={cn("w-4 h-4", stage.color.replace('bg-', 'text-'))} />
                <span className="text-card-foreground font-medium whitespace-nowrap">{stage.name}</span>
                <span className="text-muted-foreground justify-self-end">{stage.count}</span>
                <span className="text-muted-foreground justify-self-end">$ {stage.value}</span>
                <span className="text-muted-foreground justify-self-end whitespace-nowrap">{stage.avgTime}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCountCard;
