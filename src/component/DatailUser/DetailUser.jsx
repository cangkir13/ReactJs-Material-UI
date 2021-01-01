import axios from 'axios';
import React, { Component } from 'react';
import {  Container, Grid,
     Avatar, Card, CardHeader, 
     Typography,
     ButtonGroup,
     Button,
     Backdrop,
     CircularProgress
    } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import UserExplorer from "./UserExplorer";
import zIndex from '@material-ui/core/styles/zIndex';



class DetailUser extends Component {

    state = {
        usersdetail:{},
        images:[]
    }

    getAllDest = () => {
        axios.get('https://my-json-server.typicode.com/madulinux/picknik-json/destinations')
        .then((result) => {

            let data = result.data.map((el) => {
                el['img'] = el.image
                el['title'] = el.location
                el['author'] = el.vendor
                el['col'] = 3//Math.floor(Math.random() * 10) 
                return el
            })
            this.setState({
                images:data
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    getUserdatail = () => {
        let iddetail = this.props.match.params.id
        axios.get(`https://my-json-server.typicode.com/madulinux/picknik-json/posts/${iddetail}`)
        .then((result) => {
            this.setState({
                usersdetail:result.data
            })
        }).catch((err) => {
            console.log(err)            
        });
    }

    componentDidMount(){
        this.getUserdatail()
        this.getAllDest()
    }

    render() {
        // console.log(this.state.images)
        // this.modifyData()
        return (
            <div style={{margin:20}}>
                <Container maxWidth="sm">
                    <Card>
                        <Grid container >
                            <Grid item >
                                <CardHeader
                                    avatar={    
                                        <Avatar 
                                            style={{width:150, height:150}}
                                            src={this.state.usersdetail.image} />
                                    }
                                    />
                            </Grid>
                            <Grid item style={{margin:12}}>
                                <Grid item >
                                    <Typography>
                                        {this.state.usersdetail.name}
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography>
                                        {this.state.usersdetail.location}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <ButtonGroup variant="contained" color="primary"  aria-label="split button">
                                    <Button >Testing</Button>
                                    <Button ><ArrowDropDownIcon /></Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
                <Container maxWidth="sm" style={{marginTop:12}}>
                    {
                        (this.state.images.length < 1)?
                        <Backdrop open={true} style={
                            {
                                zIndex:zIndex.drawer +1,
                                color: '#fff',
                            }} >

                            <CircularProgress color="inherit" />
                        </Backdrop>
                       
                        :
                        <UserExplorer tileData={this.state.images} />
                    }
                </Container>
            </div>
        );
    }
}

export default DetailUser;
