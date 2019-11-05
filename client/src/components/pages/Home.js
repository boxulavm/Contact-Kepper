import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'

const Home = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <ContactForm />
            </div>
            <div className="col-md-6">
                <Contacts />
            </div>
        </div>
    )
}

export default Home
