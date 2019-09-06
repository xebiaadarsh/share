import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      searchValue:""
    };
  }

 
  componentWillReceiveProps() {
    console.log("this.props.item in update",this.props.item)
    if(this.props.item.length !==0){
      console.log("this.props.item",this.props.item)
      this.setState({
      filtered: this.props.item.data
    },()=>{console.log("value")})}
  }

  handleChange(e) {
    this.setState({searchValue : e.target.value},()=>{console.log("fdf")});
    if(this.state.searchValue.length > 1)
    this.props.getSearchValue(this.state.searchValue);
  }

  render() {
    console.log("props in render", this.props);
    return (
      <div className="content">
        <div className="container">
          <section>
            <form>
              <div className="inputWrapper">
              <input
                type="text"
                onChange={e => this.handleChange(e)}
                className="input"
                placeholder="Search..."
              />
              </div>
            </form>
          </section>
          <section className="section">
            <ul>
              {this.state.filtered ? (
                this.state.filtered.map(item => (
                  <li class="cardWrapper">
                  <div className="card-title">
                  {item.name} &nbsp;
                  </div>
                  <div className="card-price">{item.price}</div>
                  </li>
                ))
              ) : (
                <li>No data</li>
              )}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Search;
