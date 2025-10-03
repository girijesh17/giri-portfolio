import { Link, useNavigate, useLocation } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

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
        <button
          onClick={() => handleScrollTo("projects")}
          className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0"
        >
          Projects
        </button>
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
