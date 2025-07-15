
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  email: string;
  image: string;
  aboutContent: React.ReactNode;
  educationContent: React.ReactNode;
}

const TeamMemberCard = ({
  name,
  title,
  email,
  image,
  aboutContent,
  educationContent
}: TeamMemberCardProps) => {
  return (
    <div className="group relative h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
      
      {/* Profile Header */}
      <div className="relative p-8 text-center border-b border-gray-100">
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-light mb-2 tracking-tight" style={{ color: '#7190a6' }}>{name}</h3>
        <p className="text-lg mb-4 font-light" style={{ color: '#7190a6' }}>{title}</p>
        
        <div className="flex items-center justify-center space-x-2 bg-gray-50 rounded-full px-4 py-2" style={{ color: '#7190a6' }}>
          <Mail className="h-4 w-4" />
          <span className="text-sm">{email}</span>
        </div>
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
              value="education" 
              className="bg-white font-medium border-0 rounded-none py-4 text-base transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white"
              style={{ color: '#7190a6' }}
            >
              Education and Background
            </TabsTrigger>
          </TabsList>
          
          <div className="p-8">
            <TabsContent value="about" className="mt-0 [&_*]:text-[#7190a6]">
              {aboutContent}
            </TabsContent>
            
            <TabsContent value="education" className="mt-0 [&_*]:text-[#7190a6]">
              {educationContent}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamMemberCard;
