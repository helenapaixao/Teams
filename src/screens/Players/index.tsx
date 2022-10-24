import React, { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Jogadores" subtitle="Total 12" />
      <Form>
        <Input placeholder="Nome da pessa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal={true}
        />
        <NumberOfPlayers>
          {players.length} {players.length === 1 ? "jogador" : "jogadores"}
        </NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}

        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum jogador encontrado" />
          
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && {flex: 1, justifyContent: 'center'}
        ]}
      />
    </Container>
  );
}
