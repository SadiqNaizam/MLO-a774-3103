import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle, className }) => {
  return (
    <div className={cn("flex h-screen bg-background", className)}>
      {/* Sidebar for md+ screens, could be drawer for sm screens if needed */}
      <div className="hidden md:flex md:flex-shrink-0">
         <Sidebar />
      </div>
      {/* TODO: Add mobile sidebar (drawer) toggle functionality here if required */}
      {/* E.g. <MobileSidebar /> and a button in TopHeader to toggle it */}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader title={pageTitle} />
        <main
          className={cn(
            "flex-1 overflow-x-hidden overflow-y-auto",
            "bg-background text-foreground",
            "px-6 py-6",
            "mt-[60px]" // Space for the fixed TopHeader
          )}
        >
          {/* LayoutRequirements.mainContent.container: "flex flex-col gap-6" */}
          <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
