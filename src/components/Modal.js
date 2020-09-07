import React, { Component } from "react";
import $ from "../../node_modules/jquery/dist/jquery";
import axios from "axios";
export class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id:null,
      itemname: "",
      price: "",
      date: "",
      categories: "",
    };

    this.modalref = React.createRef();
  }

  showModal = (item) =>{ 
    if(item!=="") 
    { this.setState({ _id:item._id, itemname:item.itemname, price: item.price, date: item.date, categories: item.categories } ) } $(this.modalref.current).modal({ backdrop: "static" });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  saveHandler = (event) => {
    console.log("save");
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:8080/itemlist/create`, this.state, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        this.props.mount();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { _id,itemname, price, date, categories } = this.state;
    return (
      <div>
        <div
          ref={this.modalref}
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Item
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Item Name</label>
                    <input
                      type="text"
                      value={itemname}
                      name="itemname"
                      class="form-control"
                      placeholder="Itemname"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput2">Price</label>
                    <input
                      type="text"
                      class="form-control"
                      value={price}
                      name="price"
                      placeholder="Price"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput3">Date</label>
                    <input
                      type="text"
                      class="form-control"
                      name="date"
                      value={date}
                      placeholder="dd/mm/yyyy"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Categories</label>
                    <select
                      name="categories"
                      value={categories}
                      onChange={this.changeHandler}
                      class="form-control"
                    >
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
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  onClick={this.saveHandler}
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
