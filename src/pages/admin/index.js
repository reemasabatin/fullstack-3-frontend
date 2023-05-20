import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function AdminPage({ projects }) {
  return (
    <section>
      <PageDescription
        title="Admin"
        description="Here you can update your projects"
      />

      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </section>
  );
}
