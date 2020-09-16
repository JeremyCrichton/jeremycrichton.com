import React from "react"
import styled from "styled-components"

import Jade from "./jade"
import ContactIcons from "./contact-icons"

const About = styled.div`
  height: 100vh;
  background: linear-gradient(to right bottom, #1f2833, #0b0c10);
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 6rem;
`

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Name = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  margin-top: 6rem;
  margin-bottom: 2rem;
`

const Title = styled.h2`
  color: var(--color-secondary);
  font-size: 2.4rem;
  font-weight: 400;
  margin: 2rem 0;
`

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`

const Colored = styled.span`
  color: var(--color-secondary);
`

const Home = () => (
  <>
    <About>
      <Container>
        <Name>
          <Colored>Jeremy Crichton</Colored>
        </Name>
        <ContactIcons />
        <Title>I'm a software engineer based in Vancouver, Canada</Title>
        <Paragraph>I build fast, scalable cloud applications.</Paragraph>
        <Paragraph>
          I recently co-created{" "}
          <a href="https://jadeframework.dev" target="_blank" rel="noreferrer">
            <Colored>Jade</Colored>
          </a>
          , an open-source framework that simplifies deploying and managing
          JAMstack applications on AWS cloud infrastructure.
        </Paragraph>
      </Container>
    </About>
    <Jade />
  </>
)

export default Home
