import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background z-50">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-red-500" />
          <span className="text-2xl font-bold">ArogyaMitr</span>
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost">Services</Button>
          </Link>
          <Link to="/telemedicine">
            <Button variant="ghost">Telemedicine</Button>
          </Link>
          <Link to="/education">
            <Button variant="ghost">Education</Button>
          </Link>
          <Link to="/community">
            <Button variant="ghost">Community</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}