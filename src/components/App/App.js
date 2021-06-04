import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 

import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
                value: 'Написать новое приложение',
                isDone: true
            },
            {
                value: 'Прописать props',
                isDone: false
            },
            {
                value: 'Сделать все дела',
                isDone: true
            }
        ],
    };

    onClickDone = isDone => console.log(isDone);

    render() {
        return (
            <div className={styles.wrap}>
                <Card>
                    <CardContent>
                        <h1 className={styles.title}>Список дел:</h1>
                        <InputItem />
                        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                        <Footer count={6} />
                    </CardContent>
                </Card>
            </div>);                          
    }
};

    export default App;