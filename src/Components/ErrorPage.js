import React from 'react';

const ErrorPage = (props) => {
    return(<h1>There was an error: {props.message}</h1>);
  };

export default ErrorPage;