import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dumbbell, Users, Utensils, ChevronRight, ArrowRight } from "lucide-react";

// At the top of the file (below your imports):
const testimonials = [
  {
    name: "Muhammad Ali",
    since: "Member since 2025",
    rating: 5,
    text: "PRO FITNESS transformed my life—down 20kg and up 30% in strength in just 3 months!",
    avatarColor: "bg-white",
  },
  {
    name: "Sara Khan",
    since: "Member since 2025",
    rating: 4,
    text: "The group classes are life-changing. I feel stronger, fitter, and part of an amazing community.",
    avatarColor: "bg-white",
  },
  {
    name: "Ravinder",
    since: "Member since 2025",
    rating: 5,
    text: "From nutrition to training, PRO FITNESS delivers. My energy levels have never been higher!",
    avatarColor: "bg-white",
  },
];




export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/pic3.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container relative z-10 flex h-full items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              TRANSFORM YOUR <span className="text-white">BODY</span> TODAY
            </h1>
            <p className="text-xl text-gray-300">
              Professional training programs tailored to your fitness goals
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white text-lg px-8 py-6">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-black border-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">OUR SERVICES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Training",
                description: "1-on-1 customized workout plans with certified trainers",
                icon: <Dumbbell className="w-6 h-6" />,
              },
              {
                title: "Group Classes",
                description: "High-energy group sessions for all fitness levels",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "Nutrition Plans",
                description: "Personalized diet programs for optimal results",
                icon: <Utensils className="w-6 h-6" />,
              },
            ].map((service) => (
              <Card 
                key={service.title} 
                className="hover:shadow-lg transition-all bg-black border-gray-700 hover:border-white/30 hover:translate-y-[-4px]"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-black text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="link" 
                    className="px-0 text-white hover:text-gray-300 group"
                  >
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-white text-black white hover:bg-white/10 hover:text-white px-8 py-6 text-lg"
            >
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
<section className="py-20 bg-black">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">SUCCESS STORIES</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map(({ name, since, rating, text, avatarColor }) => (
        <Card key={name} className="bg-black border-gray-700">
          <CardContent className="p-6">
            <div className="text-yellow-600 mb-4">
              {"★".repeat(rating) + "☆".repeat(5 - rating)}
            </div>
            <p className="text-gray-300 mb-4">"{text}"</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${avatarColor}`}></div>
              <div>
                <p className="font-medium text-white">{name}</p>
                <p className="text-sm text-gray-400">{since}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">READY TO START YOUR JOURNEY?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join PRO FITNESS today and get your first week free with no commitment
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-10 py-7 text-lg">
            Join Now
          </Button>
        </div>
      </section>
    </div>
  );
}