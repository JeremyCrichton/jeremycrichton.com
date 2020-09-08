import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jade from "../components/jade"

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

const Icons = styled.div`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1.4rem;
`

const Title = styled.h2`
  color: var(--color-secondary);
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 2rem;
`

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
`

const Colored = styled.span`
  color: var(--color-secondary);
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About>
      <Container>
        <Name>
          <Colored>Jeremy Crichton</Colored>
        </Name>
        <Icons>
          <a href={"/resume.pdf"} target="_blank" rel="noreferrer">
            <Icon icon={faFile} />
          </a>

          <a
            href="https://github.com/JeremyCrichton"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={faGithub} />
          </a>

          <Icon icon={faLinkedinIn} />
        </Icons>
        <Title>I'm a software engineer based in Vancouver, Canada</Title>
        <Paragraph>
          I have multiple years experience building web applications and most
          recently launched{" "}
          <a href="https://jadeframework.dev" target="_blank" rel="noreferrer">
            <Colored>Jade</Colored>
          </a>
          , a framework that simplifies deploying and managing JAMstack
          applications on AWS cloud infrastructure.
        </Paragraph>
      </Container>
    </About>
    <Jade />
  </Layout>
)

export default IndexPage
