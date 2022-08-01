import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import {
  Stack,
  HStack,
  VStack,
  StackDivider,
  Spacer,
  Editable,
  EditableInput,
  EditablePreview,
  Select,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import EditableControls from './EditableControls'

function ItemList({ toDoList, removeItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = (item) => { 
    editItem(item.id)
    setIsEditing(true)
}
    return (
    <VStack divider={<StackDivider />} borderColor="gray">
      <HStack>
        <Heading size="x1">Task</Heading>
        <Heading size="x1">Status</Heading>
        <Heading size="x1">Priority</Heading>
        <Heading size="x1">Due Date</Heading>
      </HStack>
      {toDoList.map((item, index) => (
        <HStack key={item.id}>
          <VStack>
            <Editable>
              <EditablePreview />
              {item.task}
            </Editable>
          </VStack>
          <Spacer></Spacer>
          <VStack>
            <Select default="Pending">
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Finished">Finished</option>
            </Select>
          </VStack>
          <Spacer></Spacer>
          <VStack>
            <Text>{item.prio}</Text>
          </VStack>
          <Spacer></Spacer>
          <VStack>
            <Text>{item.date}</Text>
          </VStack>
          <Spacer></Spacer>
          <EditableControls isEditing={isEditing} editHandler={editHandler} />
          <Spacer></Spacer>
          <Button onClick={() => removeItem(item.id)}>Remove</Button>
        </HStack>
      ))}
    </VStack>
  );
}

export default ItemList;
