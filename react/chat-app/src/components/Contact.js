import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css'

function Contact(props) {
  return (

    <figure className="Contact">
      <img class="avatar"
        src={props.avatar}
        alt={props.name}
      />
      <div>
          <p className="name">{props.name}</p>
        <div className="status">
            <div className={props.online ? 'status-online' : 'status-offline'}></div>
              <div className="status-text">
                {props.online ? 'online' : 'offline'}
              </div>
        </div>
      </div>
    </figure>

  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact