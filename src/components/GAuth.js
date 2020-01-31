import React from 'react';
import {connect} from 'react-redux'

import {signIn , signOut} from '../actions';

class GAuth extends React.Component{


 


    componentDidMount(){

       
        window.gapi.load('client:auth2', () =>  {
            window.gapi.client.init({
                clientId : '271921078217-35k4nbv0aav1bvfsvdc65dhi078cosi0.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });



    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }

    };


    render(){

        if(this.props.isSignedIn === null){

            return( <div><span role="img" aria-label="thinking">🤔</span></div>)
        }
        else if(this.props.isSignedIn){
            return( <div><button style = {{marginRight : "15px" , fontWeight: "700" }} onClick = {this.auth.signOut} className="waves-effect waves-light btn teal lighten-3 valign-wrapper "><img alt = "google-logo" style = {{verticalAlign : "text-top"}} width="20px" src="https://img.icons8.com/color/48/000000/google-logo.png"/> Sign Out</button></div>)
        }
        else {
            return( <div><button style = {{marginRight : "15px" , fontWeight: "700" }} onClick = {this.auth.signIn} className="waves-effect waves-light btn teal lighten-3 valign-wrapper "><img alt = "google-logo" style = {{verticalAlign : "text-top"}} width="20px" src="https://img.icons8.com/color/48/000000/google-logo.png"/> Sign In</button></div>)
        }

        
       

    }

}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn}
}


export default connect( mapStateToProps , {signIn , signOut})(GAuth);