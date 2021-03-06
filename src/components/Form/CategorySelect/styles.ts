import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage as RFP, RFValue as RFV } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
    ativeOpacity: 0.7
})`
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;

    padding: 18px 16px;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFV(14)}px;
`;
export const Icon = styled(Feather)`
    font-size: ${RFV(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;