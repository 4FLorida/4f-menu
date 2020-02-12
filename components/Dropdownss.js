import React, { useState } from 'react';
 
import Button from './Button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';
 
const SimpleDropdown = () => {
  const [hidden, setHidden] = useState(true);
 
  return (
    <Dropdown>
      {/* <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Dropdown Button
      </Button> */}
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Action after divider</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SimpleDropdown;