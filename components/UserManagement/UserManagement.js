// /components/UserManagement.js
import { useState } from 'react';
import { Button, Table, Input, Modal } from '@nextui-org/react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleAddUser = () => {
    setIsModalOpen(true);
    setCurrentUser({});
  };

  const handleEditUser = (user) => {
    setIsModalOpen(true);
    setCurrentUser(user);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSaveUser = () => {
    if (currentUser.id) {
      setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
    } else {
      setUsers([...users, { ...currentUser, id: users.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={handleAddUser}>Add User</Button>
      <Table>
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Actions</Table.Column>
        </Table.Header>
        <Table.Body>
          {users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleEditUser(user)}>Edit</Button>
                <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>
          <Input
            clearable
            underlined
            labelPlaceholder="Name"
            value={currentUser.name || ''}
            onChange={e => setCurrentUser({ ...currentUser, name: e.target.value })}
          />
          <Input
            clearable
            underlined
            labelPlaceholder="Email"
            value={currentUser.email || ''}
            onChange={e => setCurrentUser({ ...currentUser, email: e.target.value })}
          />
        </Modal.Header>
        <Modal.Footer>
          <Button auto flat onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button auto onClick={handleSaveUser}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
