import React, {Component} from 'react';
import route from '/imports/routing/router.js';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '/imports/ui/components/navbar.jsx';





export default class Login extends Component{
  constructor(props){
    super(props);
  }
  
  logUserIn=(e)=>{
    e.preventDefault();
    const {target} =e;
    const email = e.target.email.value;
    const password = e.target.password.value;
    Meteor.loginWithPassword(email,password, err=>{
      err? console.log(err.reason): console.log('Logged in succesully');
    })
    meteor.loginWithPassword
  }
  
  


    render(){
        return(
          <div>
            <Navbar/>
          <div className="center">
          <h1>Login</h1>
      <div className="Login">
       <form className="col s12" onSubmit = {this.logUserIn}>
        <div className="row">
         <div className=" col s4">
         </div>
          <div className="input-field col s4">
            <input name="email" type="email" className="validate"/>
             <label type="email">Email</label>
          </div>
        </div>
        <div className="row">
         <div className=" col s4">
         </div>
          <div className="input-field col s4">
            <input name="password2" type="password" className="validate"/>
             <label type="password">Password</label>
          </div>
        </div>
        <button type="Primary" className="btn btn-primary">
        login
        </button>
       </form>              
     </div>
    </div>
    </div>
        )
    }
}
