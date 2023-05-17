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
      name: "Tapper",
      description:
        "Tapper is a freelancing site where you can post or find jobs",
      imageUrl:
        "https://img.freepik.com/free-psd/business-template-design_23-2150316189.jpg?w=2000&t=st=1684326981~exp=1684327581~hmac=f58fb7ad26a5cb7851bc6be2639cbcade45002de83057f74be7d005c36287792",
    },
    {
      _id: 2,
      name: "Elida",
      description: "Elida is a landing page for an apartment building",
      imageUrl:
        "https://img.freepik.com/free-vector/monochrome-violet-3d-concepts-landing-page_52683-32654.jpg?w=1800&t=st=1684326719~exp=1684327319~hmac=985397558ef71028c2f79bac0057061851a44dd166358b5969256e8a3c0c298f",
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
