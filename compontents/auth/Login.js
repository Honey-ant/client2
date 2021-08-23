import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect  } from "react-redux";
import { loginUser } from "../../actions/authActions.js";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/main");
        }
    }
// componentWillReceiveProps() 
    shouldComponentUpdate(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/main");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);

        console.log(userData);
    };

    render() {
        const {errors} = this.state;

        return (
            
               <div className="container-fluid login cards">
                   <div className="card">
                       <div>
                           <div>
                               <Link to="/" className="btn-flat">
                                   Back Home
                               </Link>
                               <div className="col-s12">
                                   <h4>
                                       <b>Login</b> below
                                   </h4>
                                   <p className="grey-text text-darken-1">
                                        Dont' have an account? <Link to="/register">Register</Link>
                                   </p>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="card">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div>
                                <label for="InputEmail" className="form-label form"></label>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                                <input onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("form-control", {
                                    invaild: errors.email || errors.emailnotfound
                                })} />
                            </div>

                            <div>
                                <label for="InputPassword" className="form-label">Password</label>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                                <input onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("form-control", {
                                    invaild: errors.password || errors.passwordincorrect
                                })}/>
                            </div>

                            <div>
                                <input type="checkbox" className="form-check-input" id="check1"/>
                                <label className="form-check-label" for="check1">Remember Email</label>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                   </div>
                </div> 
            
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);