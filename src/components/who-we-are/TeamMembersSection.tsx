
import { Users } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembersSection = () => {
  const anishbaAboutContent = (
    <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: '#7190a6' }}>
      <p className="mb-4">
        Anishba Sohail is a lawyer at Sohail Law Group, practising in civil and commercial litigation, real estate, and corporate law. She works with individuals, entrepreneurs, and growing businesses to resolve disputes, manage transactions, and structure new ventures.
      </p>
      <p className="mb-4">
        A young, passionate, and forward-thinking legal professional, Anishba brings energy, insight, and creativity to every file she handles. She has represented clients before the Superior Court of Justice, the Federal Court, and various administrative tribunals.
      </p>
      <p>
        Anishba is committed to building a modern, accessible legal practice grounded in professionalism, innovation, and trust.
      </p>
    </div>
  );

  const anishbaEducationContent = (
    <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: '#7190a6' }}>
      <p className="mb-4">
        Anishba earned her undergraduate degree from Toronto Metropolitan University, where she was actively involved in entrepreneurial groups and start-up programs. She has completed multiple certifications in entrepreneurship and business development.
      </p>
      <p>
        She obtained her law degree from the University of Leicester in the UK, participated in mooting competitions and mock trials, and completed the Law Practice Program in Toronto before being called to the Ontario Bar.
      </p>
    </div>
  );

  const shandanaAboutContent = (
    <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: '#7190a6' }}>
      <p>
        Shandana Sohail is an experienced Regulated Canadian Immigration Consultant with <strong>over 10 years of professional experience</strong> managing immigration applications for clients from diverse cultures and religious backgrounds worldwide.
      </p>
    </div>
  );

  const shandanaEducationContent = (
    <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: '#7190a6' }}>
      <p className="mb-4">
        Shandana is a lecturer on Canadian Immigration Law at CDI College and a distinguished panel member of the Immigration Learning and Information Network (IMLIN), contributing to training licensed immigration consultants.
      </p>
      <p>
        She holds a master's degree in business strategy and serves as a director of several businesses, demonstrating expertise in both legal and entrepreneurial fields.
      </p>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 bg-white shadow-sm">
            <Users className="h-5 w-5" style={{ color: '#a38f6f' }} />
            <span className="font-medium" style={{ color: '#a38f6f' }}>Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#a38f6f' }}>
            Leadership Excellence
          </h2>
          
          <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: '#a38f6f' }}></div>
          
          <p className="text-lg max-w-2xl mx-auto font-light" style={{ color: '#a38f6f' }}>
            Meet the experienced professionals who guide our practice with expertise, integrity, and unwavering dedication to client success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <TeamMemberCard
            name="Anishba Sohail"
            title="Principal Lawyer"
            email="anishba@sohaillaw.com"
            image="/lovable-uploads/1cd8faef-303f-41d0-aa49-49dc40654f38.png"
            aboutContent={anishbaAboutContent}
            educationContent={anishbaEducationContent}
          />

          <TeamMemberCard
            name="Shandana Sohail"
            title="Regulated Canadian Immigration Consultant"
            email="shandana@sohaillaw.com"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
            aboutContent={shandanaAboutContent}
            educationContent={shandanaEducationContent}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
