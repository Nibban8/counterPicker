import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {addVote, editVote, select} from '../actions';


class Card extends React.Component{

    async componentDidMount(){
        await this.props.select(this.props.char);
    }

    
    async handleVote(value, matchId , counterMatchId){
       
        let match = null
        if(this.props.matchVote[0] !== undefined){

            match = this.props.matchVote[0];

        }


        
        const newVote = {
            charId : this.props.selected.id,
            counterId: this.props.char.id,
            voteState : value
        }

        const counterNewVote = {
            charId : this.props.char.id,
            counterId : this.props.selected.id,
            voteState : !value
        }

        const anulatedVote = {
            charId : this.props.selected.id,
            counterId: this.props.char.id,
            voteState : null
        }

        const counterAnulatedVote = {
            charId : this.props.char.id,
            counterId : this.props.selected.id,
            voteState : null
        }
        


        if(this.props.currentUserId === null){

            window.alert("Debes estar registrado")
        
        }
        if(this.props.selected.id === this.props.char.id){

            if(match === null){   
                await this.props.addVote(newVote);
                }
                else if(match.voteState === value){
                    await this.props.editVote(matchId, anulatedVote)
                }
                else if(match.voteState !== value) {
                    await this.props.editVote(matchId, newVote)     
                }

        }
        else
        {
        
         
            if(match === null){   
            await this.props.addVote(newVote);
            await this.props.addVote(counterNewVote);
            
            }
            else if(match.voteState === value){
                
                await this.props.editVote(matchId, anulatedVote)
                await this.props.editVote(counterMatchId , counterAnulatedVote)
                
            }
            else if(match.voteState !== value) {
                await this.props.editVote(matchId, newVote)
                await this.props.editVote(counterMatchId, counterNewVote)
                
            }
        
            this.props.parentRender();
            
        }

    }


    renderBtns() {
        let upVoteClassName = " col s6 btn btn-small waves-effect waves-light teal"
        let downVoteClassName = " col s6 btn btn-small waves-effect waves-light teal"
        let matchId=  null;
        let counterMatchId = null;

        if(this.props.currentUserId === null){

            upVoteClassName = " col s6 btn btn-small waves-effect disabled"
            downVoteClassName = " col s6 btn btn-small waves-effect disabled"
        
        }
        
        
       

        if(this.props.selected !== false){

        
            if(this.props.counterMatchVote[0] !== undefined){
                counterMatchId = this.props.counterMatchVote[0].id
               // console.log(counterMatchId[0])
            }
    


            if(this.props.matchVote[0] !== undefined){

               // console.log(this.props.count)
                

                let vote = this.props.matchVote[0].voteState;
           

                
                if(vote === true)
                {
                    upVoteClassName = " col s6 btn btn-small waves-effect waves-light green" 
                }
                if(vote === false){
                    downVoteClassName = " col s6 btn btn-small waves-effect waves-light red"
                }

                


                matchId = this.props.matchVote[0].id;
               
            }


            return(
                <div className="card-action row " style = {{marginLeft: 0 , marginRight: 0 , padding : "1px"}} >
                    <div onClick = { () => this.handleVote(true, matchId, counterMatchId) } className={upVoteClassName}><i className="material-icons">keyboard_arrow_up</i></div>
                    <div onClick = { () => this.handleVote(false, matchId, counterMatchId) } className={downVoteClassName}><i className="material-icons">keyboard_arrow_down</i></div>
                    <span>Score: {this.props.count} </span>
                </div>
            );
        }

        else{

            return <div></div>

        }
    }

    renderCardLink(){
        
       

        return(
            <Link  to = {{ pathname:"/champ/" + this.props.char.name , selected : this.props.char}} >
                        <div className="card-image">
                            <img style = {{height: '5.5em'}} alt = "Character" src= {this.props.char.imgSrc} />
                        </div>   
            </Link>
            ); 
    }
    
    
    render(){

     //  console.log(this.props)

        return (
        <div  className="col s6 m2" key = {this.props.char.id}>
            <div className="card hoverable">
                {this.renderCardLink()}
                <div className="card-content blue-grey lighten-5" style = {{padding : 0 , height: 30}}> 
                        <h6 style = {{margin : 0, padding: 5}} className = "center-align truncate">{this.props.char.name}</h6>
                </div>
                {this.renderBtns()}
            </div>
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return {addVote : addVote, editVote : editVote , currentUserId : state.auth.userId, select : select};

}

export default connect(mapStateToProps, {addVote, editVote, select})(Card);

