import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let itemValue = this.props.item;
        console.log("this.props.item",this.props.item);
        return (
            <div>
                {itemValue.map(value=>{
                    return(
                        <div className="item-container" key={value._id} >
                            <div className="title"> 
                            <span>{value.name}</span>
                            </div>
                            <div className="description">
                            <span>{value.about}</span>
                            </div>
                        </div>
                    )
                })
                }

            </div>
                    
        )
    }
}

export default Item;