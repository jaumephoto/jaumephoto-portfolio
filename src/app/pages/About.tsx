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
              I'm a visual storyteller passionate about capturing authentic moments that tell compelling stories. 
              My work spans across street photography, live concerts, weddings, and intimate portrait sessions.
            </p>
            <p>
              With over a decade of experience behind the lens, I've developed a keen eye for finding beauty 
              in both the extraordinary and the everyday. Each photograph is an opportunity to freeze time 
              and preserve emotion.
            </p>
            <p>
              My goal is to create images that resonate with genuine human connection, whether it's the raw 
              energy of a street scene, the electric atmosphere of a live performance, the joy of a wedding 
              celebration, or the vulnerability of a portrait session.
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