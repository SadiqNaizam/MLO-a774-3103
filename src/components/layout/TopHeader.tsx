import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle, FilePlus2, Briefcase } from 'lucide-react';

interface TopHeaderProps {
  title?: string;
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({
  title = 'Dashboard Overview',
  className,
}) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 md:left-64 right-0 z-10", // Adjusted for sidebar width on md+ screens
        "h-[60px] bg-background border-b border-border",
        "flex items-center justify-between px-4 md:px-6",
        className
      )}
    >
      <h1 className="text-xl md:text-2xl font-semibold text-foreground">
        {title}
      </h1>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>New Lead</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>New Customer</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FilePlus2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>New Proposal</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {/* <Settings className="mr-2 h-4 w-4 text-muted-foreground" /> Commenting out as Settings not fitting for 'Create' */}
              <span>More Options...</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
