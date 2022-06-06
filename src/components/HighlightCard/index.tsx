import React from "react";

import { HighlightCardProps, icon } from "../../interfaces/IHighlightCard";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

export function HighlightCard({
  type,
  title,
  amount,
  lastTransaction
}: HighlightCardProps){
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type}/>
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}