import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};
class Login extends React.Component {
  render() {
    return (
      <GoogleLogin
        clientId="29071151742-qfr3tuhmb080taogopshoio5jtov73om.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />);
  }

}
export default Login;
