import React from 'react';
import ItemList from '../ItemList/ItemList';

const todoItem = 'Написать новое приложение';

const App = () => (
    <div>
        <h1>Важные дела:</h1>
        <InputItem />
        <ItemList todoItem={todoItem} />
        <Footer count={6} />
    </div>);

export default App;