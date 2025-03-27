import { BookOpen } from "lucide-react";

export function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Health Education Hub</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-4">Health Resources</h2>
          <p className="text-gray-600 mb-4">
            Access educational materials and resources about health, wellness, and preventive care.
          </p>
        </div>
      </div>
    </div>
  );
}