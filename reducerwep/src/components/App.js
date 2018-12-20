import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    
    static defaultProps={  
    };
    
    render() {
        return (
            <div>
                kims
            </div>
        );
    }
}

App.propTypes = {
    name:PropTypes.number
};

export default App;