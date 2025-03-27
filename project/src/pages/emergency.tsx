import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Services</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Phone className="h-12 w-12 text-primary mb-4" />
        <h2 className="text-xl font-semibold mb-4">24/7 Emergency Helpline</h2>
        <p className="text-gray-600 mb-6">
          For immediate medical assistance, please call our emergency helpline.
        </p>
        <Button size="lg">
          <Phone className="mr-2 h-5 w-5" />
          Call Now: +91 9369515724
        </Button>
      </div>
    </div>
  );
}