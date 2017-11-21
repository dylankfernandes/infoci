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
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import BASE_URL from '../../config';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmError: false,
      submitted: false,
      prefillUser: {}
    };
  }

  addContact = (contact) => {
    axios.request({
      method: 'post',
      url: `${BASE_URL}/contacts`,
      data: contact
    }).then(res => {
      this.setState({
        fireRedirect: true,
      })
    }).catch(err => console.log(err))
  }

  checkNull(property) {
    return property ? property.toString() : "dylan"
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const newContact = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: this.checkNull(values.email),
        phone: this.checkNull(values.phone),
        website: this.checkNull(values.website),
        twitterHandle: this.checkNull(values.twitterHandle),
        instagramHandle: this.checkNull(values.instagramHandle),
        snapchatHandle: this.checkNull(values.snapchatHandle),
        facebookHandle: this.checkNull(values.facebookHandle),
        location: this.checkNull(values.location),
        mediumHandle: this.checkNull(values.mediumHandle),
        relation: this.checkNull(values.relation)
      }
      this.addContact(newContact);
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
      <div>
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
        {this.state.fireRedirect && (
          <Redirect to={'/'}/>
        )}
      </div>
    )
  }
}

const AddContactForm = Form.create({})(ContactForm);

export default AddContactForm;