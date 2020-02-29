import React, {Component} from 'react';
import {Form, Input} from 'reactstrap';



class EditUser extends Component {
	constructor(props) {
		super(props);
		const userUpdate = this.props.user;
		this.state = {
			id: userUpdate.id,
			name: userUpdate.name,
			tel: userUpdate.tel,
			permision: userUpdate.permision
			
		}
	} 

	getText = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
		
  }
  userUpdate = () => {
	this.props.updateUser(this.state);
	this.props.changeUserEditStatus();
	console.log(this.state);
  }
	render() { 
		const userUpdate = this.props.user;
		return ( 
			<div>
			<Form className="border border-primary">
				 <h5 className="text-center">Update User</h5>
				 <Input
					  defaultValue={userUpdate.name}
					  type="text"
					  className="my-3 w-50 mx-auto"
					  placeholder="Enter Name"
					  name="name"
					  onChange={(event) => this.getText(event) }/>
					  
				 <Input
					  defaultValue={userUpdate.tel}
					  type="text"
					  className="my-3 w-50 mx-auto "
					  placeholder="Enter TelePhone"
					  name="tel"
					  onChange={(event) => this.getText(event) }/>
					  
				 <Input
					  type="select"
					  className="my-3 w-50 mx-auto"
					  name="permision"
					  defaultValue={userUpdate.permision}
					  onChange={(event) => this.getText(event) }>
					  <option value="1">Admin</option>
					  <option value="2">Love</option>
				 </Input>
				 <Input
					  type="button"
					  className="my-3 w-50 mx-auto bg-success text-warning"
					  onClick={() => this.userUpdate()}
					  value="UPDATE USER"/>
			</Form>
	  </div>
		 );
	}
}
 
export default EditUser;