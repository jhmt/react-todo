import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const updateItem = (e, item) => {
    const name = item.name;
    const done = e.currentTarget.checked;
    dispatch({
      type: 'UPDATE_ITEM',
      payload: {
        name, done
      },
    });
  }

  return (
    <div className="App">
      <h1>ToDo list with React and Redux</h1>
      <ul>
        {
          list.map((item, index) => (
            <div key={index}>
              <li key={index}>{item.name}
              <input key={index} type="checkbox" checked={item.done} onChange={(e) => updateItem(e, item)} />
              </li>
              
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
