import React from 'react';

const NotifMessage = ({ message, setMessage }) => {
  const pressedButton = () => {
    setMessage("");
  };

  if (message !== "") {
    return (
      <div className='notifMessage'>
        <p>{message}</p>
        <input type='button' value='x' onClick={pressedButton} />
      </div>
    );
  } else {
    return null; // Return null when message is empty (or use a different fallback)
  }
};

export default NotifMessage;