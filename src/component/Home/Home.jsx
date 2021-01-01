import React, { Component, Fragment } from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {TableChart} from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link
  } from "react-router-dom";
  
import DATA from "../Datatables/Data";
import ContentTrip from '../Content/Content';
import DetailContent from '../Content/Detailcontent/Detailcontent';
import DetailUser from '../DatailUser/DetailUser'

class Home extends Component {

    state = {
        value:'dashboard',
        setValue:'dashboard'
    }

    Handleonchange = (event, newEvent) => {
        // console.log(event, newEvent)
        this.setState({
            setValue:newEvent,
            value:newEvent
        })
    }
    
    render() {
        return (
            <Fragment>
                
                <CssBaseline />
                    <Router>
                        <Container fixed>
                        <BottomNavigation 
                        value={this.state.value}
                        onChange={this.Handleonchange}
                        >
                            <BottomNavigationAction 
                                label="Dashboard" 
                                icon={<TableChart />}
                                component={Link}
                                to="/"
                                value="dashboard"
                                />
                            <BottomNavigationAction 
                                label="Users" 
                                icon={<PeopleSharpIcon />}
                                component={Link}
                                to="/users"
                                value="users"
                                />
                            <BottomNavigationAction 
                                label="TRIPS" 
                                icon={<LocationOnIcon />}
                                component={Link}
                                to="/trips"
                                value="trips"
                                />
                            
                        </BottomNavigation>
                        </Container>

                        <Route path='/' />
                        <Route path='/users' exact  component={DATA} />
                        <Route path='/users/:id' component={DetailUser} />
                        <Route path='/trips' component={ContentTrip} />
                        <Route path='/trips-detail/:id' component={DetailContent} />
                    </Router>
                        
                
                
            </Fragment>
        );
    }
}

export default Home;
