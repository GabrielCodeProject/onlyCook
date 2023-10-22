import React from "react";
import { MenuItem } from "./MenuItem";
import "../../style/style.css"
import Logo from "./LogoItem";
import { styled } from "styled-components";

const HeaderContainer = styled.div`

`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 73px;
  justify-content: space-between;  // Ensures that child items are spaced apart
  position: relative;
  width: 1152px;

  & .logo-placeholder-instance {
    align-self: stretch !important;
    height: unset !important;
    overflow: hidden !important;
    width: 137px !important;
    z-index: 1 !important;
  }

  & .menu-items {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 12px;
    position: relative;
    z-index: 0;
  }

  & .menu-item-instance {
    flex: 0 0 auto !important;
  }
`;

export const MenuHeader = (): JSX.Element => {
    return (
        <HeaderWrapper>
            <Logo
                imageUrl="path/to/your/logo/image.png"
                altText="Your Logo"
                logoText="Your Company Name"
            />
            <div className="menu-items">
                <MenuItem className="menu-item-instance" text="About" type="regular" href="about-section" />
                <MenuItem className="menu-item-instance" text="Contact" type="regular" href="contact-section" />
                <MenuItem className="menu-item-instance" text="Formulaire" type="highligthed" href="form-section" />
            </div>
        </HeaderWrapper>
    );
};