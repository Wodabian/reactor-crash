import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const heroTitle: string = "I need a Hero!";
const heroSubtitle: string = "He's gotta be strong & He's gotta be fast.";

const HomePage = () => {
  return (
    <>
      <Hero title={heroTitle} subtitle={heroSubtitle} />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
