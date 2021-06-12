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

const Item = ({value, isDone, classes, onClickDone, id}) => (
    <ListItem fullWidth>
        <Checkbox
            checked={isDone}
            tabIndex={-1}
            onClick={() => onClickDone(id)}
        /> 
            <ListItemText primary={value} classes={{
                root: isDone && classes.done 
            }} />
        <ListItemSecondaryAction> 
            <IconButton aria-label="Comments">
            <DeleteForeverRoundedIcon />  
            </IconButton>            
        </ListItemSecondaryAction>
    </ListItem>
);

export default withStyles(styles)(Item); 