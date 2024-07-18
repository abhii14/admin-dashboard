
import { useState } from 'react';
import { Button, Table, Input, Modal } from '@nextui-org/react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleAddTask = () => {
    setIsModalOpen(true);
    setCurrentTask({});
  };

  const handleEditTask = (task) => {
    setIsModalOpen(true);
    setCurrentTask(task);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleSaveTask = () => {
    if (currentTask.id) {
      setTasks(tasks.map(task => (task.id === currentTask.id ? currentTask : task)));
    } else {
      setTasks([...tasks, { ...currentTask, id: tasks.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  const [filter, setFilter] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (

    <div>
      <Button onClick={handleAddTask}>Add Task</Button>
      <Table>
        <Table.Header>
          <Table.Column>Title</Table.Column>
          <Table.Column>Description</Table.Column>
          <Table.Column>Actions</Table.Column>
        </Table.Header>
        <Table.Body>
          {tasks.map(task => (
            <Table.Row key={task.id}>
              <Table.Cell>{task.title}</Table.Cell>
              <Table.Cell>{task.description}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleEditTask(task)}>Edit</Button>
                <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>
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
            labelPlaceholder="Filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          <Input
            clearable
            underlined
            labelPlaceholder="Title"
            value={currentTask.title || ''}
            onChange={e => setCurrentTask({ ...currentTask, title: e.target.value })}
          />
          <Input
            clearable
            underlined
            labelPlaceholder="Description"
            value={currentTask.description || ''}
            onChange={e => setCurrentTask({ ...currentTask, description: e.target.value })}
          />
        </Modal.Header>
        <Modal.Footer>
          <Button auto flat onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button auto onClick={handleSaveTask}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskManagement;
