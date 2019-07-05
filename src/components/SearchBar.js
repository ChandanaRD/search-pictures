import React from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    OnInputChange = (event) =>{
        this.setState({searchText:event.target.value});
        console.log(this.state.searchText);
    }
    OnFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.searchtext);
    }

    render(){
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit = {this.OnFormSubmit}>
                    <div className='ui field'>
                        <label>Search Images</label>
                        <input type='text' placeholder="what do you want to search?" onChange={this.OnInputChange} value={this.state.searchText}></input>
                        {/* alternate syntax to bind a property with function => onChange = {e =>{console.log(e.target.value )}}*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;