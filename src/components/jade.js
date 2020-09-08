import React from "react"
import styled from "styled-components"

import Button from "./button"
import Image from "./image"
import initGif from "../images/jade-init.gif"

const JadeSection = styled.section`
  background-color: var(--color-teriary);
  color: var(--color-tertiary);
  padding: 6rem;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`

const LogoText = styled.span`
  font-size: 4rem;
  text-transform: uppercase;
  margin-left: 2rem;
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
    <LogoContainer>
      <Image />
      <LogoText>Jade</LogoText>
    </LogoContainer>
    <InitImageContainer>
      <InitImage src={initGif} alt="Jade Init" />
    </InitImageContainer>
    <Paragraph>
      I recently co-created Jade with a small remote team. Jade is an open
      source framework for deploying JAMstack applications utilizing AWS cloud
      infrastructure.
    </Paragraph>
    <CtaContainer>
      <Button href="https://jadeframework.dev" target="_blank" rel="noreferrer">
        Read the case study
      </Button>
    </CtaContainer>
  </JadeSection>
)

export default Jade
