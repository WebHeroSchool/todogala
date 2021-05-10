import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';

const App = () => (
    <div>
        <h1>Важные дела, которые необходимо выполнить:</h1>
        <InputItem />
        <ItemList todoItem={todoItem} />
        <Footer count={6} />
    </div>);

export default App;