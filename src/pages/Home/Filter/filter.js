import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import {
  FilterContainer,
  FilterTitle,
  FilterItem,
  ItemHeader,
  ItemContent,
  CheckButton,
} from "./filter.styled";
const Filter = () => {
  const [showState, setShowState] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showChains, setShowChains] = useState(true);
  const [showSaleIn, setShowSaleIn] = useState(true);
  return (
    <FilterContainer>
      <FilterTitle>Filter</FilterTitle>
      <FilterItem>
        <ItemHeader onClick={() => setShowState(!showState)}>
          <span>Status</span>
          <FaChevronDown />
        </ItemHeader>
        {showState && (
          <ItemContent>
            <div style={{ display: "flex", margin: "10px" }}>
              <CheckButton>Buy now</CheckButton>
              <CheckButton>On Auction</CheckButton>
            </div>
            <div style={{ display: "flex", margin: "10px" }}>
              <CheckButton>New</CheckButton>
              <CheckButton>Has Offers</CheckButton>
            </div>
          </ItemContent>
        )}
      </FilterItem>
      <FilterItem>
        <ItemHeader onClick={() => setShowPrice(!showPrice)}>
          <span>Price</span>
          <FaChevronDown />
        </ItemHeader>
        {showPrice && (
          <ItemContent>
            <Input width={300} height={30} fsize={18} placeholder="Eth(eth)" />
            <div style={{ display: "flex", margin: "10px" }}>
            <p>
              <Input width={100} height={30} fsize={18} placeholder="Min" />
              <span style={{ color: "white", fontSize: "20px" }}>to</span>
              <Input width={100} height={30} fsize={18} placeholder="Max" />
            </p>
            </div>
            
            <Button width={250} height={35} fsize={18} content="Apply" />
          </ItemContent>
        )}
      </FilterItem>
      <FilterItem>
        <ItemHeader onClick={() => setShowChains(!showChains)}>
          <span>Price</span>
          <FaChevronDown />
        </ItemHeader>
        {showChains && (
          <ItemContent>
            <Input width={300} height={35} fsize={18} placeholder="Eth(eth)" />
            <Input width={300} height={35} fsize={18} placeholder="Polygon" />
            <Input width={300} height={35} fsize={18} placeholder="Mslate" />
          </ItemContent>
        )}
      </FilterItem>
      <FilterItem>
        <ItemHeader onClick={() => setShowSaleIn(!showSaleIn)}>
          <span>Price</span>
          <FaChevronDown />
        </ItemHeader>
        {showSaleIn && (
          <ItemContent>
            <div style={{ display: "flex", margin: "10px" }}>
              <CheckButton>ETH</CheckButton>
              <CheckButton>WETH</CheckButton>
            </div>
          </ItemContent>
        )}
      </FilterItem>
    </FilterContainer>
  );
};

export default Filter;
