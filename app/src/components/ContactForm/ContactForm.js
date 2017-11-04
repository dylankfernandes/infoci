import React, { Component } from 'react';
import { 
  Form, 
  Button, 
  Icon,
  Input,
  Tooltip,
  Cascader,
  Select, 
  Row, 
  Col,
} from 'antd';

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmError: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if(!err) {
        console.log('Received values', values)
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({
      confirmErrors: this.state.confirmErrors || !!value
    })
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if(value && this.state.confirmErrors) {
      form.validateFields(['confirm'], { force: true })
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit = {this.handleSubmit}>
        <Form.Item label = "First Name" colon = {false}>
          {getFieldDecorator('firstName', {
            rules: [{
              required: true, message: "Please enter this person's first name"
            }]
          })(
            <Input size = "large" className = "add-contact-input"/>
          )}
        </Form.Item>
        <Form.Item label = "Last Name" colon = {false}>
          {getFieldDecorator('lastName', {
            rules: [{
              required: true, message: "Please enter this person's last name"
            }]
          })(
            <Input size = "large" className = "add-contact-input"/>
          )}
        </Form.Item>
        <Form.Item label = "Email" colon = {false} hasFeedback>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not a valid email!'
            }]
          })(
            <Input size = "large" className = "add-contact-input" type = "email" />
          )}
        </Form.Item>
        <Form.Item>
          <Button size = "large" type = "primary" htmlType = "submit">Create Contacts</Button>
        </Form.Item>
      </Form>
    )
  }
}

const ContactForm = Form.create()(AddContactForm);

export default ContactForm;