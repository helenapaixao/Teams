import { Container } from "./styles";
import {Highlight} from '@components/Highlight'
import { Header } from "@components/Header";


export default function Groups() {
  return (
    <Container>
    <Header />
    <Highlight
    title="Turmas"
    subtitle="jogue com a sua turma"
    />
    </Container>
  );
}
