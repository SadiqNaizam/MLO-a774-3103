import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ReasonLostItem {
  id: string;
  percentage: number;
  description: string;
}

const reasonsLostData: ReasonLostItem[] = [
  { id: 'proposal_unclear1', percentage: 40, description: 'The proposal is unclear' },
  { id: 'venture_pursuit', percentage: 20, description: 'However venture pursuit' },
  { id: 'other', percentage: 10, description: 'Other' },
  { id: 'proposal_unclear2', percentage: 30, description: 'The proposal is unclear' }, // Another instance or typo in image data
];

interface ReasonLostCardProps {
  className?: string;
}

const ReasonLostCard: React.FC<ReasonLostCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Reasons of leads lost</CardTitle>
        <CardDescription>Summary of why leads were lost</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasonsLostData.map((reason) => (
            <div key={reason.id} className="flex flex-col items-start p-4 bg-card rounded-lg border">
              <p className="text-3xl font-bold text-primary">{reason.percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1 text-left">{reason.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonLostCard;
