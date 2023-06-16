import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, discription, url, pageurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a
              href={pageurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Detailed News
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
