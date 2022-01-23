import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NFTCard from "../../../components/NFTCard";
import Back0 from "../../../asserts/image/crs-1.jpg";
import Back1 from "../../../asserts/image/crs-2.jpg";
import Back2 from "../../../asserts/image/crs-3.jpg";
import Back3 from "../../../asserts/image/crs-4.jpg";
import Back4 from "../../../asserts/image/crs-5.jpg";
import Back5 from "../../../asserts/image/crs-6.jpg";
import Back6 from "../../../asserts/image/crs-7.jpg";
import Back7 from "../../../asserts/image/crs-8.jpg";
import Avatar from "../../../asserts/image/avatar.jpg";
import MainCard from "../../../components/MainCard";
import GetTouch from "../../../components/GetTouch";
import { ResultContainer, SelectButton, ResultFilter, ResultContent } from "./result.styled";
const Result = () => {
  const [sort, setSort] = React.useState('');
  const [items, setItems] = React.useState('');

  const sortChange = (event) => {
  setSort(event.target.value);
  };
  const itemsChange = (event) => {
  setItems(event.target.value);
  };
  return (
    <>
    {/* <p> */}
    {/* <SelectButton>
      <div>    
       <FormControl sx={{ m: 1, minWidth: 120 }}>
         <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
           className="select_icon"
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={sort}
           label="Sort"
           onChange={sortChange}
         >
           <MenuItem value="">
             <em>None</em>
           </MenuItem>
           <MenuItem value={1}>Name</MenuItem>
           <MenuItem value={2}>Value</MenuItem>
           <MenuItem value={3}>Date</MenuItem>
         </Select>
       </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">All Items</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={items}
          label="MenuItem"
          onChange={itemsChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>10Items</MenuItem>
          <MenuItem value={2}>20Items</MenuItem>
          <MenuItem value={3}>30Items</MenuItem>
        </Select>
      </FormControl>
      </div>
    </SelectButton> */}
    <ResultContainer>
      <MainCard>
      </MainCard>
      <GetTouch>        
      </GetTouch>
      {/* <ResultFilter></ResultFilter> */}             
      {/* <ResultContent>
        <NFTCard Back_URL={Back0} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back1} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back2} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back3} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back4} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back5} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back6} Avatar_URL={Avatar} Price={0.9} />
        <NFTCard Back_URL={Back7} Avatar_URL={Avatar} Price={0.9} />
      </ResultContent> */}
    </ResultContainer>
    {/* </p> */}
    </>
  );
};

export default Result;
