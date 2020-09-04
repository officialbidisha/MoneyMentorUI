import React, { Component } from 'react'
import $ from '../../node_modules/jquery/dist/jquery'
export class Modal extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
        this.modalref=React.createRef()
    }

   showModal=()=>
   (
       $(this.modalref.current).modal({backdrop:"static"})
   )

    render() {
        return (
            <div>
                 <div ref={this.modalref} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:"none"}} >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Item Name</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Itemname" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput2">Price</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Price" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput3">Date</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="dd/mm/yyyy"  />
                                           
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Categories</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Medicines</option>
                                                <option>Groceries</option>
                                                <option>Transportation</option>
                                                <option>Housing & Rents</option>
                                                <option>Toiletaries</option>
                                                <option>Education</option>
                                                <option>MakeUp</option>
                                                <option>Clothing</option>
                                            </select>
                                        </div>
                                    </form>
                                    </div>
      <div class="modal-footer">
        <button  type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default Modal