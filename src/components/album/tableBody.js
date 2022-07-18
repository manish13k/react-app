import React, { memo } from "react";
import { useNavigate  } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { getUserName, setValue, generateUniqueColor } from '../../helper';

const TableBody = ({ responseData = [], userdata = [] }) => {
    let navigate = useNavigate();
    
    /** Handle onclick method on row */
    const handleOnclick = (obj) => {
        setValue(obj);
        navigate('/photo');
    }
    
    return (
        responseData.map((item, index) => {
            const { title = '', thumbnailUrl = 'https://via.placeholder.com/150/01ff', id = 0, userId = 0 } = item;
            const username = getUserName(userdata, userId);
                            
            return (
                <tr className="link" key={index} onClick={() => handleOnclick({ albumId: id, username: username, title: title })}>
                    <td className="alignCenter" style={{ backgroundColor: generateUniqueColor(username) }}><div className="smallImage"><Image src={thumbnailUrl} alt={thumbnailUrl} rounded /></div></td>
                    <td>{title}</td>
                    <td>{username}</td>
                </tr>
            )
        })
    )
}
export default memo(TableBody);

