import { Component } from "react";
import {signUp} from '../utils/users-service';

//? src/components/SignUpForm/SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

export default class SignUpForm extends Component {
  // state is always an object with a property for each "piece" of state
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password} = this.state;
      const formData = { name, email, password}
      const user = await signUp(formData)
      this.props.setUser(user);
      
    } catch (error) {
      console.log(error);
      this.setState({ error: "Sign Up Failed - Try Again!" });
    }
  };
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
