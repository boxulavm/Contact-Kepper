import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contacts/contactContext'


const ContactForm = () => {

    const contactContext = useContext(ContactContext)

    const { addContact, current, clearCurrent, updateContact } = contactContext

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });


    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        if(current ===  null) {
            addContact(contact)
        } else {
            updateContact(contact)
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit} className='form-group p-3 mb-4'>
            <h3 className="text-primary mb-3">{ current ? 'Edit Contact' : 'Add Contact'}</h3>
            <input className='form-control' type="text" placeholder="Name" name="name" value={name} onChange={onChange}  />
            <input className='form-control my-2' type="email" placeholder="Email" name="email" value={email} onChange={onChange}  />
            <input className='form-control' type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}  />
            <h5 className='mt-4'>Contact Type</h5>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="type" id="inlineRadio1" value="personal" checked={type === 'personal'}  onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Personal</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="type" id="inlineRadio2" value="professional"  checked={type === 'professional'} onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Professional</label>
                </div>
            <div>
                <input type="submit" value={ current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block my-4' />
            </div>
            { current && <div>
                <button className="btn btn-info btn-block" onClick={clearAll} >Clear</button>
            </div>}
        </form>
    )
}

export default ContactForm
