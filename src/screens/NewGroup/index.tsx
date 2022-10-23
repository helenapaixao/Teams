import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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

        <Input />
        <Button title="Criar turma"
        style={{ marginTop: 10}}
        
        />
      </Content>
    </Container>
  );
}
