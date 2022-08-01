import React, {Component, useState} from 'react';
import {Heading} from '@chakra-ui/react';
import { Stack, HStack, VStack, Radio, RadioGroup } from '@chakra-ui/react';
import { Text, Select } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup, useToast} from '@chakra-ui/react';
import { nanoid }from 'nanoid';

function AddItem({addItem}){

    const toast = useToast();
    function handleSubmit(e){
        e.preventDefault();
        if(!content || !date ){
            toast({
                title: 'Invalid Input',
                status:'error',
                duration: 2000,
                isClosable: true,
            });
            return
        }
        const item = {
            id: nanoid(),
            task: content,
            date: date,
            prio: prio,
        };
        
        addItem(item);
        setContent('');
        setDate('');
        setPrio('');
    }

    const[content, setContent] = useState('');
    const[date, setDate] = useState('');
    const[prio, setPrio] = useState('1');

    return<form onSubmit={handleSubmit}>
        <HStack>
                <Text fontSize='2xl' align='left'>Task</Text>
                <Input placeholder = 'Task Name' value={content} onChange={(e) => setContent(e.target.value)} />
                <Text fontSize='2xl' w='60%'>Due Date</Text>
                <Input value={date} onChange={(e) => setDate(e.target.value)}></Input>
                <Button w= '30%' type = 'submit'>Add Item</Button>
        </HStack>
        <HStack>
            <Text fontSize ='3x1'>Priority:</Text>
                <RadioGroup value={prio} onChange={setPrio}>
                <Stack direction='row'>
                    <Radio value='High'>High</Radio>
                    <Radio value='Normal'>Normal</Radio>
                    <Radio value='Low'>Low</Radio>
                </Stack>
                </RadioGroup>
        </HStack>
    </form>
}

export default AddItem;