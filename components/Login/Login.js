import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TextField from '../TextField';
import Button from '../Button';
import Head from 'next/head';
import Content from '../Content';

@inject('store')
@observer
class Login extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.setEmail('');
    store.setMessage('');
    store.setPassword('');
  }

  userLogin() {
    const { store } = this.props;
    store.isEmailEmpty || store.isPasswordEmpty
      ? store.setMessage('Email veya şifrenizi girin')
      : store.userLogin();
  }

  userRegister() {
    const { store } = this.props;
    store.isEmailEmpty || store.isPasswordEmpty
      ? store.setMessage('Email veya şifrenizi girin')
      : store.userRegister();
  }

  handleEmailChange(e) {
    const { store } = this.props;
    store.setEmail(e.target.value);
    store.user.email.length > 0
      ? (store.isEmailEmpty = false)
      : (store.isEmailEmpty = true);
  }

  handlePasswordChange(e) {
    const { store } = this.props;
    store.setPassword(e.target.value);
    store.user.password.length > 0
      ? (store.isPasswordEmpty = false)
      : (store.isPasswordEmpty = true);
  }
  render() {
    const { store } = this.props;
    return (
      <Content>
        <Head>
          <style global="true">{`
        .login-back {
          width:360px;
          margin:auto;
          border-radius:10px;
          min-height:350px;
          background:url('https://siparistakip.yemeksepeti.com/assets/images/login/bg-white-lock.png');
          background-color: rgba(25,13,2,.45);
          vertical-align:middle;
          margin-top:25%;
        }

        .login-content {
          padding:15px;
          text-align:center;
          display:inline-block;
          margin-top:20px;
        }

        .login-input-icon-email {
          background-size: 16px;
          background-image: url('https://image.flaticon.com/icons/svg/1077/1077114.svg');
          background-position: 10px 10px;
          background-repeat: no-repeat;
          padding-left: 40px;
        }

        .login-input-icon-password {
          background-size: 16px;
          background-image: url('https://image.flaticon.com/icons/svg/483/483408.svg');
          background-position: 10px 10px;
          background-repeat: no-repeat;
          padding-left: 40px;
        }
  }`}</style>
        </Head>

        <div className="login-back">
          <img
            src="https://siparistakip.yemeksepeti.com/assets/images/yemeksepeti/guvercin-logo.png"
            width="360px"
          ></img>
          <div className="login-content">
            <TextField
              input
              className="login-input-icon-email"
              value={store.user.email}
              onChange={this.handleEmailChange.bind(this)}
            ></TextField>
            <TextField
              input
              type="password"
              className="login-input-icon-password"
              value={store.user.password}
              onChange={this.handlePasswordChange.bind(this)}
            ></TextField>
            <Button login onClick={this.userLogin.bind(this)}>
              Giriş Yap
            </Button>
            <h3>{store.message}</h3>
          </div>
        </div>
      </Content>
    );
  }
}

export default Login;
