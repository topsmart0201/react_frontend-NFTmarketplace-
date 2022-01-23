import React, { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";
import Button from "../components/button/button";
import Search from "../components/search/search";
import Content from "./content";
import Logo from "../asserts/image/green.png";
import {
  HeaderContainer,
  Mark,
  LinkGroup,
  LinkItem,
  LinkContainer,
  HeaderButton,
} from "./header.styled";
const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const handleScreenChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  };
  useEffect(() => {
    let window_width = window.matchMedia("(min-width:1315px)");
    window_width.addListener(handleScreenChange);
    handleScreenChange(window_width);
    return () => {
      window_width.removeListener(handleScreenChange);
    };
  }, []);
  return (
    <Content>
      <HeaderContainer>
        <Mark><span>Metaslate</span> <img src={Logo} width="50px" height="50px" alt="logo"/></Mark>

        {showBar && (
          <LinkContainer>
            <RiCloseCircleLine
              className="close_icon"
              onClick={() => setShowBar(false)}
            />
            <LinkGroup>
              <LinkItem>Explore</LinkItem>
              <LinkItem>Collections</LinkItem>
              <LinkItem>Profile</LinkItem>
            </LinkGroup>
          </LinkContainer>
        )}
        <Search />
        {!showBar && (
          <TiThMenuOutline
            className="menu_icon"
            onClick={() => setShowBar(true)}
          />
        )}
        {showBar && (
          <HeaderButton>
            <Button
              width={230}
              height={40}
              fsize={20}
              content="Connect Wallet"
            />
          </HeaderButton>
        )}
      </HeaderContainer>
    </Content>
  );
};

export default Header;
