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
                isDone: true,
                id: 1
            },
            {
                value: 'Прописать props',
                isDone: false,
                id: 2
            },
            {
                value: 'Сделать все дела',
                isDone: true,
                id: 3
            }
        ],
        count: 6
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });   
        this.setState({ items: newItemList });
    };

    onClickDelete = id => {
        const newItemList = this.state.items.filter(item => {
            const newItem = { ...item };
            if (item.id !== id) {
                return newItem;
            }
 
        });   
        this.setState({ items: newItemList });
    }

    render() {
        return (
            <div className={styles.wrap}>
                <Card>
                    <CardContent>
                 <div className={styles.main}>
                    <h1 className={styles.title}>Список дел:</h1>
                    <InputItem />
                    <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={ this.onClickDelete }/>
                    <Footer count={this.state.count} />
                </div>
                    </CardContent>
                </Card>
                
            </div>);
    }
};

export default App;