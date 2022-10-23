import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import {Filter} from "@components/Filter";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Jogadores" subtitle="Total 12" />
      <Form>
      <Input
      placeholder="Nome da pessa"
      autoCorrect={false}
      />
      <ButtonIcon icon="add" />
      </Form>
      <Filter
      title="Todos"
      isActive
      />
     
    </Container>
  );
}
