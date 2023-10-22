import React from "react";
import "../../style/App.css";
import styled from "styled-components";

interface Props {
  text: string;
  type: "highligthed" | "regular";
  className?: string;
  href: string;
}
const StyledMenuItem = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 10px;
  padding: 16px 20px;
  position: relative;

  & .text-wrapper {
    color: #00000080;
    font-family: "Inter-Bold", Helvetica;
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: fit-content;
  }

  &.highligthed {
    background-color: #000000;
  }

  &:hover {
    background-color: #5e5e5e;
  }

  &:hover .text-wrapper {
    color: #000000;
  }
`;

export const MenuItem = ({ text = "Menu Item", type, href }: Props): JSX.Element => {
  return (
    <StyledMenuItem className={`menu-item ${type}`}>
      <div className="text-wrapper">
        <a href={`#${href}`} className="text-wrapper">{text}</a>
      </div>
    </StyledMenuItem>
  );
  // return (
  //   <div className={`menu-item ${type} ${className ? className : ""}`}>
  //   </div>
  // );
};