export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="text-2xl font-display font-bold gradient-text">
            Vahini Muttineni
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Computer Science Engineer passionate about AI and Machine Learning. 
            Building the future, one algorithm at a time.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://github.com/MuttineniVahini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-target"
            >
              GitHub
            </a>
            <a
              href="https://in.linkedin.com/in/vahini-muttineni-374222326"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-target"
            >
              LinkedIn
            </a>
            <a
              href="mailto:muttinenivahini@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-target"
            >
              Email
            </a>
          </div>
          <div className="pt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vahini Muttineni. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};