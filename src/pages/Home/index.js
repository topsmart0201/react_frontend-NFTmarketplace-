import React from "react";
import Content from "../../layouts/content";
import Filter from "./Filter/filter";
import ResultContent from "./Result/result";
import { HomeContainer, HomeTitle, HomeContent } from "./index.styled";
const Home = () => {
  return (
    <Content>
      <HomeContainer>
        {/* <HomeTitle>All NFTs</HomeTitle> */}
        <HomeContent>
          {/* <Filter /> */}
          <ResultContent />
        </HomeContent>
      </HomeContainer>
    </Content>
  );
};

export default Home;
