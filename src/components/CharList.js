import React from 'react';
import {connect} from 'react-redux';
import { fetchChars , fetchVotes, addVote} from '../actions';
import Card from './Card';

class CharList extends React.Component {

    state = {refresh : 0}

   
    async componentDidMount() {
        await this.props.fetchChars();
        await this.props.fetchVotes();
    }

    
    

    renderList(){
        
        return this.props.chars.map(char => {

        let match = Object.values(this.props.votes).filter(char => char.charId === this.props.selected.id).filter(counter => counter.counterId === char.id)
        let counterMatch = Object.values(this.props.votes).filter(c => c.charId === char.id).filter(co => co.counterId === this.props.selected.id)
        
        let matchVote = match.filter(user => user.userId === this.props.currentUserId)        
        let counterMatchVote = counterMatch.filter(user => user.userId === this.props.currentUserId)        
        
        let upVotes = match.filter( m => m.voteState === true).length;
        let downVotes = match.filter(m => m.voteState === false).length;
        let score = upVotes - downVotes;


        

        //let votesCount = match.length;

        //console.log(votesCount)

        return <div key = {char.id} > <Card count = {score}  parentRender = {this.props.parentRender} matchVote = {matchVote} counterMatchVote = {counterMatchVote} selected = {this.props.selected} char = {char}></Card> </div> 
        });
    }
   
    render(){
        
        return <div className = "row">{this.renderList()}</div>
    }

}

const mapStateToProps = (state) => {
   
    return {chars : state.chars.chars, votes: state.votes , currentUserId : state.auth.userId};

}

export default connect(mapStateToProps, {fetchChars : fetchChars, fetchVotes : fetchVotes ,addVote : addVote})(CharList);