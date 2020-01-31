import React from 'react';
import {Redirect} from 'react-router-dom';
import {post} from '../apis/smashApi';


class AddChar extends React.Component {

    state = {redirect : false}
    setRedirect = () => {
        this.setState({redirect: true});
    }
    handleSubmit = (event) => {
        event.preventDefault();
            post('/chars' ,  {
                name: this.refs.newName.value,
                imgSrc : `/newcomers/${this.refs.imgSrc.value}`
            }, this.setRedirect, console.log)


    }

    renderForm(){

        
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        
        return(
            
            <form onSubmit = {this.handleSubmit}>
                <div className = "input-field">
                    <input id= "newName" type="text" ref= "newName"/>
                    <label htmlFor="newAvatar" >Nombre</label>
                </div>
                
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>IMG</span>
                            <input type="file" multiple/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path" type="text" placeholder="Newcomer Avatar" ref= "imgSrc"/>
                        </div>
                    </div>

                    <button>Sumbit</button>
            </form> 
        );

    }

    render(){
        return( 
        <div style = {{marginTop : 60}} className = "container">{this.renderForm()}</div>);
    }


}

export default AddChar;