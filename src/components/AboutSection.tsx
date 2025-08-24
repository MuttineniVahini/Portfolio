import vahiniPortrait from '../assets/vahini-portrait.jpg';

export const AboutSection = () => {
  const skills = [
    'C',
    'C++',
    'Python',
    'Data Structures',
    'Java',
    'Database Management',
    'React',
    'JavaScript'
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="aspect-square rounded-3xl overflow-hidden glass-card hover-lift glow">
              <img
                src={vahiniPortrait}
                alt="Vahini Muttineni"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-30 animate-float"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Hello! I'm Vahini Muttineni, a passionate Computer Science Engineer with a deep fascination for 
                Artificial Intelligence and Machine Learning. I believe that technology has the power to solve 
                complex problems and create meaningful impact in our world.
              </p>
              <p>
                My journey in tech began with curiosity about how machines can learn and think. 
                This curiosity has driven me to explore various domains including deep learning, 
                computer vision, and natural language processing.
              </p>
              <p>
                When I'm not coding or training models, you'll find me exploring the latest research papers, 
                contributing to open-source projects, or sharing knowledge with the tech community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-display font-semibold gradient-text mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium hover-lift transition-all duration-300 hover-target"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          </div>
        </div>
    </section>
  );
};