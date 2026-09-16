import { Mail, Instagram } from "lucide-react";

export function About() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1696273338595-178a113ead5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwcm9mZXNzaW9uYWwlMjBjYW1lcmF8ZW58MXx8fHwxNzczNTc0MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Photographer"
            className="w-full h-auto"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl mb-6">About Me</h1>
          
          <div className="space-y-4 text-gray-700 mb-8">
            <p>
              With my photos I want to capture true stories, any kind, joyful, tragic, encouraging,
              pessimistic, curious, extravagant, loveful, some obvious, some hidden inside an iris, a
              hand or a certain kind of stare. I believe I came to this world with this irresistible
              curiosity inside of me, this need of making moments matter, this ability of seeing the
              most relevant and unordinary events in the most unexpected places. I do not want to take
              pictures that leave their witness indifferent, something must move, a comment, a feeling,
              a thought, a laugh, rage or maybe nostalgia. To me it's people that evoke all of these
              feelings.
            </p>
            <p>
              We live in a world that often judges people at first glance, without much empathy or
              understanding. That's why it matters to me that a single glance at my pictures can tell
              enough of someone's story to spark the respect and empathy needed for people to perceive
              each other with kindness.
            </p>
            <p>
              This idea may affect people differently, but it's important that we all recognize it:
              beside us on every street, in every flat, across that field, beyond that sea, above our
              heads or below the ground we stand on, there are people living their own individual
              lives with their own problems, feelings, interests, and goals. I believe this simple
              almost unbelievable idea, if truly considered, can change the world, moving it toward
              more respect and less rage.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex gap-4">
            <a 
              href="mailto:jaumem.jbs@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:border-black transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a 
              href="https://www.instagram.com/jaumephoto/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:border-black transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}