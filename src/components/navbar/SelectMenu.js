import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Account from "../../features/Member/Account";

export default function SelectMenu() {
  const [item, setItem] = useState("Available plans");
  const [route, setRoute] = useState(true);

  const handleChange = (event) => {
    setItem(event.target.value);
  };
  return (
    <div>
      <div className="select-nav_items">
        <FormControl margin="dense">
          <Select onChange={handleChange} value={item} displayEmpty>
            <MenuItem  value={"Available plans"}>Available plans</MenuItem>
            <MenuItem value={"Avail"}>Account overview</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
