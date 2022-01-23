import React from "react";
import Submit from "../submit/submit";
import Button from "../../components/button/button";
import {
  CardContainer,
  CardContent,
  // CardImage,
  CardDetail,
  CardButtonGroup,
} from "./index.styled";
const Index = (props) => {
  return (
    <CardContainer>
      {/* <CardImage src={props.Back_URL} /> */}
      <CardContent>       
        <b>Subscribe our news letter</b>   
          <p style={{'fontSize':'20px','marginTop':'6px'}}>Signup for our newsletter to get the latest news in your inbox.</p>          
          <Submit />
          <div style={{'marginLeft':'838px','marginTop':'-112px'}}>Join Our community</div>
          {/* <HeaderButton>
             <Button                
                width={120}
                height={60}
                fsize={30}
                content="+ Explore now"
             />
          </HeaderButton>                */}
      </CardContent>
    </CardContainer>
  );
};

export default Index;
