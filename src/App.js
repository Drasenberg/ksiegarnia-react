import './App.css';
import ListsBooks from './Containers/ListsBooks/ListsBooks';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <ListsBooks />
      </Layout>
    </div>
  );
}

export default App;
