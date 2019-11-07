import React, { useContext } from 'react'
import ContactContext from '../../context/contacts/contactContext'

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext

    const { _id, name, email, phone, type} = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent()
    }

    return (
        <div className="card text-white contact-card mb-3 shadow">
            <div className="card-header">

            <h5 className='text-primary'>
                {name}{' '}
                <small
                style={{ float: 'right' }}
                 className={
                    'badge  ' +
                    (type === 'professional' ? 'badge-warning' : 'badge-info')
                }>
                {type}
                </small>
            </h5>

            </div>
            <div className="card-body">
                { email && ( <h6><i className="fas fa-envelope-open mr-2"></i>  { email }</h6> )}
                { phone && ( <h6><i className="fas fa-phone mr-2"></i>   { phone }</h6> )}
                <hr/>

                <button className="btn btn-primary mr-2" onClick={() => setCurrent(contact) } >Edit</button>
                <button className="btn btn-danger" onClick={onDelete}  >Delete</button>

            </div>
        </div>
    )
}

export default ContactItem
