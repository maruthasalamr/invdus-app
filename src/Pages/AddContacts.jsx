import React, { useState } from 'react';
import FormComponent from './Form';
import { Container, Button, Grid, Icon } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
function AddContacts() {
    const navigate = useNavigate();

    const initialState = {
        id:'',
        name: "",
        phone_number: "",
        type: "",
        isWhatsapp: false,
        profile_picture: ""
    }
    const [contacts, setcontacts] = useState(initialState);

    const [readfile, setreadfile] = useState('');

   

    const handleclickprev = () => {
        navigate('/');
    }
   
    const AddContactsList = () => {
        if (contacts.name === '') {
            alert('Please enter the name')
        }
        else if (contacts.phone_number === '') {
            alert('Please enter the phone_number')
        }
        else if (contacts.type === '') {
            alert('Please enter the type')
        }
        else {
            var contactsLists = JSON.parse(localStorage.getItem("contacts") || "[]");
            contactsLists.push({...contacts,id:new Date().getTime()});
            localStorage.setItem('contacts', JSON.stringify(contactsLists))
            navigate('/');
            setcontacts(initialState);
            setreadfile('');
        }

    }
    console.log(contacts);
    return (
        <Container >
            <div className='outerdiv'>
                <div style={{ textAlign: 'left' }}>
                    <Button icon labelPosition='left' onClick={handleclickprev}>
                        Next
                        <Icon name='left arrow' />
                    </Button>
                </div>
                <Grid columns='equal' textAlign='center'>
                    <Grid.Column width={8}>
                         <FormComponent 
                           contacts={contacts} 
                           setcontacts={setcontacts}
                           readfile={readfile}
                           setreadfile={setreadfile}
                           />
                        <Button type='submit' onClick={() => AddContactsList()}>Add Contact</Button>
                    </Grid.Column>
                </Grid>
            </div>
        </Container>

    )
}

export default AddContacts