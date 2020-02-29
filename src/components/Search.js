import React, {Component} from 'react';

import {Button, Input, InputGroup} from 'reactstrap';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newtext: ''
        }
    }
    handleSearch(event) {
        this.setState({newtext: event.target.value})
    }
 
    render() {
        return (
            <InputGroup className="search mb-2">
                <Input
                    onChange={(event) => this.handleSearch(event)}
                    type="text"
                    placeholder="Enter Key" 
                    className="input-search W-85"/>
                <Button
                    color="warning"
                  
                    onClick={() => this.props.checkTextSearch(this.state.newtext)}>Search</Button>
            </InputGroup>
        );
    }
}

export default Search;