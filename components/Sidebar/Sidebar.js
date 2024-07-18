import { useRouter } from 'next/router';
import { Menu, MenuItem } from '@nextui-org/react';

const Sidebar = () => {
  const router = useRouter();

  return (
    <Menu>
      <MenuItem onClick={() => router.push('/user-management')}>User Management</MenuItem>
      <MenuItem onClick={() => router.push('/analytics')}>Analytics</MenuItem>
      <MenuItem onClick={() => router.push('/notifications')}>Notifications</MenuItem>
      <MenuItem onClick={() => router.push('/settings')}>Settings</MenuItem>
      <MenuItem onClick={() => router.push('/task-management')}>Task Management</MenuItem>
    </Menu>
  );
};

export default Sidebar;
