import React, { Component } from 'react'
// import fontawesome from '@fortawesome/fontawesome'
// import faFreeSolid from '@fortawesome/fontawesome-free-solid'
import {Link} from 'react-router-dom'

export default class shoppingCart extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link">
                <i className="fa fa-home" />
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i className="fa fa-envelope-o">
                  <span className="badge badge-danger">11</span>
                </i>
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">
                <i className="fa fa-envelope-o">
                  <span className="badge badge-warning">11</span>
                </i>
                Disabled
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-envelope-o">
                  <span className="badge badge-primary">11</span>
                </i>
                Dropdown
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item">Action</Link>
                <Link className="dropdown-item">Another action</Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item">Something else here</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link">
                <i className="fa fa-cart-plus">
                  <span className="badge badge-info"></span>
                </i>
                Rỏ Hàng 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i className="fa fa-globe">
                  <span className="badge badge-success">11</span>
                </i>
                Đăng Nhập
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
            
        )
    }
}
