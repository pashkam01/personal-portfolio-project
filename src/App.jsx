import { useState } from 'react'
import javalogo from './assets/Java.png'
import javascriptlogo from './assets/JavaScript.png'
import jetsetgo from './assets/JetSetGo.png'
import csslogo from './assets/CSS.png'
import htmllogo from './assets/HTML.png'
import reactlogo from './assets/React.png'
import awslogo from './assets/AWS.png'
import rollsbythepound from './assets/RollsByThePound.png'
import movielab from './assets/MovieLab.png'
import { Github, Linkedin, Instagram} from "lucide-react";


function App() {
  const [activeTab, setActiveTab] = useState("project1");

  return (
    <div className="bg-slate-800">
      <div className="max-w-6xl w-full bg-slate-800 text-white min-h-screen mx-auto px-4">
        {/* Navigation */}
        <nav className="py-10 px-10 flex justify-between items-center sticky top-0 bg-green-500 text-black rounded-b-md border border-green-900 border-b-4 shadow-xl">
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Social Media */}

          <div className="flex space-x-4">
            <a
              href="https://github.com/pashkam01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              <Github className="w-6 h-6"/>
            </a>
            <a
              href="https://www.linkedin.com/in/paul-moskalyuk-087146b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              <Linkedin className="w-6 h-6"/>
            </a>
            <a
              href="https://www.instagram.com/paul.moskalyuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              <Instagram className="w-6 h-6"/>
            </a>
          </div>
        </nav>

        {/* Home Section */}
        <header id="home" className="flex flex-col justify-center font-semibold items-center py-20 scroll-mt-24">
          <h1 className="text-7xl">Paul Moskalyuk</h1>
          <p className="text-2xl text-center max-w-2xl py-12">Full-stack software engineer with experience in 
            React, AWS, Java, and modern web development.</p>
        </header>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-24">
          <div className="mb-6 inline-block">
            <h2 className="text-4xl">Tech Stack</h2>
            <div className="h-1 bg-green-500 w-full my-5"></div>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <img src={javalogo} alt="Java" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"/>
            <img src={javascriptlogo} alt="JavaScript" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"/>
            <img src={csslogo} alt="CSS" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"/>
            <img src={htmllogo} alt="HTML" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"/>
            <img src={reactlogo} alt="React" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"/>
            <img src={awslogo} alt="AWS" className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32"/>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-24">
          <div className="mb-6 inline-block">
            <h2 className="text-4xl">Projects</h2>
            <div className="h-1 bg-green-500 w-full my-5"></div>
          </div>

          <ul className="space-y-12">

            {/* JetSetGo */}

            <li className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                <div className="col-span-2 md:col-span-2">
                  <img 
                    src={jetsetgo} 
                    alt="JetSetGo" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="col-span-6 md:col-span-6">
                  <h3 className="text-2xl font-medium my-3">JetSetGo</h3>
                  <p className="text-gray-300">A full-stack travel and tourism web application designed to make trip planning simple and seamless.
                        Users can register, log in, and book flights and hotels to their favorite destinations, while the admin has a dedicated dashboard to manage 
                        flight and hotel data, view user accounts, and oversee bookings.
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </li>

            <li className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                <div className="col-span-2 md:col-span-2">
                  <img 
                    src={rollsbythepound} 
                    alt="RollsByThePound" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="col-span-6 md:col-span-6">
                  <h3 className="text-2xl font-medium my-3">Rolls By The Pound</h3>
                  <p className="text-gray-300">Rolls By The Pound is a small-business bakery located in Newark, OH. 
                    This web application serves as an online ordering platform for the bakery, allowing users to create profiles, browse the menu, customize items, and add them to their cart for checkout.
                    Users also have access to their past orders, with the ability to quickly reorder directly from their dashboard, making the experience seamless and convenient.
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </li>

            <li className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
                <div className="col-span-2 md:col-span-2">
                  <div className="aspect-square">
                    <img 
                      src={movielab} 
                      alt="MovieLab" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="col-span-6 md:col-span-6">
                  <h3 className="text-2xl font-medium my-3">MovieLab</h3>
                  <p className="text-gray-300">MovieLab is a cross-platform mobile application built with Flutter and Dart that allows users to browse a list of movies
                    with details such as descriptions, ratings, and other useful information. Each movie entry is clickable, giving an interactive experience where the users can view in 
                    depth information like the cast, genre, release date, and reviews.
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {["Flutter", "Dart"].map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </li>
          </ul>

        </section>
      </div>
    </div>  
  )
}

export default App
