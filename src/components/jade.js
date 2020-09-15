import React from "react"
import styled from "styled-components"

import Button from "./button"
import ImageLogo from "./image-logo"
import ImageLogoText from "./image-logo-text"
import initGif from "../images/jade-init-2.gif"

const JadeSection = styled.section`
  background-color: var(--color-teriary);
  color: var(--color-tertiary);
  padding: 6rem;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  width: 20rem;
`

const InitImageContainer = styled.div`
  margin-bottom: 4rem;
`

const InitImage = styled.img`
  max-width: 100%;
`

const Paragraph = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4rem;
`

const CtaContainer = styled.div`
  text-align: center;
`

const Jade = () => (
  <JadeSection>
    <a href="https://jadeframework.dev" target="_blank" rel="noreferrer">
      <LogoContainer>
        <ImageLogo />
        <ImageLogoText />
      </LogoContainer>
    </a>
    <InitImageContainer>
      <a href="https://jadeframework.dev" target="_blank" rel="noreferrer">
        <InitImage src={initGif} alt="Jade Init" />
      </a>
    </InitImageContainer>
    <Paragraph>
      Jade is an open-source framework that makes it simple to deploy and
      maintain JAMstack applications on AWS cloud infrastructure.
    </Paragraph>
    <Paragraph>
      Jade abstracts away the time and complexity of provisioning services and
      writing backend code related to the underlying infrastructure so that
      developers can focus on building their applications.
    </Paragraph>
    <CtaContainer>
      <Button href="https://jadeframework.dev" target="_blank" rel="noreferrer">
        Read the case study
      </Button>
    </CtaContainer>
  </JadeSection>
)

export default Jade
