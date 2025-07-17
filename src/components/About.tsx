import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Book } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Relationships",
      description: "Building genuine connections based on love, grace, and truth"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Welcoming people from all walks of life across Kenya"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From the heart of Kenya to the ends of the earth"
    },
    {
      icon: Book,
      title: "Biblical Foundation",
      description: "Grounded in God's Word and the teachings of Jesus"
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Who we are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-accent-foreground leading-relaxed mb-8">
              Living Stone Church exists to see lives authentically restored and transformed by the 
              love and power of Jesus - no hype, no heroes, no performances. Just real people living 
              real lives with real purpose. We're a vibrant, diverse church family with a passion 
              for the countryside and a mission from the heart of Kenya to the ends of the earth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="px-8">
              Who is Jesus?
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Stories from real people
            </Button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-background shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;