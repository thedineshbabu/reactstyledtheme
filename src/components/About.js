import React from "react";
import styled from "styled-components";
import Avatar from "./profile.png";
import Blob from "./blob.svg";

const Wrapper = styled.div`
  text-align: justify;
  max-width: 1000px;
  min-width: 500px;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Profile = styled.div`
  align-items: center;
  justify-content: center;
  background-image: url(${Blob});
  background-repeat: no-repeat;
  background-size: fit;
  background-position: center;
  width: 225px;
  height: 225px;
`;

const Para = styled.p`
  font-size: 0.95em;
  margin: 0.5em 0;
  font-style: italic;
`;

const About = () => {
  return (
    <Wrapper>
      <Profile>
        <img src={Avatar} alt="profile" width={200} />
      </Profile>
      <Para>
        Dinesh is a full stack .NET Developer with over 11 years of experience
        working with insurance, banking, and gaming companies. He specializes in
        using .NET Core, Docker, and Kubernetes in building APIs, and in using
        React and Vue for creating UI applications.
      </Para>
      <Para>
        Dinesh is a Microsoft certified Azure Developer Associate. He has
        experience in various Azure Resources, like Azure Functions, AKS, Azure
        Service Bus, Azure Application Gateway, CosmosDB, App Services,
        Application Insights, etc. As part of his job, he interacts with various
        clients and teams to understand their requirements and build solutions
        for them. He actively participates in various agile ceremonies and has
        been a member of various agile teams. He involves himself in all phases
        of the development life cycle, and is a very good communicator. He is a
        very good team player and is always ready to learn new technologies.
        Dinesh works on CI/CD pipelines and has experience in various CI/CD
        tools like Azure DevOps, GitLab, Urban Code Deploy, etc.
      </Para>
      <Para>
        In his free time, Dinesh works on various projects, and enjoys learning
        new technologies and solving problems. His latest crush is on javascript
        frameworks: he is a fan of React and Vue, and he enjoys working with
        Node and Express. He plays cricket and racquetball, and loves to watch
        movies and TV shows.
      </Para>
    </Wrapper>
  );
};

export default About;
