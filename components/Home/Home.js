
import Sidebar from '../Sidebar/Sidebar';

const Home = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default Home;
