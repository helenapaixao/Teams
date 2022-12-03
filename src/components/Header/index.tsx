import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
const navigation = useNavigation();


  function  handleGoBack()  {
   navigation.goBack();
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton  onPress={handleGoBack}>
          <BackIcon/>
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
