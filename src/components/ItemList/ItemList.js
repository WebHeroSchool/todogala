import React from "react";
import Item from "../Item/Item";
import List from '@material-ui/core/List';

const ItemList = ({value, items, onClickDone, onClickDelete}) => (<List>
	{items.map(item => 
	<React.Fragment key={item.value}>
			<Item 
				value={item.value} 
				isDone={item.isDone} 
				id={item.id}
				onClickDone={onClickDone} 
				onClickDelete={onClickDelete}
				/>
	</React.Fragment>)}
</List>);

// ItemList.defaultProps = {
// 	items: [
// 		{
// 		value: 'не найдено',
		
// 	}
// ]
// };

export default ItemList; 