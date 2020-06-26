import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import CustomAppBar from './components/CustomAppBar';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = ['Madrid', 'Bloomington', 'Cancun', 'Ciudad de Mexico', 'Helsinki'];

class App extends Component{

  constructor(){
    super();
    this.state = {
      city : null
    }
  }

  handleSelectionLocation = city => {
    this.setState({city})
  }

  render() {
    const {city} = this.state;

    return (
      <Grid>
        <Row>
          <CustomAppBar></CustomAppBar>
        </Row>
        <Row className='margin-top'>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended city={city} />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
