
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Award, GraduationCap } from "lucide-react";

const Attorneys = () => {
  const attorneys = [
    {
      name: "Sarah Sterling",
      title: "Managing Partner",
      specialties: ["Family Law", "Estate Planning"],
      education: ["J.D., Harvard Law School", "B.A., Yale University"],
      experience: "15+ years",
      bio: "Sarah founded Sterling & Associates with a vision to provide compassionate and effective legal representation. She specializes in complex family law matters and has been recognized as one of the top family law attorneys in the state.",
      achievements: ["Best Family Law Attorney 2023", "Top 40 Under 40", "Board Certified in Family Law"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      title: "Senior Partner",
      specialties: ["Corporate Law", "Immigration Law"],
      education: ["J.D., Stanford Law School", "M.B.A., Wharton"],
      experience: "12+ years",
      bio: "Michael brings extensive experience in corporate transactions and immigration law. He has helped numerous businesses navigate complex legal challenges and has assisted hundreds of individuals with their immigration needs.",
      achievements: ["Rising Star Award", "Corporate Law Excellence", "Immigration Law Specialist"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Jennifer Rodriguez",
      title: "Partner",
      specialties: ["Personal Injury", "Criminal Defense"],
      education: ["J.D., UCLA School of Law", "B.A., UC Berkeley"],
      experience: "10+ years",
      bio: "Jennifer is a fierce advocate for her clients, specializing in personal injury and criminal defense cases. Her aggressive representation has resulted in millions of dollars in settlements and numerous successful criminal defense outcomes.",
      achievements: ["Trial Lawyer of the Year", "Client Choice Award", "Million Dollar Advocate"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Attorneys</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet our experienced legal team committed to providing exceptional representation
          </p>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {attorneys.map((attorney, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold mb-2">{attorney.name}</h2>
                  <p className="text-xl text-primary font-semibold mb-4">{attorney.title}</p>
                  <p className="text-lg text-gray-600 mb-6">{attorney.bio}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-primary" />
                        Specialties
                      </h3>
                      <p className="text-gray-600">{attorney.specialties.join(", ")}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        Education
                      </h3>
                      <ul className="text-gray-600">
                        {attorney.education.map((edu, eduIndex) => (
                          <li key={eduIndex}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Experience</h3>
                      <p className="text-gray-600">{attorney.experience}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Achievements</h3>
                      <ul className="text-gray-600 space-y-1">
                        {attorney.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm">{attorney.name.toLowerCase().replace(' ', '.')}@sterlinglaw.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="text-sm">(555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Collaborative Excellence</h3>
                <p className="text-gray-600">Our attorneys work together, combining their expertise to provide comprehensive legal solutions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continued Education</h3>
                <p className="text-gray-600">We stay current with the latest legal developments to provide cutting-edge representation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Direct Access</h3>
                <p className="text-gray-600">You'll have direct access to your attorney throughout your case, ensuring clear communication.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
