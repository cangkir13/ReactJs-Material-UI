import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import {Dialog, DialogActions, 
    DialogContentText,
    DialogTitle,
    DialogContent, Button
  } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
})); 


export default function Profile (props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const clasess = useStyles()
    // onClick={() => props.clickAction(props)}
    return (
        <Fragment>
            <List className={clasess.root} onClick={handleClickOpen} >
                <ListItem alignItems="flex-start"> 
                    <ListItemAvatar>
                        <Avatar alt={props.name} src={props.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={clasess.inline}
                                    color="textPrimary"
                                >
                                    {props.name}
                                </Typography>
                            </React.Fragment>
                        }
                        >
                    </ListItemText>
                    
                </ListItem>
            </List> 
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {props.name}
                </DialogTitle>
                <DialogContent>
                        <Avatar alt={props.name} src={props.avatar} />
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>   
        
    )
}
