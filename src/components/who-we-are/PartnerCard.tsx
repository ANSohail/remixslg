
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PartnerCardProps {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  badgeIcon: React.ReactNode;
  aboutContent: React.ReactNode;
  servicesContent: React.ReactNode;
}

const PartnerCard = ({
  name,
  subtitle,
  icon,
  badgeIcon,
  aboutContent,
  servicesContent
}: PartnerCardProps) => {
  return (
    <div className="group relative h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Profile Header */}
      <div className="relative p-8 text-center bg-gradient-to-br from-white to-gray-50 border-b border-gray-100">
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#7190a6' }}>
            {icon}
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
            {badgeIcon}
          </div>
        </div>
        
        <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">{name}</h3>
        <p className="text-lg font-light" style={{ color: '#7190a6' }}>{subtitle}</p>
      </div>

      {/* Tabbed Content */}
      <div className="relative bg-white">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white rounded-none p-0 h-auto border-b border-gray-100">
            <TabsTrigger 
              value="about" 
              className="bg-white font-medium border-0 rounded-none py-4 text-base transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white"
              style={{ color: '#7190a6' }}
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="services" 
              className="bg-white font-medium border-0 rounded-none py-4 text-base transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white"
              style={{ color: '#7190a6' }}
            >
              Services
            </TabsTrigger>
          </TabsList>
          
          <div className="p-8">
            <TabsContent value="about" className="mt-0">
              {aboutContent}
            </TabsContent>
            
            <TabsContent value="services" className="mt-0">
              {servicesContent}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PartnerCard;
