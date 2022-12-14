import React,{useRef} from 'react'
import {Button, Radio,Form } from 'semantic-ui-react';
function FormComponent({contacts,setcontacts, readfile,setreadfile}) {
  //  const {contacts,setcontacts, readfile,setreadfile} = props;
    const fileInputRef = useRef();
    const options = [
        { key: 'p', text: 'Personal', value: 'personal' },
        { key: 'o', text: 'Office', value: 'office' }
    ];

    const handlefileChange = (e) => {
        console.log('file-->', e.target.files[0])
        setreadfile(e.target.files[0]);
        setcontacts({ ...contacts, profile_picture: URL.createObjectURL(e.target.files[0]) })
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <label className='alignitems'>Name</label>
                    <input placeholder='Name' value={contacts.name} onChange={(e) => setcontacts({ ...contacts, name: e.target.value })} required={true} />
                </Form.Field>
                <Form.Field>
                    <label className='alignitems'>Phone Number</label>
                    <input placeholder='Phone Number' value={contacts.phone_number} onChange={(e) => setcontacts({ ...contacts, phone_number: e.target.value })} required={true} />
                </Form.Field>
                <Form.Select className='alignitems'
                    fluid
                    label='Type'
                    options={options}
                    placeholder='Gender'
                    value={contacts.type}
                    onChange={(e, { value }) => setcontacts({ ...contacts, type: value })}
                    required={true}
                />
                <Form.Group inline>
                    <label className='alignitems'>isWhatsapp</label>
                    <Radio toggle checked={contacts.isWhatsapp} onChange={(e, data) => setcontacts({ ...contacts, isWhatsapp: data.checked })} />
                </Form.Group>
                <Form.Field className='alignitems'>
                    <label >Profile Picture</label>
                    <Button
                        content="Choose File"
                        labelPosition="left"
                        icon="file"
                        onClick={() => fileInputRef.current.click()}
                    />
                    <input
                        ref={fileInputRef}
                        type="file"
                        hidden
                        onChange={handlefileChange}
                    />
                    <span>{readfile.name}</span>
                </Form.Field>


            </Form>
        </div>
    )
}

export default FormComponent