import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import EmergentPopUp from './EmergentPopUp';

const NotificationContainerPopUp = forwardRef((props, ref) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (title, message, type, duration = 8000) => {
    const id = new Date().getTime(); 
    setNotifications((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, duration);
  };

  useImperativeHandle(ref, () => ({
    addNotification
  }));

  return (
    <div className="popup-wrapper">
      {notifications.map((notif) => (
        <EmergentPopUp
          key={notif.id}
          title={notif.title}
          message={notif.message}
          type={notif.type}
        />
      ))}
    </div>
  );
});

NotificationContainerPopUp.displayName = 'NotificationContainerPopUp';

export default NotificationContainerPopUp;
