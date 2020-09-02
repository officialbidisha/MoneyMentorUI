import ReactDOM, { render } from 'react-dom';
import axios from 'axios';
import React, { Component } from 'react'

export class dashboard extends Component {
    
    state={ arr:[] }

    componentDidMount() {
        
        axios.get(`http://localhost:8080/itemlist/all`)
          .then(res => {
            const persons = res.data;
            console.log(persons);
            this.setState({arr:[...persons]});
                    
          })
      }
    
        render() {
            return (
                <div>
                        {this.state.arr.map(item => 
                            <div key={item._id}>
                                <div class="row">
                                    <div class="col-md-5">{item.itemname}</div>
                                    <div class="col-md-5">{item.price}</div>
                                </div>
                            </div>
                        
                        
                        )}  
                       
                </div>

            )
        }
}
export default dashboard
    
