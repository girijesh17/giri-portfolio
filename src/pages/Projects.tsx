import { Card } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/girijesh17/repos")
      .then((res) => res.json())
      .then((data) => {
        const projectData: Project[] = data.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
        }));
        setProjects(projectData);
      });
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
              <div className="space-y-4 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground mt-2">{project.description || "No description provided."}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.language && (
                      <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        {project.language}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 pt-4 mt-auto">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
