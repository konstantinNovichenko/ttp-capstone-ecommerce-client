import React, { Component } from "react";
import { connect } from "react-redux";


import { OrderDetailsView } from "../views";


class OrderDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderIndex: -1
        };
      }

    
async componentDidMount(){
    
    if(this.state.orderIndex === -1) {        

        for(let i = 0; i < this.props.orderHistory.length; i++)
        {           

            if(this.props.orderHistory[i].orderId === Number(this.props.match.params.id))
            {               
                this.setState({orderIndex: i});            
            }
        }
    }    
  
}

render() {

    this.componentDidMount();
    return (
        
        <div>
            <div className={this.props.view?"greenView":"display-or-form"}><h1>Order Details</h1></div>
            {this.props.user.id?

            <div>
            
                {(this.state.orderIndex === -1 )? "Please wait for details to load" :

                <OrderDetailsView
                orderHistory={this.props.orderHistory}       
                orderIndex = {this.state.orderIndex}
                view={this.props.view}      
                />        
            }
            </div>
            : <div className={this.props.view?"greenView":"display-or-form"}>Please Log In to view your order details</div>}
           
            

        </div>
      
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    orderHistory: state.orderHistory,   
    user: state.user,
    view: state.view    
  };
};



export default connect(mapState)(OrderDetailsContainer);