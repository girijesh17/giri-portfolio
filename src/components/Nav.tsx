import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4 border-b">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
          About
        </Link>
        <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
          Skills
        </Link>
        <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
          Projects
        </Link>
        <Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">
          Education
        </Link>
        <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
          Experience
        </Link>
        <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
};
