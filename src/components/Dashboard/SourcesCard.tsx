import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface SourceDataPoint {
  name: string;
  value: number; // This will be used for pie chart segment size
  amount: number; // Dollar amount
  percentage: number;
  color: string;
}

const sourcesData: SourceDataPoint[] = [
  { name: 'Clutch', value: 3000, amount: 3000, percentage: 50, color: '#F06A6A' }, // Reddish-Orange
  { name: 'Behance', value: 1000, amount: 1000, percentage: 25, color: '#F5B861' }, // Orange-Yellow, made percentage different to sum to 100 for demo
  { name: 'Instagram', value: 1000, amount: 1000, percentage: 15, color: '#4FC3F7' }, // Light Blue/Teal
  { name: 'Dribbble', value: 1000, amount: 1000, percentage: 10, color: '#81C784' }, // Light Green
];

// Adjust values if percentages are the primary driver for pie chart size
const pieChartData = sourcesData.map(s => ({ name: s.name, value: s.percentage }));

interface SourcesCardProps {
  className?: string;
}

const SourcesCard: React.FC<SourcesCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
        <CardDescription>Lead sources distribution</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                innerRadius={60} // Donut chart
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={sourcesData[index].color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3">
          {sourcesData.map((source) => (
            <div key={source.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: source.color }}></span>
                <span className="text-card-foreground font-medium">{source.name}</span>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground">$ {source.amount.toLocaleString()}</span>
                <span className="text-primary font-semibold ml-2">{source.percentage}%</span>
              </div>
            </div>
          ))}
           <p className="text-xs text-muted-foreground text-right pt-2">from leads total</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesCard;
