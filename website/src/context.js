import React, { Component } from 'react'
import axios from "axios"

const UniversityContext=React.createContext();

export class UniversityProvider extends Component {
    state ={
      universities:[],
      users:[]
    }
  componentDidMount=async() =>{ 
    const response = await axios.get("http://localhost:3001/universities")
    this.setState({
      universities:response.data
    })
   }
   
    render() {
    return(
        <UniversityContext.Provider value={this.state}>
        {this.props.children}
      </UniversityContext.Provider>
    )
  }
}

const UniversityConsumer =UniversityContext.Consumer
export default UniversityConsumer