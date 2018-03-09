import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, message, Tooltip } from 'antd';
import { signUp } from './RegistrationActions';
import './RegistrationForm.css';
const FormItem = Form.Item;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class RegistrationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      token: '',
      emailMessage: null,
      emailStatus: null,
      passwordMessage: null,
      passwordStatus: null,
      tokenMessage: null,
      tokenStatus: null,
      isAuthenticating: false,
      isRegistered: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signUp(values.email, values.password, values.token);
      }
    });
  }

  handleChange = (e) => {
    if (e.target.id === 'email') {
      this.setState({email: e.target.value})
      if (e.target.value === '') {
        this.setState({emailStatus: null})
      }
    } else if (e.target.id === 'password') {
      this.setState({password: e.target.value})
      if (e.target.value === '') {
        this.setState({passwordStatus: null})
      }
    } else if (e.target.id === 'token') {
      this.setState({token: e.target.value})
      if (e.target.value === '') {
        this.setState({tokenStatus: null})
      }
    }
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords do not match');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      isRegistered:     nextProps.isRegistered,
      isAuthenticating: nextProps.isAuthenticating,
      emailMessage:     nextProps.emailMessage,
      emailStatus:      nextProps.emailStatus,
      passwordMessage:  nextProps.passwordMessage,
      passwordStatus:   nextProps.passwordStatus,
      tokenStatus:      nextProps.tokenStatus,
      tokenMessage:     nextProps.tokenMessage,
    })
    if (nextProps.isRegistered) {
      this.props.history.push('/dashboard')
      message.success('Successfully logged in')
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="center">
        <Form onSubmit={this.handleSubmit} className="registration-form">
          <FormItem
            hasFeedback
            validateStatus={this.state.emailStatus}
            help={this.state.emailMessage}
          >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!', type: 'email'}],
            })(
              <Input onChange={this.handleChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
          </FormItem>
          <FormItem
            hasFeedback
            validateStatus={this.state.passwordStatus}
            help={this.state.passwordMessage}
            onChange={this.handleChange}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, min: 6 },
                      { validator: this.validateToNextPassword}],
            })(
              <Input onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem
            hasFeedback
            validateStatus={this.state.passwordStatus}
            help={this.state.passwordMessage}
            onChange={this.handleChange}
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
            )}
          </FormItem>
          <FormItem
            hasFeedback
            validateStatus={this.state.tokenStatus}
            help={this.state.tokenMessage}
            onChange={this.handleChange}
          >
            {getFieldDecorator('token', {
              rules: [{ required: true }],
            })(
              <span>
                <Tooltip title="Don't have a registration token? Send us an email and let us verify your restaurant!">
                  <Icon style={{position: 'absolute', left: '-22px', top: '2px'}} type="question-circle-o" />
                </Tooltip>
                <Input onChange={this.handleChange} prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} type="string" placeholder="Token" />
              </span>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('agreement', {
             valuePropName: 'checked',
              rules: [{
                required: true, message: 'Must agree to Terms and Conditions!'
              }]
            })(
            <Checkbox>I have read the <a href="">Terms and Conditions</a></Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="registration-form-button">
              Sign Up
            </Button>
            Or <a onClick={() => this.props.history.push('/login')} >Log in</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRegistered:     state.registration.isRegistered,
    isAuthenticating: state.registration.isAuthenticating,
    emailStatus:      state.registration.emailStatus,
    emailMessage:     state.registration.emailMessage,
    passwordStatus:   state.registration.passwordStatus,
    passwordMessage:  state.registration.passwordMessage,
    tokenStatus:      state.registration.tokenStatus,
    tokenMessage:     state.registration.tokenMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: bindActionCreators(signUp, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Form.create()(RegistrationForm)));
