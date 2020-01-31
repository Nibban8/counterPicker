import React from 'react';
import {Link} from 'react-router-dom';
import {fetchChars} from '../actions';
import { connect } from 'react-redux';
import AutoComplete from './AutoComplete';
import GAuth from './GAuth';


class TopNav extends React.Component{

    state = {lista : []}
    
    componentDidMount() { 
        this.props.fetchChars();
    }

    
    

    

    render(){
        
        


        
        return(
           <div>

            <div className = "container">
                
            </div>

               <nav>
                
                    <div className="nav-wrapper">
                        <Link to = "/" className="brand-logo left"><img style = {{width : 50 , padding: 2,marginTop: 4}} alt ="logo" src="https://i.pinimg.com/originals/b7/d8/51/b7d851fcc4c59aac1011c7cecb2ea6b7.png"></img></Link>
                        <ul className="right">
                            <li>
                                <i className="material-icons prefix">search</i>
                            </li>
                            <li>                      
                            <AutoComplete chars = {this.props.chars} list = {((this.props.chars).map(char => char.name))} />
                            </li>
                            
                            <li><Link to = "/"><i className="material-icons right">view_module</i>Roster</Link></li>
                            <li><GAuth/></li>
                        </ul>
                    </div>
                </nav>
           </div>
            
        );
    }
    
}

const mapStateToProps = (state) => {
   
    return {chars : state.chars.chars};

}


export default connect(mapStateToProps, {fetchChars : fetchChars})(TopNav);