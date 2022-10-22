import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  );
}
