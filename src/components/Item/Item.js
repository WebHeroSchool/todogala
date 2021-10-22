import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { withStyles } from '@material-ui/core/styles'

const styles = {
    done: {
        textDecoration: 'line-through'
    }
};

const Item = ({value, isDone, classes, onClickDone, id, onClickDelete}) => (
    <ListItem fullwidth="true">
        <Checkbox
            checked={isDone}
            tabIndex={-1}
            onClick={() => onClickDone(id)}
        /> 
            <ListItemText primary={value} classes={{
                root: isDone && classes.done 
            }} />
        <ListItemSecondaryAction> 
            <IconButton aria-label="Comments" onClick={() => onClickDelete(id)}>
            <DeleteForeverRoundedIcon  />  
            </IconButton>            
        </ListItemSecondaryAction>
    </ListItem>
);

Item.defaultProps = {
    value: "Задача без имени"
}

export default withStyles(styles)(Item); 