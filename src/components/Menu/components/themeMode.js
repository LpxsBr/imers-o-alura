
import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./colorModeProvider";

const StyledSwitch = styled.div`
background-color: #333333;
border: 0;
padding: 3px;
font-size: 12px;
width: 50px;
height: 25px;
display: flex;
justify-content: space-around;
border-radius: 10000px;
position: relative;
label {
  width: 50px;
}
span { display: inline-flex; width: 20px; height: 20px; align-items: center; justify-content: center; color: #fff }

label:before {
  content: "";
  background-color: #fafafa;
  border: 1px solid #333333;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition: .3s;
  cursor: pointer;
}

svg{
  fill: #fff;
  width: 15px;
}
input[type="checkbox"] { display: none; }
input[type="checkbox"]:checked + label:before { transform: translateX(100%); }
`;

export function ThemeMode() {
  const activeTheme = React.useContext(ColorModeContext);
  console.log(activeTheme);

  return (
    <StyledSwitch>
      <input type="checkbox" id="ThemeMode" onChange={() => {
        console.log("mudou");
        if (activeTheme.mode === "dark") activeTheme.setMode("light");
        if (activeTheme.mode === "light") activeTheme.setMode("dark");
      }} />
      <label htmlFor="ThemeMode" className="themeModeSwitch">
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/></svg></span>
      </label>
    </StyledSwitch>
  )
}