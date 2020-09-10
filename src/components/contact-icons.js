import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"

const Icons = styled.div`
  font-size: ${props => (props.size ? props.size : "2.4rem")};
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${props => (props.margin ? props.margin : "1.4rem")};
  transition: color 0.5s;
  &:hover {
    color: var(--color-secondary);
  }
`
const ContactIcons = ({ margin, size }) => (
  <Icons size={size}>
    <a
      href={"/resume-10-09-2020-13-17-59.pdf"}
      target="_blank"
      rel="noreferrer"
    >
      <Icon margin={margin} icon={faFile} />
    </a>

    <a
      href="https://github.com/JeremyCrichton"
      target="_blank"
      rel="noreferrer"
    >
      <Icon margin={margin} icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/jeremy-crichton"
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon={faLinkedinIn} />
    </a>
  </Icons>
)

export default ContactIcons
