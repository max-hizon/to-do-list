import React, {Component, useState} from 'react';
import {Heading} from '@chakra-ui/react';
import { Stack, HStack, VStack, StackDivider, Spacer, Editable, EditableInput, EditablePreview, Select } from '@chakra-ui/react';
import { Text, } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function ItemList ({toDoList, removeItem, editItem}){

    return <VStack divider={<StackDivider />} borderColor="gray">
            {toDoList.map((item, index) => (
                <HStack key={item.id}>
                    <VStack>
                    <Heading size = 'x1'>Task</Heading>
                    <Editable>
                        <EditablePreview />
                        {item.task}
                    </Editable>
                    </VStack>
                    <Spacer></Spacer>
                    <VStack>
                    <Heading size = 'x1'>Status</Heading>
                    <Select default = 'Pending'>
                    <option value = 'Pending'>Pending</option>
                    <option value = 'In Progress'>In Progress</option>
                    <option value = 'Finished'>Finished</option>
                </Select>
                    </VStack>
                    <Spacer></Spacer>
                    <VStack>
                    <Heading size = 'x1'>Priority</Heading>
                    <Text>{item.prio}</Text>
                    </VStack>
                    <Spacer></Spacer>
                    <VStack>
                    <Heading size = 'x1'>Due Date</Heading>
                    <Text>{item.date}</Text>
                    </VStack>
                    <Spacer></Spacer>
                    <Button onClick={() =>editItem(item.id)}>Edit</Button>
                    <Spacer></Spacer>
                    <Button onClick={() => removeItem(item.id)}>Remove</Button>
                </HStack>
            ))}
        </VStack>
}

export default ItemList;