import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export default function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', "Não foi possivel carregar as turmas")
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard onPress={() => handleOpenGroup(item)} title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
