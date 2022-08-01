import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import {Heading} from '@chakra-ui/react';
import { Stack, HStack, VStack, StackDivider, Flex, Spacer } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

function App() {
  const initialList = [
    {
        id: '1',
        task: 'Study',
        status: 'In Progress',
        prio: 'High',
        date: 'Jan 1',
    },
    {
       id: '2',
       task: 'Clean the Room',
       status: 'In Progress',
      prio: 'Low',
       date: 'Jan 3',
   },
];


  const [toDoList, setList] = useState(initialList)

  function removeItem(id){
    const newItem = toDoList.filter(item => {
      return item.id !== id
    })
    setList(newItem);
  }

  function addItem(item){
    setList([...toDoList, item]);
  }

  function editItem(taskID){
    console.log(taskID)
      const editedTaskList = toDoList.map((task) => {
        if(taskID === task.id){
          return(
            {...task,
            task: "NEW TASK"}
          );
        }
        return task;
      });
      setList(editedTaskList)
  
  }

  useEffect(()=>{
    console.log(toDoList);
  }, [toDoList])
  return (
    <div className="App">
      <VStack>
        <Heading>To-Do App</Heading>
        <Spacer />
        <Spacer />
        <Spacer />
      </VStack>
      <VStack>
      <AddItem addItem={addItem} />
      <Spacer></Spacer>
      </VStack>
      <VStack>
      <ItemList toDoList={toDoList} removeItem={removeItem} editItem={editItem}/>
      </VStack>
    </div>
  );
}

export default App;
