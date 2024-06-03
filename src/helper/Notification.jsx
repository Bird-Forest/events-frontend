import React, { useEffect } from 'react';
import { WrapNotif } from './Helper.styled';
import { FaExclamation } from 'react-icons/fa';

export default function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <WrapNotif>
      <FaExclamation className="icon-notif green" />
      <p className="text-notif">{message}</p>
    </WrapNotif>
  );
}
