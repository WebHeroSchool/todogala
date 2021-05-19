import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import 'App.css';

const App = () => {
    const items = [
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
    <div className="wrap">
        <h1 className="wrap__title">Важные дела, которые необходимо выполнить:</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer count={6} />
    </div>); 
}
    

export default App;