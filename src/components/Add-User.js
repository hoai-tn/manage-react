import React,{ Component } from 'react';
import { Input, Form, FormGroup} from 'reactstrap';

import classNames from 'classnames';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '2'
        }
    }
    onChangeText(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div
                className={classNames("add-body", {"btn-heading": this.props.isCompleteds})}>
                <h5 className="text-center">Add news user</h5>
                <Form className="form-add">
                    <FormGroup>
                        <Input type="text" name="name" placeholder="Name User" onChange={(event) =>this.onChangeText(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="tel" placeholder="Telephone" onChange={(event) =>this.onChangeText(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="permision" id="exampleSelect" onChange={(event) => this.onChangeText(event)}>
                            <option value="1">Add Min</option>
                            <option value="2">Love</option>
                        </Input>
                    </FormGroup>
                    <Input type="reset" color="primary" onClick={() => this.props.insertData(this.state)} value="ADD USER" />
                </Form>
            </div>
        );
    }
}

export default AddUser;