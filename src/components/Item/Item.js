import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    done: {
        textDecoration: 'Line-through'
    }
};

const Item = ({value, isDone, classes, onClickDone}) => (
    <ListItem fullWidth>
        <Checkbox
            checked={isDone}
            tabIndex={-1}
            onClick={() => onClickDone(isDone)}
        />
                    <ListItemText primary={value} classes= {{
                        root: isDone && classes.done
                    }} />
                    <ListItemSecondaryAction>  
                        <IconButton aria-label="Comments" >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>);

export default withStyles(styles)(Item);