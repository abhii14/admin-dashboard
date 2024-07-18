import { useState } from 'react';
import { Button, Card, Text } from '@nextui-org/react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const sendNotification = async () => {
    const response = await fetch('/api/send-notification', {
      method: 'POST',
    });

    if (response.ok) {
      setNotifications([...notifications, "Demo notification"]);
    } else {
      console.error('Failed to send notification');
    }
  };

  return (
    <div>
      <Button onClick={sendNotification}>Send Notification</Button>
      {notifications.map((notification, index) => (
        <Card key={index}>
          <Text>{notification}</Text>
        </Card>
      ))}
    </div>
  );
};

export default Notifications;
