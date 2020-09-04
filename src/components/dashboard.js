import ReactDOM, { render } from 'react-dom';
import axios from 'axios';
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Modal from './Modal';

export class dashboard extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            arr:[],
        }
   this.modalRef=React.createRef()
    }
    
   

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
                <div class="container p-3">
                    <div class="row">
                            <div class="col-md-6 d-flex justify-content-center">Item</div>
                            <div class="col-md-6 d-flex-justify-content-center">Price</div>
                    </div>
                    <hr></hr>
                    {this.state.arr.map(item =>
                         <div key={item._id}>
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center">{item.itemname}</div>
                                <div class="col-md-6 d-flex-justify-content-center">{item.price}</div>
                            </div>
                        </div>


                    )}
                    <div>
               
                        <button onClick={()=>this.modalRef.current.showModal()} type="button" className="btn btn-dark">
                              Launch demo modal
                        </button></div>

                    <Modal ref={this.modalRef}/>
                        
                </div>

            )
        }
}
export default dashboard