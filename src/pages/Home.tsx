
import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import VideoGrid from "../components/Home/VideoGrid";
import Stats from "../components/Home/Stats";
import Books from "../components/Home/Books";
import Publications from "../components/Home/Publications";
import Subscribe from "../components/Home/Subscribe";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <VideoGrid />
      <Books />
      <Publications />
      <Subscribe />
    </Layout>
  );
};

export default Home;
