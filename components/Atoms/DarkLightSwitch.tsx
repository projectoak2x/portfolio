import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Scale = 1;

const DarkLightSwitchContainer = styled.div`
  zoom: 0.12;
  -moz-transform: scale(0.12);
  display: inline-block;
  label:after {
    content: "";
    width: 180px;
    height: 180px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }

  input:checked + label {
    background: #242424;
  }
  input:checked + label:after {
    left: 490px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
  label,
  label:after {
    transition: 0.3s;
  }

  label:active:after {
    width: 260px;
  }

  label img {
    position: absolute;
    width: 120px;
    top:40px;
    z-index: 100;
  }
  label img.sun {
    left:40px;
    fill:#fff;
   transition: 0.3s;
  }
  label img.moon {
    left:340px;
    fill:#7e7e7e;
   transition: 0.3s;
  }
  input:checked + label img.sun.svg {
    fill:#7e7e7e;
  }
  input:checked + label img.moon.svg {
    fill:#fff;
  }

`;

const StyledLabel = styled.label`
  width: 500px;
  height: 200px;
  position: relative;
  display: inline-block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;

export default function DarkLightSwitch({toggleTheme}:any) {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
    toggleTheme();
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    setCheck(localTheme == "light" ? false : true)
  }, []);

  return (
    <DarkLightSwitchContainer>
      <HiddenInput checked={check} type="checkbox" id="darkmode-toggle" onChange={toggleCheck} />
      <StyledLabel htmlFor="darkmode-toggle">
        <img className="sun" src="Sun.svg" alt="moon" />
        <img className="moon" src="Moon.svg" alt="moon" />
      </StyledLabel>
    </DarkLightSwitchContainer>
  );
}
