import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para começar a compartilhar seus códigos"
        />
        <Button title="Criar turma" />
      </Content>
    </Container>
  );
}
