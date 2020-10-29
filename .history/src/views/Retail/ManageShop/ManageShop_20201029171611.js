import React, { Component } from "react";

import LinearProgress from "@material-ui/core/LinearProgress";

import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import NewStoreForm from "./NewStoreForm.js";
import ListStores from "./ListStores.js";

import "./style.css";
import api from "../../../services/api";
import { logout, getId, getName } from "../../../services/auth";


export default class ManageShop extends Component {
  state = {
    list: [],
    name: "",
    manager: "",
    phone: "",
    done: false,
    error: null,
    retail_name: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await api
      .post(`/shops`, {
        name: this.state.name,
        manager: this.state.manager,
        phone: this.state.phone,
        retail_id: getId(),
        // short_url: this.getrandom(),
      })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ done: "true" });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error });
      });

    await api
      .post(`/allshops`, { retail_id: getId() })
      .then((response) => {
        // console.log(response);
        this.setState({
          list: response.data,
        });
        console.log(this.state.list)
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: error });
      });
    await api
      .post("/qr", { retail_id: getId() })
      .then((response) => {
        if (this._isMounted) {
          console.log(response);
          this.setState({ qr: response.data, isLoading: false });
        }
      })
      .catch((error) => {
        if (error.response) {
          
          this.setState({ err: error.response.data });
        } else if (error.request) {
        
        }
      });
  };
  handleNameInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePhoneInput = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleManagerInput = (event) => {
    this.setState({
      manager: event.target.value,
    });
  };
  handleLogout = (e) => {
    e.preventDefault();
    // console.log('apeertou')
    logout();
    this.props.history.push("/");
  };
  // getrandom = () => {
  //   let text = "";
  //   const possible =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for (let i = 0; i < 5; i++)
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   return text;
  // };
  
  
  render() {
    // const { error } = this.state;
    if (this.state.isLoading) {
      return <LinearProgress />;
    } else {
      return (
        <>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div>
                <div className="shop_container_wrap">
                  <NewStoreForm
                    state={this.state}
                    submit={this.handleSubmit}
                    handleNameInput={this.handleNameInput}
                    handlePhoneInput={this.handlePhoneInput}
                    handleManagerInput={this.handleManagerInput}
                  />
                </div>

                <div className="shop_container_wrap">
                  <ListStores list={this.state.list} name={getName()} />
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </>
      );
    }
  }
}
