import { Video } from "lucide-react";

export function TelemedicinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Telemedicine Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Video className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Virtual Consultations</h2>
          <p className="text-gray-600 mb-4">
            Connect with healthcare professionals from the comfort of your home through secure video consultations.
          </p>
        </div>
      </div>
    </div>
  );
}