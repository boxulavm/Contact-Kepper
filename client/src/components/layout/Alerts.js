import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {

    const alertContext = useContext(AlertContext)

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <div className='container'>
            <div className="row">
            <div className="col-lg-6 mx-auto">
            <div key={alert.id} className={`alert alert-${alert.type} mt-5 `} >
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
            </div>
            </div>
            </div>
        ))
    )
}

export default Alerts
