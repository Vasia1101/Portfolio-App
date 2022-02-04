import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import { RepositoryEdge } from 'generated/graphql';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Intro from 'components/modules/Intro';
import OpenSource from 'components/modules/OpenSource';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';

import dataAbout from 'data/about';
import dataSkills from 'data/skills';

const HomePage = ({ repos }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <SEO />
    <Intro />
    <Skills {...dataAbout} />
    <OpenSource data={repos} />
    <Skills {...dataSkills} />
    {/* <OpenSource data={repos} /> */}
    <Contact />
  </Layout>
);

export const getStaticProps = async () => {
  const res = await axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    data: {
      query: `
				query viewer {
					viewer {
						repositories(first: 9, orderBy: {field: STARGAZERS, direction: DESC}) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
									languages(first: 3) {
										nodes {
											id
											name
										}
									}
								}
							}
						}
					}
				}
			`,
    },
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const repos: RepositoryEdge[] = res.data.data.viewer.repositories.edges;

  return {
    props: {
      repos,
    },
    revalidate: 10,
  };
};

export default HomePage;
