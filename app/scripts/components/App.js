import React from 'react';

import Search from './SeachComponent/container'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
           <Search/> 
        </div>
    )}
}

export default App;