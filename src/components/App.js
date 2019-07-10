import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { 
  itemsSelector,
} from '../selectors'
import {
  addItem,
  editItem,
  removeItem
} from '../actions'
import '../css/App.css';
import InvoiceItem from './InvoiceItem';

function App() {
  const dispatch = useDispatch()
  const items = useSelector(itemsSelector)

  function handleItemAdd() { dispatch(addItem()); }
  function handleItemUpdate(id, data) { dispatch(editItem(id, data)); }
  function handleItemRemove(id) { dispatch(removeItem(id)); }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2 className='App-heading'>Invoice Editor</h2>
      </header>
      {
        items.map(item => 
          <InvoiceItem 
            key={item.id} 
            item={item} 
            onChange={handleItemUpdate}
            onRemove={handleItemRemove} 
          />
        )
      }
      <button type='button' onClick={handleItemAdd}>Add +</button>
    </div>
  )
}

export default App;
