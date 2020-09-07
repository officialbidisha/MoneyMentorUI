import ReactDOM, { render } from "react-dom";
import axios from "axios";
import React, { Component } from "react";
import Modal from "./Modal";

export class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
    };
    this.modalRef = React.createRef();
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/itemlist/all`).then((res) => {
      const persons = res.data;
      console.log(persons);
      this.setState({ arr: [...persons] });
    });
  };
  deleteRow(id, e) {
    axios.delete(`http://localhost:8080/itemlist/delete/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      const arr = this.state.arr.filter((item) => item._id !== id);
      //arr.map(item=>console.log(item));
      this.setState({ arr: arr });
    });
  }

  render() {
    return (
      <div class="container p-3">
        <div class="row">
          <div class="col-6 d-flex justify-content-center">Item</div>
          <div class="col-6 d-flex-justify-content-center">Price</div>
        </div>
        <hr></hr>
        {this.state.arr.map((item) => (
          <div key={item._id}>
            <div class="row">
              <div class="mb-1 col-6 d-flex justify-content-center">
                {item.itemname}
              </div>

              <div class="mb-1 col-4 d-flex-justify-content-center">
                {item.price}
              </div>

              <div class="col-2 d-flex-justify-content-center">
                <button
                  class="btn btn-light"
                  onClick={(e) => this.deleteRow(item._id, e)}
                >
                  Delete
                </button>
                <button
                  class="btn btn-light"
                  onClick={(e) => this.modalRef.current.showModal(item)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
        <div>
          <div class="p-2"></div>
          <button
            onClick={() => this.modalRef.current.showModal("")}
            type="button"
            className="btn btn-dark"
          >
            Add
          </button>
        </div>

        <Modal ref={this.modalRef} mount={this.componentDidMount} />
      </div>
    );
  }
}
export default dashboard;
