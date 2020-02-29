import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import './App.css'
import AddUser from './components/Add-User';
import TableUser from './components/Table-Employee';
import SearchUser from './components/Search';
import './components/style.css';
import dt from './components/data.json'
import classNames from 'classnames';
import EditUser from './components/EditUser';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isCompleted: false,
            searchText: '',
            userUpdate: {},
            changeUserStatus: false
        }
    }
    componentWillMount() {
        if (localStorage.getItem('userData') === null) {
            localStorage.setItem('userData', JSON.stringify(dt));
            console.log('true')
        } else {
            this.setState({
                data: JSON.parse(localStorage.getItem('userData'))
            })
            console.log('fales')
        }
    }
    setCompleted() {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }
    //inseart data
    insertData(nameData) {
        this.setState({
            data: this
                .state
                .data
                .concat(nameData)
        })

        localStorage.setItem('userData', JSON.stringify(this.state.data.concat(nameData)))
    }

    getTextSearch(nameData) {
        this.setState({searchText: nameData});
    }

    handleEditData = (user) => {
        this.setState(prevState => {
            return {userUpdate: user}
        })

    }
    // start for edit
    changeUserEditStatus = () => {
        this.setState({
            changeUserStatus: !this.state.changeUserStatus
        })
    }

    renderEdit = () => {
        return this.state.changeUserStatus && <EditUser
            user={this.state.userUpdate}
            updateUser={(itemUser) => this.updateUser(itemUser)}
            changeUserEditStatus={() => this.changeUserEditStatus()}/>
    }

    //Edit user
    updateUser = (itemUser) => {
        const {data} = this.state;
   
        data.forEach(value => {
            if (value.id === itemUser.id) {
                let index = data.indexOf(value);
                let dataUser = [
                    ...data.slice(0, index),
                    itemUser,
                    ...data.slice(index + 1)
                ];
                this.setState({
                    data: dataUser
                })
                localStorage.setItem('userData',JSON.stringify(dataUser))
            }
           
        })
    }
    //delete data user
    deleteDataRow = (item) => {
        const {data} = this.state;
        let dataUSer = data.filter(value => value.id !== item)
        this.setState({data: dataUSer})
        localStorage.setItem('userData', JSON.stringify(dataUSer))
    }

    render() {
        const {data, isCompleted, searchText} = this.state;

        let renderData = [];
        data.map((value) => {
            if (value.name.indexOf(searchText) !== -1) {
                renderData.push(value);
            }
        })

        return (
            <Container>
                <Row>
                    <Col>
                        {this.renderEdit()}
                    </Col>
                    <Col md="12">
                        <SearchUser checkTextSearch={(nameData) => this.getTextSearch(nameData)}/>
                    </Col>
                    <Col md="12">
                        <Button
                            outline
                            color="primary w-100"
                            className={classNames({"btn-heading": isCompleted})}
                            onClick={() => this.setCompleted()}>INSERT</Button>

                        <Button
                            outline
                            color="secondary w-100"
                            onClick={() => this.setCompleted()}
                            className={classNames({
                            "btn-heading": !isCompleted
                        })}>CLOSE</Button>
                    </Col>
                    <Col>
                        <TableUser
                            dataUser={renderData}
                            editData={(user) => this.handleEditData(user)}
                            hiddenState={isCompleted}
                            changeUserEditStatus={() => this.changeUserEditStatus()}
                            deleteDataRow={(itemUser) => this.deleteDataRow(itemUser)}/>
                    </Col>
                    <div>
                        <Col >
                            <AddUser
                                isCompleteds={!isCompleted}
                                insertData={(data) => this.insertData(data)}/>
                        </Col>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default App;