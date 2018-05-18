import React, {Component, Fragment} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Infoz from '../api/UserInfo/collections.js';
// import {Accounts} from 'meteor/accounts-base';
import loadmaterialize from './materialize.js' ;
import {SignUp} from './SignUp.jsx';
import Navbar from '/imports/ui/components/navbar.jsx';





export class UserAccount extends Component{




    getUserInfo(){
        const infoz = this.props.infoz;

        if(infoz == undefined){
             return null;
        }

        console.log("smhdfkagsdfk")
        return infoz.map((info) => (
             
            <div key ={info._id}>
            <Navbar/>
                <div className="row">
              <div className="col s3">
               {/* <img className="materialboxed" width="200" height="200" src="/images/profile.jpeg"/> */}
              </div>
            <div className="col s5">
             <span>
                 <h4>{info.name}</h4>
                 <p>{info.profession}</p>
                 <p><i className="fa fa-phone" aria-hidden="true"></i>{info.phonenumber}</p>
                 <p><i className="fa fa-envelope" aria-hidden="true"></i>{info.email}</p>
                 <p>{info.description}</p>
             </span>
            </div>
            </div> 
            </div>
            
        )
    );  
    }



    logOut=(e)=>{
    e.preventDefault();
    Meteor.logout();
    route.go('/login')
  }
//   deleteAccount=(e,id)=>{
//       Meteor.call('infoz.deleteAccount',id)
//   }
   
      render() {
        return (
        <div>    

            <button type="Primary" className="btn btn-primary" onClick={this.logOut}>
        Logout
        </button>
        {/* <button type="Primary" className="btn btn-primary delete" onClick={e =>this.deleteAccount(e,info._id)}>
Delete Account 
</button> */}
        {this.getUserInfo()}
        
           </div>
                 
        )
        
    }
}

export default withTracker(() => {
    Meteor.subscribe('users');
    
    Meteor.subscribe('infoz');
    const email = route.current().queryParams.email;
     return {
         infoz : Infoz.find({email:email}).fetch(),
     };
 })(UserAccount);

 