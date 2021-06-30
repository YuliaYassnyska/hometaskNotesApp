import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import { headers } from './data';
import useStyles from './styles/Main';

const App = () => {
  const classes = useStyles();
  const [addItem, setAddItem] = useState(false);

  const addListItem = () => {

  }

  return (
    <div className="App">
      <List head={headers.notesHeader} icons={true} addIcons={true} defaultL={true} total={false} />
      {addItem && <Form />}
      <div className={classes.button}>
        <button onClick={() => {
          setAddItem(true);
          addListItem();
        }}>Create note</button>
      </div>
      <List head={headers.totalHeader} icons={false} addIcons={false} total={true} />
    </div>
  );
}

export default App;
