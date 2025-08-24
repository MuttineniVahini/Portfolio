import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Lost and Found Management System",
      description: "Developed a cross-language Lost and Found Management System using C for optimized data handling and Python for a user-friendly GUI with intelligent item matching.",
      technologies: ["Data Structures","Python","C","Tkinter"],
      githubUrl: "https://github.com/MuttineniVahini",
      imageUrl: "https://www.247software.com/hubfs/lost-and-found-software.png"
    },
    {
      title: "C Resource Guide for 1st Year Students",
      description: "Built an interactive C program with file handling and modular design to help CSE students access organized study materials, notes, and video links for core subjects.",
      technologies: ["C","File Handling","Modular Programming"],
      githubUrl: "https://github.com/MuttineniVahini",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/61e830a9a1fa890cec5c1521/1644003919187-9121ITI7AZ2YIBLM8EOE/Protocols+Website+Graphics+%284%29.png"
    },
    {
      title: "Automatic Street Light",
      description: "Designed an Automatic Street Light System using LDR sensors and transistor-based circuits to enable energy-efficient, sensor-driven lighting control.",
      technologies: ["Electronics","LDR","Transistors","Circuits"],
      githubUrl: "https://github.com/MuttineniVahini",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZItym8UwiHuVfksUs9Tn6pAxACKlmHxB1p1wmU8y4iJhiN3p-MAk2LmuNQKnFVVLfL84&usqp=CAU"
    },
    {
      title: "Data Transfer using Li-Fi Technology",
      description: "Developed a Li-Fi communication system using Arduino, LED, and LDR to transmit and decode data via visible light, showcasing secure and interference-free wireless transmission.",
      technologies: ["Arduino","Li-Fi","LED","LDR","Wireless Communication"],
      githubUrl: "https://github.com/MuttineniVahini",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFFwjK1cBkthIqsLZbgK_VVpUK1CB3Dtf4Q&s"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore my latest work in software development, from cross-language applications to interactive tools, each project showcasing my growth in problem-solving, design, and user-focused innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 glass-card rounded-full font-medium hover-lift hover-target glow transition-all duration-300"
        >
          View All Projects
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};