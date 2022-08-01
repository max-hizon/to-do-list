import React from 'react'
import { ButtonGroup, IconButton, Flex,  Button } from '@chakra-ui/react'

const EditableControls = ({isEditing, editHandler}) => {
    // const {
    //     isEditing,
    //     getSubmitButtonProps,
    //     getCancelButtonProps,
    //     getEditButtonProps,
    //   } = useEditableControls()
      console.log(isEditing);
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
          <Button>Check</Button> 
          <Button>Close</Button>
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center'>
          <Button onClick={editHandler}>Edit</Button>
        </Flex>
      )
  
}

export default EditableControls;