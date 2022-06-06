import styled, { css } from "styled-components/native";
import { RFPercentage as RFP, RFValue as RFV } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

import { TypeProps } from "../../interfaces/IHighlightCard";

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.secondary : theme.colors.shape};

  width: ${RFV(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFV(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFV(14)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFV(40)}px;

  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFV(32)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.shape : theme.colors.text_dark};

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFV(12)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.shape : theme.colors.text};
`;