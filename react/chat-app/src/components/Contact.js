import React from 'react';
import './Contact.css'

function Contact() {
  return (

    <figure className="Contact">
      <img class="avatar"
        src="https://randomuser.me/api/portraits/women/94.jpg"
        alt="User"
      />
      <div>
          <p class="name">Debra West</p>
        <div class="status">
          <span class="status-online" />
            <p class="status-text">
              online
            </p>
        </div>
      </div>
    </figure>

  )
}

export default Contact