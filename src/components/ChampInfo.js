import React from 'react';
import Card from './Card';
import CharList from './CharList';
import {fetchChars} from '../actions';
import { connect } from 'react-redux';


class champInfo extends React.Component{

    state = {key : 0}
    

    parentRender = () => {
        this.setState({key : Math.random()});
        this.forceUpdate();
    }


    getSelectedFromURL = () => {

        let srcName =  this.props.match.params.name
        const {chars} = this.props 
         let currentChar = chars.find(char => char.name === srcName)
        
        
       

        return currentChar;
       
    }


   


    render(){

        let selected  = this.getSelectedFromURL();
       
       
        const {chars} = this.props;

        return(
      
            
            chars && selected ? 
                <div>
                <div className = "container" style = {{width : 240}} >
                <div style = {{marginTop : 30}} > {<Card selected = {false} char = {selected}></Card> } </div>
                </div>
                <div className = "container">
                    <div className = "row" style = {{marginTop : 30}} > <CharList parentRender = {this.parentRender} key = {this.state.key} selected = {selected} voteBtn = {true}></CharList> </div>
                </div>
            </div> : null
        
            
        
        );


    }

};

const mapStateToProps = (state) => {
    return {chars : state.chars.chars};
}


export default connect(mapStateToProps, {fetchChars : fetchChars})(champInfo)