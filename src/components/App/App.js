import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
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

    onClickDone = isDone => console.log(isDone)

    render() {
        document.body.style.margin = '0';
        return (
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <h1 className={styles.title}>Список дел:</h1>
                    <InputItem />
                    <ItemList items={this.state.items} />
                    <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                    <Footer taskCount={6} />
                </div>
            </div>);
    }
}

export default App;