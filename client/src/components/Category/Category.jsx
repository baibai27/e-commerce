import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/10084285/pexels-photo-10084285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/product/1`} className="link">
              SALE
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/896293/pexels-photo-896293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/product/1`} className="link">
              WOMEN
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/product/1`} className="link">
              NEW ARRIVAL
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to={`/product/2`} className="link">
                  MEN
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to={`/product/1`} className="link">
                  ACCESSORIES
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to={`/product/1`} className="link">
              SHOES
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
