import React from 'react';

export default function Subscribe(props) {
  return (
    <form className="subscribe" onSubmit={props.submitSubscribe}>
      <p>Sign up for our newsletter!</p>
      <input type="email" id="subscribe" name="subscribe" placeholder="email@address.com"/>
      <input type="submit" value="Subscribe" className="subscribe-btn" />
    </form>
  )
};
