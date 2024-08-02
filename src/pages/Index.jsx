import { useState } from 'react';
import { Heart, Cat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % catFacts.length);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">All About Cats</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Why We Love Cats</h2>
          <p className="mb-4 text-gray-800">
            Cats are fascinating creatures that have been companions to humans for thousands of years. 
            They're known for their independence, playfulness, and affectionate nature.
          </p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="Cute cat" 
            className="rounded-lg shadow-md mx-auto object-cover w-full h-[300px]"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Cat Facts</h2>
          <div className="bg-gray-200 p-4 rounded-lg mb-4">
            <p className="text-lg text-gray-800">{catFacts[currentFact]}</p>
          </div>
          <Button onClick={nextFact} className="mb-4 bg-gray-600 hover:bg-gray-700 text-white">
            <Cat className="mr-2 h-4 w-4" /> Next Fact
          </Button>
          
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Do you love cats?</h3>
          <div className="flex items-center">
            <Button 
              onClick={() => setLikes(likes + 1)} 
              variant="outline"
              className="flex items-center border-gray-500 text-gray-700 hover:bg-gray-100"
            >
              <Heart className="mr-2 h-4 w-4" /> Like
            </Button>
            <span className="ml-4 text-gray-800">{likes} cat lovers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
