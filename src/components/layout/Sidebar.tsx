import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  User,
  FileText,
  Receipt,
  Package,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Menu
} from 'lucide-react';

// Dummy Link component to mimic react-router-dom's Link
// In a real application, you would import Link from 'react-router-dom'
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children, className, ...props }) => {
  return (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );
};

const mainNavItems = [
  { href: '/dashboard', label: 'Dashboard' as const, icon: LayoutDashboard },
  { href: '/leads', label: 'Leads' as const, icon: Users },
  { href: '/customers', label: 'Customers' as const, icon: User },
  { href: '/proposals', label: 'Proposals' as const, icon: FileText },
  { href: '/invoices', label: 'Invoices' as const, icon: Receipt },
  { href: '/items', label: 'Items' as const, icon: Package },
  { href: '/mail', label: 'Mail' as const, icon: Mail },
  { href: '/shoebox', label: 'Shoebox' as const, icon: Archive },
  { href: '/calendar', label: 'Calendar' as const, icon: CalendarDays },
];

const footerNavItems = [
  { href: '/help', label: 'Help' as const, icon: HelpCircle },
  { href: '/settings', label: 'Settings' as const, icon: Settings },
  { href: '/profile', label: 'Profile' as const, icon: User }, // Assuming a profile link
];

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // In a real app, currentPath would come from useLocation() from react-router-dom
  const currentPath = '/dashboard'; // Mock current path for active state styling

  return (
    <aside className={cn("w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full border-r border-sidebar-border", className)}>
      {/* Sidebar Header/Logo Area */}
      <div className="h-[60px] flex items-center px-4 border-b border-sidebar-border shrink-0">
        <Button variant="ghost" size="icon" className="mr-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center justify-center h-8 w-8 bg-foreground rounded-full text-background font-bold text-sm shrink-0">
          bo
        </div>
        {/* Optional: Brand name text can go here */}
        {/* <span className="ml-2 font-semibold text-lg">LeadsCo</span> */}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === currentPath;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Navigation */}
      <div className="px-3 py-4 border-t border-sidebar-border space-y-1 shrink-0">
        {footerNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === currentPath; // Footer items might not need active state typically
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
