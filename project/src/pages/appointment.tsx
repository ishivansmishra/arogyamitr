import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function AppointmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold">Schedule Your Visit</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="date">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="time">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="reason">
              Reason for Visit
            </label>
            <textarea
              id="reason"
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Please describe your reason for visit"
            />
          </div>
          <Button type="submit" className="w-full">
            Book Appointment
          </Button>
        </form>
      </div>
    </div>
  );
}