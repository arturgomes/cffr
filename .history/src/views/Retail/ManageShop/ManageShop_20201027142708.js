import React, { Component } from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import { FiFileText } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import LinearProgress from "@material-ui/core/LinearProgress";

import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
// import CustomInput from "../components/CustomInput/CustomInput.js";
import NewStoreForm from "./NewStoreForm.js";
import ListStores from "./ListStores.js";

import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";
import "./style.css";
import api from "../../../services/api";
import { logout, getId, getName } from "../../../services/auth";
// import avatar from "assets/img/faces/marc.jpg";

// import {  website, server } from "../../../variables/general.js";

// const useStyles = makeStyles(theme => ({
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "28px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// }));

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
        short_url: this.getrandom(),
      })
      // await fetch(`https://api.couponfeed.com.br/shops`,
      // {
      //   method: "POST",
      //   credentials: "include",
      //   body: {
      //     name: this.state.name,
      //     manager: this.state.manager,
      //     phone: this.state.phone,
      //     retail_id: getId(),
      //     short_url: this.getrandom()
      //   },
      //   // mode: 'no-cors',
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Credentials": true,
      //     "Access-Control-Allow-Origin": "https://www.couponfeed.com.br"
      //   }
      // }
      // )
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
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          // console.log(error.response.data);
          this.setState({ err: error.response.data });
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          // console.log(error.request);
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
  ß;
  handleLogout = (e) => {
    e.preventDefault();
    // console.log('apeertou')
    logout();
    this.props.history.push("/");
  };
  getrandom = () => {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };
  async componentDidMount() {
    this.setState({ retail_name: getName() });
    await api
      .post(`/allshops`, { retail_id: getId() })
      .then((response) => {
        // console.log(response);
        this.setState({
          list: response.data,
        });
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
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          // console.log(error.response.data);
          this.setState({ err: error.response.data });
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          // console.log(error.request);
        }
      });
    this.setState({ done: true });

    // console.log(this.state.list);
  }
  async handleShopDelete = s =>{
    await api
      .post(`/shops/d`, { retail_id: s })
      .then((response) => {
        // console.log(response);
        this.setState({
          list: response.data,
        });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: error });
      });

  }
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
                  <ListStores list={this.state.list} shopDelete={this.handleShopDelete} name={getName()} />
                </div>
              </div>

              
            </GridItem>
          </GridContainer>
        </>
      );
    }
  }
}
