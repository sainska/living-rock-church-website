import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      city: "Nairobi",
      address: "Kenyatta International Conference Centre, Harambee Avenue",
      time: "9:00 AM",
      pastor: "Pastor Grace Wanjiku",
      phone: "+254 700 123 456",
      email: "nairobi@livingstone.church"
    },
    {
      city: "Mombasa", 
      address: "Mama Ngina Drive Community Center, Mombasa",
      time: "10:30 AM",
      pastor: "Pastor David Kimani",
      phone: "+254 700 234 567",
      email: "mombasa@livingstone.church"
    },
    {
      city: "Kisumu",
      address: "Jomo Kenyatta Sports Ground, Kisumu",
      time: "10:30 AM", 
      pastor: "Pastor Mary Otieno",
      phone: "+254 700 345 678",
      email: "kisumu@livingstone.church"
    },
    {
      city: "Nakuru",
      address: "Nakuru Agricultural Society of Kenya Grounds",
      time: "3:00 PM",
      pastor: "Pastor Samuel Mwangi",
      phone: "+254 700 456 789",
      email: "nakuru@livingstone.church"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Find Us Across Kenya
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground max-w-3xl mx-auto">
            Join our growing church family at one of our four locations across the beautiful country of Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="bg-background shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {location.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="text-sm font-medium">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Sundays at {location.time}</span>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pastor</p>
                  <p className="text-sm font-medium">{location.pastor}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm">{location.email}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="px-8">
            View All Locations & Times
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Locations;