import React from 'react';
import {Table} from 'reactstrap';
import TableRow from './TableRow';
const TableEmployee = (props) => {
    
    return (
        <Table hover>
            <thead>
                <tr >
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Manipulation</th>
                </tr  >
            </thead>
            <tbody>
                {
                props.dataUser.map((value, key) => (<TableRow
                        deleteDataRow={(itemUSer) => props.deleteDataRow(value.id)}
                        editDataClick={(user) => props.editData(value)}
                        key={key}
                        id={key+1}
                        name={value.name}
                        tel={value.tel}
                        permision={value.permision}
                        changeUserEditStatus={() => props.changeUserEditStatus()}/>))}
            </tbody>
        </Table>
    );
}

export default TableEmployee;