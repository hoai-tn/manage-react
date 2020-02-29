import React from 'react';

import {ButtonGroup, Button} from 'reactstrap';

const TableRow = (props) => {

    const checkPermision = () => {
        if(parseInt(props.permision) === 1) {
            return 'ADMIN'
        }
        return 'Love'
    }
    const updateDataRow = () => {
        props.editDataClick()
        props.changeUserEditStatus();
    }

    return (       
        <tr >
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.tel}</td>
            <td>{checkPermision()}</td>
            <td>

                    <div >
                        <ButtonGroup>
                            <Button color="primary" onClick={() => updateDataRow()}>Update</Button>
                            <Button color="danger" onClick={() => props.deleteDataRow()}>Delete</Button>
                        </ButtonGroup>
                    </div>
             </td>
        </tr>
	 );
}
export default TableRow