import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

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
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Krystian Kowal.
        </BigTitle>
        <Subtitle>I'm web developer and Arch Linux maniac.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Resume"
            link="https://github.com/Kyczan/resume"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Here you find my resume.
          </ProjectCard>
          <ProjectCard
            title="Arch rice"
            link="https://github.com/Kyczan/.cfg"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This project is my Arch Linux configuration files.
          </ProjectCard>
          <ProjectCard
            title="Lectures Scheduler"
            link="https://github.com/Kyczan/lectures-scheduler"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Fullstack JS app to schedule events.
          </ProjectCard>
          <ProjectCard
            title="st terminal"
            link="https://github.com/Kyczan/st"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            My fork of st terminal emulator app.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Krystian Kowal" />
          <AboutSub>I like to create web applications especially with new technologies.</AboutSub>
        </AboutHero>
        <AboutDesc>
          I am an expert in frontend, but I also have strong knowledge in backend. My strengths are analytical thinking
          and problem solving. In addition I have the ability to teach and to transfer knowledge. In spare time I love
          ricing my Arch with i3wm.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:krystian@kowal.pro">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/Kyczan">Github</a>
            {', '}
            <a href="https://www.linkedin.com/in/krisu-kowal/">LinkedIn</a>
            {', '}
            <a href="https://www.instagram.com/krisu.kowal/">Instagram</a> &{' '}
            <a href="https://www.facebook.com/krisu.kowal/">Facebook</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
