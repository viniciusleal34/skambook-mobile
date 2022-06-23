import React, { useState } from "react";

import { Container, FlatList, Item } from "./styles";

interface ItemProps {
  item: BookProps;
}
interface BookProps {
  name: string;
  active: boolean;
}

const GridList: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([
    {
      name: "Romance",
      active: true,
    },
    {
      name: "Drama",
      active: false,
    },
    {
      name: "Ficção",
      active: false,
    },
    {
      name: "Empreendedorismo",
      active: false,
    },
    {
      name: "Terror",
      active: false,
    },
    {
      name: "Bio",
      active: false,
    },
    {
      name: "Historia do Brasil",
      active: false,
    },
    {
      name: "Ficção",
      active: false,
    },
  ]);

  const selectItem = (element: BookProps) => {
    const dataUpdate = [...books];
    const index = books.indexOf(element);
    dataUpdate[index].active = !books[index].active;
    setBooks([...dataUpdate]);
  };

  return (
    <Container>
      <FlatList
        numColumns={2}
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: any) => (
          <Item
            secondary={true}
            select={item?.active}
            title={item?.name}
            onPress={() => selectItem(item)}
          />
        )}
      />
    </Container>
  );
};

export default GridList;
