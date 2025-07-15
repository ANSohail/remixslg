import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TeamSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Anishba Sohail */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img 
                src="/lovable-uploads/1cd8faef-303f-41d0-aa49-49dc40654f38.png"
                alt="Anishba Sohail"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light mb-2 tracking-tight" style={{ color: '#7190a6' }}>
                  Anishba Sohail
                </h3>
                <p className="text-lg font-light text-black">
                  Principal Lawyer
                </p>
                <p className="text-lg mt-2 text-black">
                  anishba@sohaillaw.com
                </p>
              </div>

              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-50 p-1 rounded-lg">
                  <TabsTrigger 
                    value="about" 
                    className="font-medium rounded-md transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white text-[#7190a6]"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger 
                    value="education" 
                    className="font-medium rounded-md transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white text-[#7190a6]"
                  >
                    Education and Background
                  </TabsTrigger>
                </TabsList>
                
                <div className="mt-6">
                  <TabsContent value="about" className="mt-0">
                    <div className="prose prose-lg max-w-none leading-relaxed">
                      <p className="mb-4 text-black">
                        Anishba Sohail is the Principal Lawyer at Sohail Law Group with a diverse practice in civil and commercial litigation, real estate, and corporate law. She represents a wide range of clients including individuals, families, entrepreneurs, and growing businesses, helping them resolve complex legal disputes, navigate real estate transactions, and structure business ventures with confidence and clarity.
                      </p>
                      <p className="mb-4 text-black">
                        Anishba has a strong track record of handling civil and commercial matters with skill and strategic insight. She has appeared before the Superior Court of Justice, the Federal Court, and various administrative tribunals, advocating for her clients with professionalism, creativity, and determination.
                      </p>
                      <p className="mb-4 text-black">
                        In addition to her litigation and real estate work, Anishba brings valuable experience working with small businesses and start-ups. Her combined legal and commercial background allows her to offer practical, business-minded solutions that reflect the real-world needs of her clients.
                      </p>
                      <p className="text-black">
                        She is committed to building a legal practice that is modern, accessible, and built on the principles of integrity, innovation, and results.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="education" className="mt-0">
                    <div className="prose prose-lg max-w-none leading-relaxed">
                      <p className="mb-4 text-black">
                        Anishba earned her law degree from the University of Leicester in the UK, where she developed her advocacy skills through mooting competitions and mock trials. She later completed the Law Practice Program (LPP) in Toronto and was called to the Ontario Bar.
                      </p>
                      <p className="text-black">
                        She holds an undergraduate degree from Toronto Metropolitan University, where she was actively involved in entrepreneurship and start-up programs. In addition to her academic background, she has completed certifications in business development and entrepreneurship, which inform her ability to serve both individual and corporate clients with a balanced and insightful approach.
                      </p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>

          {/* Shandana Sohail */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=face"
                alt="Shandana Sohail"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light mb-2 tracking-tight" style={{ color: '#7190a6' }}>
                  Shandana Sohail
                </h3>
                <p className="text-lg font-light text-black">
                  Regulated Canadian Immigration Consultant
                </p>
                <p className="text-lg mt-2 text-black">
                  shandana@sohaillaw.com
                </p>
              </div>

              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-50 p-1 rounded-lg">
                  <TabsTrigger 
                    value="about" 
                    className="font-medium rounded-md transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white text-[#7190a6]"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger 
                    value="education" 
                    className="font-medium rounded-md transition-all duration-300 data-[state=active]:bg-[#7190a6] data-[state=active]:text-white text-[#7190a6]"
                  >
                    Education and Background
                  </TabsTrigger>
                </TabsList>
                
                <div className="mt-6">
                  <TabsContent value="about" className="mt-0">
                    <div className="prose prose-lg max-w-none leading-relaxed">
                      <p className="mb-4 text-black">
                        Shandana Sohail is a Regulated Canadian Immigration Consultant (RCIC) with over 10 years of experience helping clients from diverse cultural and religious backgrounds navigate Canadian immigration and citizenship processes. She is known for her thorough, empathetic approach and her ability to manage complex immigration cases effectively.
                      </p>
                      <p className="mb-4 text-black">
                        Shandana is a respected educator who teaches Canadian Immigration Law at CDI College, where she also mentors students through internships and volunteer opportunities. She plays an active role in the immigration community as a distinguished panel member of the Immigration Learning and Information Center (IMLIN), providing training and continuing professional development for licensed immigration consultants. She frequently speaks at seminars and panel discussions alongside other legal professionals.
                      </p>
                      <p className="text-black">
                        In addition to her immigration work, Shandana holds leadership roles in several businesses, leveraging her expertise in business strategy to provide well-rounded advice to clients, especially those pursuing business-related immigration pathways.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="education" className="mt-0">
                    <div className="prose prose-lg max-w-none leading-relaxed">
                      <p className="mb-4 text-black">
                        Shandana is licensed by the College of Immigration and Citizenship Consultants (CICC) as a Regulated Canadian Immigration Consultant (RCIC). She holds a master's degree in Business Strategy, which enhances her ability to integrate legal expertise with practical business knowledge.
                      </p>
                      <p className="text-black">
                        Her education and extensive professional experience have equipped her to assist a broad range of clients with immigration applications, appeals, and complex cases, ensuring they receive informed and strategic guidance throughout their immigration journey.
                      </p>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
