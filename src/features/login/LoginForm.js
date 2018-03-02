import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginForm.css';
import { login } from './LoginActions';
const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      emailMessage: null,
      emailStatus: null,
      passwordMessage: null,
      passwordStatus: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.email, values.password);
      }
    });
  }

  handleChange = (e) => {
    if (e.target.id == 'email') {
      this.setState({email: e.target.value})
      if (e.target.value == '') {
        this.setState({emailStatus: null})
      }
    } else if (e.target.id == 'password') {
      this.setState({password: e.target.value})
      if (e.target.value == '') {
        this.setState({passwordStatus: null})
      }
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      emailMessage:    nextProps.emailMessage,
      emailStatus:     nextProps.emailStatus,
      passwordMessage: nextProps.passwordMessage,
      passwordStatus:  nextProps.passwordStatus,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="center">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem
            hasFeedback
            validateStatus={this.state.emailStatus}
            help={this.state.emailMessage}
          >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!', type: 'email'}],
            })(
              <Input onChange={this.handleChange} prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem
            hasFeedback
            validateStatus={this.state.passwordStatus}
            help={this.state.passwordMessage}
            onChange={this.handleChange}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, min: 6 }],
            })(
              <Input onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    emailStatus: state.LoginReducer.emailStatus,
    emailMessage: state.LoginReducer.emailMessage,
    passwordStatus: state.LoginReducer.passwordStatus,
    passwordMessage: state.LoginReducer.passwordMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(LoginForm));
