import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
`;

const NavigationContainer = styled.nav`
  display: flex;
  gap: 50px;
  margin: 20px;
`;

const NavigationItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>내친소</Title>
      <NavigationContainer>
        <Link to="/">내짝궁은?</Link>
        <Link to="/question">궁금해!</Link>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
