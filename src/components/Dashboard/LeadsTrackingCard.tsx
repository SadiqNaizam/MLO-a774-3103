import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface LeadsTrackingDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: LeadsTrackingDataPoint[] = [
  { month: 'Jan', closedWon: 50, closedLost: 10 },
  { month: 'Feb', closedWon: 65, closedLost: 15 },
  { month: 'Mar', closedWon: 80, closedLost: 5 },
  { month: 'Apr', closedWon: 60, closedLost: 25 },
  { month: 'May', closedWon: 95, closedLost: 12 },
  { month: 'Jun', closedWon: 70, closedLost: 40 },
  { month: 'Jul', closedWon: 110, closedLost: 20 },
  { month: 'Aug', closedWon: 85, closedLost: 30 },
];

const totalClosedWon = leadsTrackingData.reduce((sum, item) => sum + item.closedWon, 0);
const totalClosedLost = leadsTrackingData.reduce((sum, item) => sum + item.closedLost, 0);

const CLOSED_WON_COLOR = 'hsl(var(--primary))'; // Blue
const CLOSED_LOST_COLOR = 'hsl(var(--destructive))'; // Red

interface LeadsTrackingCardProps {
  className?: string;
}

const LeadsTrackingCard: React.FC<LeadsTrackingCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Leads tracking</CardTitle>
        <div className="flex space-x-4">
            <CardDescription className="text-xl font-bold text-foreground">{totalClosedWon} <span className="text-sm font-normal text-muted-foreground">total closed</span></CardDescription>
            <CardDescription className="text-xl font-bold text-foreground">{totalClosedLost} <span className="text-sm font-normal text-muted-foreground">total lost</span></CardDescription>
        </div>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CLOSED_WON_COLOR} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={CLOSED_WON_COLOR} stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CLOSED_LOST_COLOR} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={CLOSED_LOST_COLOR} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} />
            <YAxis tickLine={false} axisLine={false} dx={-10} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}} 
              itemStyle={{ color: 'hsl(var(--card-foreground))' }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Area type="monotone" dataKey="closedWon" name="Closed Won" stroke={CLOSED_WON_COLOR} fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            <Area type="monotone" dataKey="closedLost" name="Closed Lost" stroke={CLOSED_LOST_COLOR} fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingCard;
