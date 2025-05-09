import { TransitionLink } from "@/components/utils/transitionLink";

interface Service {
  name: string;
  description: string;
  keywords: string[];
}

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const fitnessServices: Service[] = [
    { 
      name: "Gymming", 
      description: "State-of-the-art gym facilities with professional equipment",
      keywords: ["gym", "weights", "equipment", "workout"]
    },
    { 
      name: "Yoga", 
      description: "Various yoga styles for all levels to improve flexibility and mindfulness",
      keywords: ["yoga", "meditation", "flexibility", "mindfulness"]
    },
    { 
      name: "Fitness Training", 
      description: "Personalized training programs to achieve your fitness goals",
      keywords: ["training", "personal", "coach", "program"]
    },
    { 
      name: "Cardio Workouts", 
      description: "High-energy cardio sessions to boost endurance and burn calories",
      keywords: ["cardio", "running", "cycling", "endurance"]
    },
    { 
      name: "Strength Training", 
      description: "Build muscle and increase strength with expert guidance",
      keywords: ["strength", "muscle", "power", "lifting"]
    },
    { 
      name: "Pilates", 
      description: "Low-impact exercises to strengthen core and improve posture",
      keywords: ["pilates", "core", "posture", "low-impact"]
    },
    { 
      name: "Nutrition Counseling", 
      description: "Personalized diet plans to complement your fitness journey",
      keywords: ["nutrition", "diet", "food", "health"]
    },
    { 
      name: "Group Classes", 
      description: "Motivating group sessions for all fitness levels",
      keywords: ["group", "class", "team", "social"]
    },
  ];

  const searchTerm = searchParams.search?.toLowerCase() || "";
  
  const filteredServices = searchTerm
    ? fitnessServices.filter(service => 
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.keywords.some(keyword => keyword.includes(searchTerm)))
    : fitnessServices;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">What are you looking for?</h1>
        
        {searchTerm && (
          <div className="mb-8 text-center">
            <p className="text-lg">
              Showing results for: <span className="font-semibold">{searchTerm}</span>
            </p>
            <TransitionLink 
              href="/services" 
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Clear search
            </TransitionLink>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <TransitionLink
                  href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore {service.name} →
                </TransitionLink>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">No services found</h3>
              <p className="text-gray-600">Try searching for something else</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}