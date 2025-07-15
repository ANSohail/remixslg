
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Sohail Law Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link to="/who-we-are" className="text-gray-700 hover:text-primary transition-colors">Who We Are</Link>
              <Link to="/what-we-do" className="text-gray-700 hover:text-primary transition-colors">What We Do</Link>
              <Link to="/about" className="text-primary font-semibold">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sohail Law Group</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Committed to providing exceptional legal representation with integrity and dedication
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1998, Sohail Law Group has been serving the community with 
                unwavering dedication to justice and client advocacy. What started as a small 
                practice has grown into a respected law firm known for its expertise across 
                multiple practice areas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced attorneys brings together decades of combined experience, 
                ensuring that each client receives the highest quality legal representation. We 
                believe in building lasting relationships with our clients based on trust, 
                transparency, and results.
              </p>
              <p className="text-lg text-gray-600">
                At Sohail Law Group, we understand that legal matters can be overwhelming. 
                That's why we're committed to guiding you through every step of the process 
                with compassion and expertise.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Law firm office"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="h-8 w-8" />,
                title: "Justice",
                description: "We fight tirelessly for what's right and fair for our clients"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client-Focused",
                description: "Your needs and goals are always our top priority"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Responsive",
                description: "We're here when you need us, providing timely communication"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Best Law Firm 2023</h3>
                <p className="text-gray-600">City Business Journal</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Top 40 Under 40</h3>
                <p className="text-gray-600">State Bar Association</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Client Choice Award</h3>
                <p className="text-gray-600">Legal Excellence Society</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
