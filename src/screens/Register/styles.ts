import styled from "styled-components/native";
import { RFPercentage as RFP, RFValue as RFV } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};

    width: 100%;
    height: ${RFV(113)}px;

    align-items: center;
    justify-content: flex-end;

    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFV(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;