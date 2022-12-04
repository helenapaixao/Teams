import {useState} from 'react'
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export default function NewGroup() {
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("players", {
      group: groupName
    });
  }


  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para começar a compartilhar seus códigos"
        />

        <Input 
        placeholder="Nome da turma"
        onChangeText={setGroupName}
        />
        <Button title="Criar turma"
        onPress={handleNewGroup}
        style={{ marginTop: 10}}
        
        />
      </Content>
    </Container>
  );
}
