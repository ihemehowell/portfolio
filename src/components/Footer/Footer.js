import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='mailto:kelvinuc111@gmail.com'>kelvinuc111@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
