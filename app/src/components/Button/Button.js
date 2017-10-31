import React from 'react';
import { 
  Button,
  Icon
} from 'antd';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <Link to = "/">
    <Button size = "large" className = "back-button" type = "primary">
      <Icon type = "caret-left" />
      Back
    </Button>
  </Link>
);

const DeleteButton = () => (
  <Button size = "large" className = "delete-button" type = "danger">
    <Icon type = "delete" />
    Delete
  </Button>
);

const EditButton = (props) => (
  <Link to = {`/contacts/edit/${props.id}`}>
    <Button size = "large" className = "edit-button">
      <Icon type = "edit" />
      Edit
    </Button>
  </Link>
);

export { BackButton, DeleteButton, EditButton };