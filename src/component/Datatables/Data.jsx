import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import List from '@material-ui/core/List';
import axios from 'axios';
import Profile from './Profile';
import Loadingpage from '../LoadingPage/LoadingPage'

class Data extends Component {
  
  state = {
    data_avatar : [],
    open:false,
    setOpen:false
  }

  useStyles = () => {
    return makeStyles((theme) => ({
      root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
    }))
  } 

  classes(){
    return this.useStyles()
  }

  getdata = () => {
    axios.get("https://my-json-server.typicode.com/madulinux/picknik-json/posts")
    .then((result) => {
      let datapush = result
      // console.log(result);
      this.setState({
        data_avatar:datapush.data
      })
      // return result
    }).catch((err) => {
      return err
    });
  }

  handleClickOpen = () => {
    this.setState({
      setOpen:true
    })
  };

  handleClose = () => {
    this.setState({
      setOpen:false
    })
  };

  handleDialog = (props) => {
    // alert("handleDialog")
    console.log(props)
  }

  componentDidMount() {
    this.getdata()
  }
  

  render(){
    return (
      <Grid item lg={4} md={4} sm={6} xs="auto" >
        <List className={this.classes.root}>
          {
            (this.state.data_avatar.length > 0)?
            this.state.data_avatar.map((el, index) => {

              return <Profile key={el.id} name={el.name} 
                  avatar={el.avatar}
                  clickAction={this.handleDialog}
                />
            }):<Loadingpage/>
          }
          
        </List>
      </Grid>
    )
  }
}



export default Data