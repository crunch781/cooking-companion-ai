import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <main className={cn(
      "container mx-auto px-4 pt-24 pb-12 min-h-screen",
      className
    )}>
      {children}
    </main>
  );
};

export default PageContainer;