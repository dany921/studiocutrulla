
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
  isExternal?: boolean;
}

const ServiceCard = ({ title, description, icon, link, className, isExternal = false }: ServiceCardProps) => {
  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-lg", className)}>
      <CardHeader className="pb-4 pt-6">
        <div className="w-16 h-16 flex items-center justify-center bg-accountBlue text-white rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 min-h-[100px]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {isExternal ? (
          <Button 
            asChild 
            variant="outline" 
            className="w-full border-accountBlue text-accountBlue hover:bg-accountBlue hover:text-white"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Scopri di più
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full border-accountBlue text-accountBlue hover:bg-accountBlue hover:text-white">
            <Link to={link}>Scopri di più</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
