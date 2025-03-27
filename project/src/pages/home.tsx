import { Button } from "@/components/ui/button";
import { Calendar, Video, BookOpen, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Healthcare Access for Everyone
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ArogyaMitr connects you with healthcare professionals, resources, and
            support to ensure quality healthcare reaches every corner of India.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/appointment">
              <Button size="lg">Book Appointment</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/telemedicine" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <Video className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Telemedicine Consultations
                </h3>
                <p className="text-gray-600">
                  Connect with doctors remotely through video calls and chat.
                </p>
              </div>
            </Link>
            
            <Link to="/appointment" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Easy Appointment Booking
                </h3>
                <p className="text-gray-600">
                  Schedule in-person or online appointments with healthcare providers.
                </p>
              </div>
            </Link>
            
            <Link to="/education" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Health Education Hub
                </h3>
                <p className="text-gray-600">
                  Access educational resources about health and wellness.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Emergency Assistance?
          </h2>
          <p className="text-xl mb-8">
            Our 24/7 helpline is always available for you
          </p>
          <Link to="/emergency">
            <Button size="lg" variant="outline" className="text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Helpline
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}