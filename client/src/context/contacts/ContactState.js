import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER} from '../types'


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jorah Mormont',
                email: 'jm@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Jon Snow',
                email: 'js@gmail.com',
                phone: '222-222-222',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Arya Stark',
                email: 'as@gmail.com',
                phone: '333-333-33',
                type: 'personal'
            }
        ]
    }

    const [state, dispach ] = useReducer(contactReducer, initialState)

    // Add contact
    const addContact = contact => {
        contact.id = uuid.v4()
        dispach({ type: ADD_CONTACT, payload: contact})
    }

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}>
            { props.children }
        </ContactContext.Provider>
    )

}

export default ContactState;