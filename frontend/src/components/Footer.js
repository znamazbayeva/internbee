import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> InternBee | </span>
      </h5>
      <div>A platform for Internship Registry and Match-Making </div>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #663399;
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: white;
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  div {
    color: white;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
