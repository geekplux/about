import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>
          Hello, <br /> I'm GeekPlux.
        </BigTitle>
        <Subtitle>
          Web developer, open-source contributor and lifelong learner interested
          in too many things.
        </Subtitle>
      </Hero>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Markvis"
            link="https://github.com/geekplux/markvis"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Make visualization in markdown
          </ProjectCard>
          <ProjectCard
            title="Typing"
            link="https://github.com/geekplux/hexo-theme-typing"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A pure and fresh Hexo theme
          </ProjectCard>
          <ProjectCard
            title="d3-experiment"
            link="https://github.com/geekplux/d3-experiment"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="More"
            link="https://github.com/geekplux?tab=repositories&type=source"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            More open source projects in my GitHub.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Full-time Learner, good at data visualization and web development,
            creating some funny and useful tools or tiny projects using my web
            experience.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I’m a front-end developer with more than five years working
          experience. Now I focus on the Data Visualization and already made
          several visualization projects of various big data. Some projects
          using d3.js, Three.js and WebGL are listed on my GitHub. What I'm
          interested in are developing visualization for network or graph data
          and building big data visual analysis system.
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:geekplux@gmail.com">Hi</a> or find me on other
            platforms: <a href="https://github.com/geekplux">GitHub</a> &{' '}
            <a href="https://www.twitter.com/geekplux">Twitter</a> &{' '}
            <a href="https://www.instagram.com/geekplux">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
