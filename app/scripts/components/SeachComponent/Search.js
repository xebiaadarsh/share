import React from "react";

import Item from '../Item';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      searchText: ""
    };
  }

 
  componentWillReceiveProps() {
    if(this.props.value.length !==0){
      this.setState({
      searchResult: this.props.value
    })}
  }

  handleOnChange(evt) {
    console.log("e.target.value",evt.target.value)
    this.setState({searchText : evt.target.value});
    this.props.getSearchData(this.state.searchText);
  }

  render() {
    console.log('this.props.value.data',this.state.searchResult);
    return (
      <div className="content">
        <div className="container">
          <div className="main-title">Search App!!</div>
          <section>
            <form>
              <div className="inputDiv">
              <input
                type="text"
                onChange={(evt)=>this.handleOnChange(evt)}
                className="inputBox"
                placeholder="Enter to search..."
              />
              </div>
            </form>
          </section>
          <section className="item">
           {this.state.searchResult ? <Item  item={this.state.searchResult}/> : <div>No data!!</div>}
          </section>
        </div>
      </div>
    );
  }
}

export default Search;
