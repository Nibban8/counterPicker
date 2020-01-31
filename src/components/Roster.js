import React from 'react';
import CharList from './CharList';
import {Link} from 'react-router-dom';


class Roster extends React.Component {

    newcomerBtn = () => {
        

        return (
            <div className = "container center-align">
                <Link to = "/new" className="btn-floating btn-large red pulse"><i className="material-icons">add</i></Link>
            </div>
    
        );
    
    }

    render(){

       
        return(
            <div style = {{marginTop : 20 , display : "table"}} className = "container">
                <CharList selected = {false} voteBtn = {false}></CharList>
                {this.newcomerBtn()};
            </div>
        );
    }
}


export default Roster;