import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage as RFP, RFValue as RFV } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFV(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`;

export const Amount = styled.Text`
  font-size: ${RFV(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.Text`
  flex-direction: row;
  align-items: center;
`;

//@ts-ignore
export const Icon = styled(Feather)`
  font-size: ${RFV(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  font-size: ${RFV(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 17px;
`;

export const Date = styled.Text``;