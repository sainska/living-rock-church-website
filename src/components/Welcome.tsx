import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Coffee, Users, Smile, Music } from "lucide-react";

const Welcome = () => {
  const welcomePoints = [
    {
      icon: Clock,
      title: "Service Times",
      description: "Multiple services across Kenya every Sunday"
    },
    {
      icon: Coffee,
      title: "Karibu Coffee",
      description: "Enjoy traditional Kenyan coffee and meet new friends"
    },
    {
      icon: Users,
      title: "Kids & Youth",
      description: "Engaging programs for children and teenagers"
    },
    {
      icon: Smile,
      title: "Friendly Atmosphere",
      description: "Come as you are - casual dress is perfectly fine"
    },
    {
      icon: Music,
      title: "Worship Music",
      description: "Contemporary worship with local African influences"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Message */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              New to Living Rock? Karibu!
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here's everything you need to know in 30 seconds 👇
            </p>
            
            {/* Video Preview */}
            <div className="relative bg-gradient-hero rounded-lg overflow-hidden mb-6 group cursor-pointer shadow-soft hover:shadow-strong transition-all duration-300">
              <div className="aspect-video bg-primary-dark flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold">Welcome to Living Rock Church</span>
              </div>
            </div>

            <Button variant="default" size="lg" className="w-full sm:w-auto">
              Watch Welcome Video
            </Button>
          </div>

          {/* Welcome Points */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6 text-primary">What to Expect</h3>
            {welcomePoints.map((point, index) => (
              <Card key={index} className="bg-accent shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="bg-gradient-hero rounded-full p-2 flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{point.title}</h4>
                    <p className="text-sm text-accent-foreground">{point.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;