import React, { Component } from 'react';
import { Container, Grid } from "@material-ui/core";
import Frame from './Frame';
import axios from 'axios';
import Loadingpage from '../LoadingPage/LoadingPage'

class Content extends Component {

    state = {
        post : []
    }

    getDatacontent = () => {
        axios.get("https://my-json-server.typicode.com/madulinux/picknik-json/destinations")
        .then((result) => {
          let datapush = result
          // console.log(result);
          this.setState({
            post:datapush.data
          })
          // return result
        }).catch((err) => {
          return err
        });

    }

    handleidTrip = (id) => {
        // console.log(id)
        this.props.history.push(`/trips-detail/${id}`)
    }

    handleUserId = (id) => {
        // console.log(id)
        this.props.history.push(`users/${id}`)
    }

    componentDidMount(){
        this.getDatacontent()
    }

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <Grid container  >
                    {
                        (this.state.post.length > 1)?
                        this.state.post.map((el, index) => {

                            return (
                                <Grid key={index} item lg={12} md={12} sm={12} xs={12}  >
                                    <Frame data={el} detailDest={this.handleidTrip} userDetail={this.handleUserId} />
                                </Grid>
                            )

                        }) :
                        <Loadingpage />
                    }
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Content;
