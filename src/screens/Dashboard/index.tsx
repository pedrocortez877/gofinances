import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import { 
  Container, 
  Header, 
  UserWrapper,
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export function Dashboard(){
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollas-sign'
      },
      date: "13/04/2020",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollas-sign'
      },
      date: "13/04/2020",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollas-sign'
      },
      date: "13/04/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/67077847?v=4' }}/>

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Pedro Cortez</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 14 de abril"
        />
        <HighlightCard 
          type="down"
          title="Saídas"
          amount="R$ 1.400,00"
          lastTransaction="Última saída dia 21 de abril"
        />
        <HighlightCard 
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="01 à 14 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>


        <TransactionList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transactions>
    </Container>
  );
}