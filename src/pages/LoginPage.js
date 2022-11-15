import {GlobalStyle} from '../components/styled/Global.styled'
import { Title } from '../components/Title';
import { Container } from "../components/Container";
import { Backbutton } from "../components/Backbutton";

import React from "react";

export default function LoginPage() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Container />
      <Backbutton />
    </>
  );
}
