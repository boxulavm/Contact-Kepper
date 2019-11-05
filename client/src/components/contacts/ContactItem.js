import React from 'react'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type} = contact;
    return (
        <div className="card text-white contact-card mb-3 shadow">
            <div className="card-header">

            <h5 className='text-primary'>
                {name}{' '}
                <small
                style={{ float: 'right' }}
                 className={
                    'badge  ' +
                    (type === 'professional' ? 'badge-warning' : 'badge-primary')
                }>
                {type}
                </small>
            </h5>

            </div>
            <div className="card-body">
                { email && ( <h6><i className="fas fa-envelope-open mr-2"></i>  { email }</h6> )}
                { phone && ( <h6><i className="fas fa-phone mr-2"></i>   { phone }</h6> )}
                <hr/>

                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-info">Delete</button>

            </div>
        </div>
    )
}

export default ContactItem
