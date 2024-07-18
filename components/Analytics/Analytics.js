
import { Card, Text } from '@nextui-org/react';

const Analytics = () => {
  const metrics = {
    userCount: 100,
    activeUsers: 50,
    revenue: 1000,
  };

  return (
    <div>
      <Card>
        <Text>User Count: {metrics.userCount}</Text>
        <Text>Active Users: {metrics.activeUsers}</Text>
        <Text>Revenue: ${metrics.revenue}</Text>
      </Card>
    </div>
  );
};

export default Analytics;
