// Logo.tsx
import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center; // This will vertically align the image and text
  gap: 10px; // Space between the image and the text
`;

const LogoImage = styled.img`
  height: 50px; // Or any desired size
  width: 50px;
`;

const LogoText = styled.span`
  font-size: 24px; // Or any desired size
  font-weight: bold; // Making the text bold
`;

interface LogoProps {
  imageUrl: string;
  altText: string;
  logoText: string;
}

const Logo: React.FC<LogoProps> = ({ imageUrl, altText, logoText }) => {
  return (
    <LogoWrapper>
      <LogoImage src={imageUrl} alt={altText} />
      <LogoText>{logoText}</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
