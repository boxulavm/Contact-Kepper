import React, { useContext } from 'react'
import ContactContext from '../../context/contacts/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext;

    return (
        <>
        { contacts.reverse().map(contact => 
            <ContactItem key={contact.id} contact={contact} />
        )}
        </>
    )
}

export default Contacts
