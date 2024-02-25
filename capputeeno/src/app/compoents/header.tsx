"use client"

import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput, PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-controll";

const sairaStencil = Saira_Stencil_One({ 
  weight: ["400"],
  subsets: ["latin"] });
  interface HeaderProps {}
  const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
      padding: 20px 160px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-decoration: none;

  @media(min-width: ${props => props.theme.tableBreakpoint}){
      font-size: 24px;
  }

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
      font-size: 40px;
  }
`
  
  const Header = () => {
    return (
      <TagHeader>
        <Logo className={sairaStencil.className}>Capputeno</Logo>
        <div>
           <PrimaryInputWSearchIcon/> 
           <CartControl/>
        </div>
      </TagHeader>
    );
  };
  
  export default Header;