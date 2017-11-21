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
      user: {},
      fireRedirect: false
    };
  }

  componentWillMount() {
    this.getContactInfo();
  }

  getContactInfo = () => {
    let contactId = this.props.id
    axios.get(`${BASE_URL}/contacts/${contactId}`).then(res => {
      this.setState({
        user: res.data
      })
      console.log(this.state.user);
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
      this.editContact(newContact);
    });
  }

  editContact(contact) {
    axios.request({
      method: 'put',
      url: `${BASE_URL}/contacts/${this.state.user.id}`,
      data: contact
    }).then(res => {
      this.setState({
        fireRedirect: true
      })
    }).catch(err => console.log(err));
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
              initialValue: this.state.user.firstName,
              rules: [{
                required: true, message: "Please enter this person's first name"
              }]
            })(
              <Input 
                size = "large" 
                className = "add-contact-input" />
            )}
          </Form.Item>
          <Form.Item label = "Last Name" colon = {false}>
            {getFieldDecorator('lastName', {
              initialValue: this.state.user.lastName,
              rules: [{
                required: true, message: "Please enter this person's last name"
              }]
            })(
              <Input 
                size = "large" 
                className = "add-contact-input" />
            )}
          </Form.Item>
          <Form.Item label = "Email" colon = {false} hasFeedback>
            {getFieldDecorator('email', {
              initialValue: this.state.user.email,
              rules: [{
                type: 'email', message: 'The input is not a valid email!'
              }],
              setFieldsValue: 'First name'
            })(
              <Input 
                size = "large" 
                className = "add-contact-input" 
                type = "email" />
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

const EditContactForm = Form.create({})(ContactForm);

export default EditContactForm;