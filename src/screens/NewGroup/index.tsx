import { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export default function NewGroup() {
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma");
      }
      await groupCreate(groupName);
      navigation.navigate("players", {
        group: groupName,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não possivel criar um novo grupo");
        console.log(error);
      }
    }
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

        <Input placeholder="Nome da turma" onChangeText={setGroupName} />
        <Button
          title="Criar turma"
          onPress={handleNewGroup}
          style={{ marginTop: 10 }}
        />
      </Content>
    </Container>
  );
}
