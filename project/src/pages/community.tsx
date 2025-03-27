import { Users } from "lucide-react";

export function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Community Forum</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Users className="h-12 w-12 text-primary mb-4" />
        <h2 className="text-xl font-semibold mb-4">Join the Discussion</h2>
        <p className="text-gray-600">
          Connect with others, share experiences, and get support from the community.
        </p>
      </div>
    </div>
  );
}