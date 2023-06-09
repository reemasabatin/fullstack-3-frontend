import { Grid, Button, Chip, Stack } from "@mui/material";

import { useRouter } from "next/router";

import PageDescription from "@/components/PageDescription";

export default function AboutPage({ skills }) {
  const router = useRouter();
  return (
    <section>
      <PageDescription
        title="About Me"
        description="This section highlights my training, skills, and experience"
      />

      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Hi, I am Reema!</h2>
          <p>
            I am a Full Stack Engineer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            My journey in web development began with a curiosity to understand
            the intricacies of building digital solutions. I have immersed
            myself in various technologies and frameworks, including front-end
            and back-end development, to become a well-rounded full stack
            engineer. With a hunger for knowledge and a determination to
            succeed, I am committed to delivering high-quality work and staying
            up-to-date with the latest industry trends. I am excited to take on
            new challenges and collaborate with experienced professionals to
            contribute to innovative projects. Feel free to Connect or Follow me
            on my Linkedin where I post useful content related to Web
            Development and Programming.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </Grid>
        <Grid item md={6}>
          <h2>My Skills</h2>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  let skills = [];

  try {
    const response = await fetch(
      "https://reemaportfolio-default-rtdb.asia-southeast1.firebasedatabase.app/skills.json"
    );
    const data = await response.json();
    skills = data.split(",");
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      skills,
    },
    revalidate: 30,
  };
}
