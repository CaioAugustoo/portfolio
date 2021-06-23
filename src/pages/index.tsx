import { GetStaticProps, GetStaticPaths } from "next";

import HomePage from "Templates/Home";

import { GET_HOME_PAGE } from "graphql/queries";
import client from "graphql/client";

import { HomePageProps } from "types/types";

const Index = ({ homepages, projects }: HomePageProps) => {
  return <HomePage homepages={homepages} projects={projects} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { homepages, projects } = await client.request(GET_HOME_PAGE);

  return {
    props: {
      homepages,
      projects,
    },
    revalidate: 600,
  };
};
