import React, { Fragment, memo, useState } from "react";
import { Image } from 'react-bootstrap';
import DisplayModel from '../modal'

const TableBody = ({ responseData = [], username = 'NA' }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModelData] = useState({});

    /** show modal click on thumbnail image */
    const handleClick = (obj) => {
        setModelData(obj);
        setModalShow(true);
    }

    return (
        <Fragment>
            { responseData.map((item, index) => {
                const { title = '', thumbnailUrl = '', url = '' } = item;
                return (
                    <tr key={index}>
                        <td onClick={() => handleClick({'url': url, 'title': title})} className="alignCenter link">
                            <div className="smallImage"><Image src={thumbnailUrl} alt={thumbnailUrl} rounded /></div>
                        </td>
                        <td>{title}</td>
                    </tr>
                )
            })}
            <DisplayModel
                show={modalShow}
                onHide={() => setModalShow(false)}
                username={username}
                modaldata={modalData}
            />
        </Fragment>
    )
}
export default memo(TableBody);

