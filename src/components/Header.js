import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Header = () => {
  const HeaderStyle = styled.div`
    background-image: url("images/background.jpg");
    height: 880px;
    /* background-size: cover; */
    background-size: 100% 100%;
  `;

  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    /* 정렬하기 */
    padding: 10px;
  `;

  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px;
    list-style-type: none;
    /* li에 o사라짐 */
    color: white;
    font-weight: 800;
    /* 진하기 */
  `;

  const LogoStyle = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 800;
  `;

  const Section1Style = styled.div``;

  return (
    <HeaderStyle>
      <NavStyle>
        <LogoStyle>✨airBNB</LogoStyle>
        <MenuStyle>
          <li>호스트가 되어보세요</li>
          <li>도움말</li>
          <li>회원가입</li>
          <li>로그인</li>
        </MenuStyle>
      </NavStyle>
      <Section1Style>
        <Search></Search>
      </Section1Style>
    </HeaderStyle>
  );
};

export default Header;
