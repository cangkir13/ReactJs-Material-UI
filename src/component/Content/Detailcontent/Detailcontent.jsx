import axios from 'axios';
import React, { Component } from 'react';
import Frame from '../Frame';
import {Container} from '@material-ui/core'

class Detailcontent extends Component {
    state = {
        postdetail:{},
        disable:true
    }

    getDetail = () => {
        let iddetail = this.props.match.params.id
        axios.get(`https://my-json-server.typicode.com/madulinux/picknik-json/destinations/${iddetail}`)
        .then((result) => {
            this.setState({
                postdetail:result.data
            })
        })
    }

    handleUserId = () => {
        let id = this.props.match.params.id
        console.log(this.props)
        console.log(id)
        // this.props.history.replace(`users/${id}`)
        this.props.history.push(`/users/${id}`)
    }

    componentDidMount() {
        this.getDetail()
    }

    render() {
        // console.log(this.props)
        // console.log(this.state.postdetail)
        return (
            <Container maxWidth="sm">

                <Frame data={this.state.postdetail} userDetail={this.handleUserId} statusdis={this.state.disable} />
            </Container>
        );
    }
}

export default Detailcontent;
