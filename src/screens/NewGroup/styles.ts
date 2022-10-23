import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';
export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.COLORS.GRAY_600};
padding:24px;

`

export const Content = styled.View`
flex: 1;
justify-content: center;
`;


export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_700,
    size: 56
}))`

align-self: center;
`;