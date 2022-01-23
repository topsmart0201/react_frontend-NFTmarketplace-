import React from "react";
import Button from "../../components/button/button";
import {
  CardContainer,
  CardContent,
  // CardImage,
  CardDetail,
  CardButtonGroup,
} from "./index.styled";
import {
  HeaderButton,
} from "../../layouts/header.styled";
const Index = (props) => {
  return (
    <CardContainer>
      {/* <CardImage src={props.Back_URL} /> */}
      <CardContent>
        {/* <CardDetail>
          <img src={props.Avatar_URL} width={30} height={30} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <b>Awesome Snailer</b>
            <span>Snailer</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <span>{props.Price}</span>
            <b>Awesome Snailer</b>
          </div>
        </CardDetail>
        <CardButtonGroup>
          <Button width={100} height={27} content="View Detail" fsize={13} />
          <Button width={100} height={27} content="Buy" fsize={13} />
        </CardButtonGroup> */} 
        {/* <b>Discover, Collect, And Sell<br></br>Extraordinary NFTs</b>   
        <p style={{'fontSize':'30px','marginTop':'6px'}}>
          <br></br>Metaslate is the largest and
          <br></br>Greatest NFT marketplace
        </p> */}
          {/* <HeaderButton>
            <Button
              width={230}
              height={60}
              fsize={30}
              content="+ Explore now"
            />
          </HeaderButton> */}
      </CardContent>
    </CardContainer>
  );
};

export default Index;
