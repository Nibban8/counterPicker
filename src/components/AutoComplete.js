import React from 'react';

import history from '../history'

class AutoComplete extends React.Component{

    state = {suggestions : []}

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        
        if (value.length > 0){
            const regex = new RegExp(`^${value}` , 'i');
            suggestions = this.props.list.sort().filter(v => regex.test(v))
        }
        this.setState({suggestions})
    }


    getChar(name){

        return Object.values(this.props.chars).find(char => char.name === name)

    }


    getImgSrc(name){

        let char = this.getChar(name)
        let imgSrc = char.imgSrc

        return imgSrc;
    }


    handleClick = (name) => {

        let char = this.getChar(name);

       

        let charName = char.name


        this.onTextChange({target : {value : ""}})
        document.getElementById('autocomp').value = ""

        history.push({ 
            pathname:"/champ/" + charName, 
            selected : char})
    }

    renderSuggestions(){
        const {suggestions} = this.state;

       // console.log(suggestions);

        if(suggestions.lenght === 0) {
            return null;
        }

        return(

            <ul style = {{display: "indline-block" , margin: 0 , color: "black", borderTop: "none" , width : "100"}} className="collapsible">
            <li style = {{width: "100%"}}>
                {((suggestions).map(char => <div key = {char} onClick = {() => this.handleClick(char)} style = {{padding : 0}} className="collapsible-header"><img alt = "" style = {{height: '3em'}}  src= {this.getImgSrc(char)} />{char}</div> ))}
            </li>
            </ul>

        );

    }

    // <Link  to = {{ pathname:"/champ/" + this.props.char.name , selected : this.props.char}} >
   

    render() {
        //console.log(this.props);
        return (
            <div style = {{marginBottom : 0}} className = "container">

                <input id = 'autocomp' onChange = {this.onTextChange} type="text" />
                {this.renderSuggestions()}
               
            </div>
        );

    }


}

export default AutoComplete;


