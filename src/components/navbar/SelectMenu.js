import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
export default function SelectMenu() {
  const [item, setItem] = useState("Available plans");
  const history = useHistory();
  const handleChange = (event) => {
    setItem(event.target.value);
  };
  return (
    <div>
      <div className="select-nav_items">
        <FormControl margin="dense">
          <Select onChange={handleChange} value={item} displayEmpty>
            <MenuItem
              value={"Available plans"}
              onClick={() => history.push("/member")}
            >
              Available plans
            </MenuItem>
            <MenuItem
              value={""}
              onClick={() => history.push("/Change_password")}
            >
              Account overview
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
