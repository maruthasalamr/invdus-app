import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Button, Table, Container, Image, Header,Confirm } from 'semantic-ui-react';
function Home() {
    const navigate = useNavigate();
    const [isopen, setisopen] = useState(false);
    const [contactId, setcontactId] = useState();
    const handleclickfun = () => {
        navigate('/add-contacts');
    }
    const contactsList = JSON.parse(localStorage.getItem("contacts"));
    console.log('contactsList', contactsList);
    const editcontact = (id) => {
        navigate(`/edit-contacts/${id}`)
    }
    const deletebtn = () =>{
        var contactsLists = JSON.parse(localStorage.getItem("contacts") || "[]");
        let newcontactList = contactsLists.filter(x=> x.id !== parseInt(contactId));
        console.log('newcontactList',newcontactList);
        setisopen(false);
        localStorage.setItem('contacts', JSON.stringify(newcontactList));
    }

    return (
        <Container >
            <div className='outerdiv'>
                <Header textAlign='left'>List Contacts</Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Phone Number</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>isWhatsapp</Table.HeaderCell>
                            <Table.HeaderCell>Profile Picture</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            contactsList !== null && contactsList.length > 0 && contactsList.map(function (item) {
                                console.log('item', item)
                                return (
                                    <Table.Row textAlign='center'>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>{item.phone_number}</Table.Cell>
                                        <Table.Cell>{item.type}</Table.Cell>
                                        <Table.Cell>{item.isWhatsapp}</Table.Cell>
                                        <Table.Cell>
                                            <Image src={item.profile_picture} className='img_src' />
                                        </Table.Cell>
                                        <Table.Cell><Button icon='edit' onClick={() => editcontact(item.id)} /></Table.Cell>
                                        <Table.Cell><Button icon='close' onClick={() => {setisopen(true);setcontactId(item.id)}} /></Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>

                    {/* <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer> */}
                </Table>
                <Confirm
                    open={isopen}
                    onCancel={()=>setisopen(false)}
                    onConfirm={deletebtn}

                />
                <div style={{ textAlign: 'right' }}>
                    <Button positive onClick={handleclickfun}>Add Contacts</Button>
                </div>
            </div>
        </Container>
    )
}

export default Home