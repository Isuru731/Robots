import React , { Component } from 'react';
import Contacts from './components/contacts';
// import { render } from '@testing-library/react';


class App extends Component {


    /*A state is simply an object that holds data pending to be rendered. 
    This is where we will store the output from the API call. */
    state = {
        contacts: []
      }

        componentDidMount() {
            fetch('http://jsonplaceholder.typicode.com/users') //will make a GET request to the endpoint
            .then(res => res.json()) //parses the output to JSON
            .then((data) => {
                this.setState({ contacts: data })
            }) //sets the value of our state to the output from the API call
            .catch(console.log) //logs any error we get to the console.
      }

    render() {
        return (
            //JSX to render goes here
            <Contacts contacts={this.state.contacts} />            
        );
    }
}
    

export default App;