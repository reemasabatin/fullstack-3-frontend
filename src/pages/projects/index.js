import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function ProjectsPage({ projects }) {
  return (
    <section>
      <PageDescription
        title="Projects"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />

      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </section>
  );
}

export async function getServerSideProps() {
  let projects = [
    {
      _id: 1,
      name: "Camp Site",
      description: "Nucamp Campsite is a simple camp site website",
      imageUrl: "https://",
    },
    {
      _id: 2,
      name: "Elida",
      description: "Elida is a landing page for an apartment building",
      imageUrl: "https://",
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
