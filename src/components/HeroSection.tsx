import { TypingAnimation } from './TypingAnimation';
import { Github, Linkedin, Mail, ArrowDown, Instagram } from 'lucide-react';

export const HeroSection = () => {
  const roles = [
    'Computer Science Engineer',
    'AI Explorer',
    'Machine Learning Enthusiast',
    'Tech Innovator',
    'Problem Solver'
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center starry-bg">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-hero mb-6 animate-glow">
          <span className="block gradient-text animate-float">Vahini</span>
          <span className="block gradient-text text-4xl md:text-5xl lg:text-6xl mt-4">
            Muttineni
          </span>
        </h1>

        {/* Typing Animation */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 h-16 flex items-center justify-center">
          <TypingAnimation texts={roles} speed={120} delay={2500} />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Passionate about building the future through artificial intelligence and machine learning. 
          Transforming ideas into intelligent solutions.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/MuttineniVahini"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-card rounded-full hover-lift hover-target glow transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://in.linkedin.com/in/vahini-muttineni-374222326"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-card rounded-full hover-lift hover-target glow transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/vahini_.06/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass-card rounded-full hover-lift hover-target glow transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="mailto:muttinenivahini@gmail.com"
            className="p-4 glass-card rounded-full hover-lift hover-target glow transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover-target animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};