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
        count: 3
    };

    onClickDone = id => this.setState(state => ({ items: state.items.map(item =>({
        ...item,
        isDone: item.id=== id ? !item.isDone : item.isDone
    }))
})); 
 
    onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id),
    count: state.count -1
    }));
    
   	onClickAdd = value => {
		if ( value !== '') {

			this.setState(state => ({
				items: [
					...state.items,
					{
						value,
						isDone: false,
						id: state.count + 1
					}
				],
				count: state.count + 1,
				hasError: false
			}));
	} else {
		this.setState(state => ({
			hasError: true
        }))

    }   
}   
    render() {
        return (
            <div className={styles.wrap}>
                <Card>
                    <CardContent>
                        <h1 className={styles.title}>Список дел:</h1>
                        <InputItem onClickAdd={this.onClickAdd} />
                        <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={ this.onClickDelete }/>
                        <Footer/>
                    </CardContent>
                </Card>
                
            </div>);
    }
};

export default App;