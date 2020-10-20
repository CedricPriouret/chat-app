import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      online: props.online,
    };
  }
    render() {
      return (
        <figure className="Contact">
          <img className="avatar"
            src={this.props.avatar}
            alt={this.props.name}
          />
          <div>
              <p className="name">{this.props.name}</p>
            <div className="status"
                  onClick={event => {
                    const newStatus = !this.state.online;
                    this.setState({ online: newStatus });
                  }}>
                <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                  <div className="status-text">
                    {this.state.online ? 'online' : 'offline'}
                  </div>
            </div>
          </div>
        </figure>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact