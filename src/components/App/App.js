import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';

const App = () => 
    const Items = [
        {
            value: 'Написать новое приложение' //0
        },
        {
            value: 'Прописать props' //1
        },
        {
            value: 'Сделать все дела' //2
        }
    ];

    return (
    <div>
        <h1>Важные дела, которые необходимо выполнить:</h1>
        <InputItem />
        <ItemList todoItem={todoItem} />
        <Footer count={6} />
    </div>); 
}
    

export default App;