import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Notification = ({ message }) => {
  return <h3 className={style.notification}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
