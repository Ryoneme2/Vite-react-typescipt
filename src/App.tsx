import { useState } from "react";
import "./App.css";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

function App() {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [listData, setListData] = useState<string[]>([
    "first TODO LIST",
    "second TODO LIST",
    "third TODO LIST",
  ]);

  const pushData = (e: any) => {
    if (e.keyCode != 13) return;
    if (input === "") {
      setIsError(true);
      return;
    }
    setListData([...listData, input]);
    setInput("");
  };

  const handleInputChange = (e: any) => {
    const text = e.target.value;
    setInput(text);
    setIsError(false);
  };

  const delElem = (index: number): any => {
    const newList = [...listData];
    newList.splice(index, 1);
    setListData(newList);
  };

  const ListElem = listData.map((item, index) => {
    return (
      <div key={index} onClick={delElem(index)}>
        <ListItem className="start-line">
          <ListIcon color="green.500" />
          {item}
        </ListItem>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="email">Context</FormLabel>
            <Input
              id="email"
              type="email"
              onKeyDown={pushData}
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>Enter the to save.</FormHelperText>
            ) : (
              <FormErrorMessage>input is required.</FormErrorMessage>
            )}
          </FormControl>
          <Box w="100%" p={4} color="white">
            <List spacing={3}>{ListElem}</List>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default App;
