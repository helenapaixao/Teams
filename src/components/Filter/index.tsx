import { TouchableOpacityProps } from "react-native";

import {Container, Title, FilterStyleProps } from './styles'

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({title, isActive = false, ...rest}: Props) {
    return (
        <Container {...rest} isActive={isActive}>
            <Title>
                {title}
            </Title>

        </Container>
    )
}
``