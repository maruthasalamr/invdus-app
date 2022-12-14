import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Grid, Icon } from 'semantic-ui-react';
import FormComponent from './Form';
function EditContacts() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const contactsList = JSON.parse(localStorage.getItem("contacts"));
        let obj = contactsList.find(o => o.id === parseInt(id));
        console.log('obj', obj);
        setcontacts(obj);
    }, [id])

    console.log("id", id)

    const initialState = {
        id: '',
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
    const updatecontactList = () => {

        var contactsLists = JSON.parse(localStorage.getItem("contacts"));
        contactsLists.length > 0 && contactsLists.map((item)=>{
            if(item.id === parseInt(id)){
                item.name = contacts.name
                item.phone_number = contacts.phone_number
                item.type = contacts.type
                item.isWhatsapp = contacts.isWhatsapp
                item.profile_picture = contacts.profile_picture
            }
            return item;
        })

        localStorage.setItem('contacts', JSON.stringify(contactsLists));
        navigate('/');
    }

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
                        <Button type='submit' onClick={() => updatecontactList()}>update contact</Button>
                    </Grid.Column>
                </Grid>
            </div>
        </Container>
    )
}

export default EditContacts