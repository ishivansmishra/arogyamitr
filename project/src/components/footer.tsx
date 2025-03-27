import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold">ArogyaMitr</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Improving access to healthcare in underserved communities.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              Address: Varanasi, India<br />
              Phone: +91 9369515724<br />
              Email: contact@arogyamitr.com
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
              <li><Link to="/emergency">Emergency Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2024 ArogyaMitr. All rights reserved. Developed by DevSphere</p>
        </div>
      </div>
    </footer>
  );
}