import styled from 'styled-components/native';
import { RFPercentage as RFP, RFValue as RFV } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFP(42)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`; 

export const Photo = styled.Image`
  width: ${RFV(48)}px;
  height: ${RFV(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFV(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`; 

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFV(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`; 

//@ts-ignore
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFV(24)}px;
`;