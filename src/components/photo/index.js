import React, { useCallback, useEffect, useState, Fragment, memo } from "react";
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import TableHead from './tableHead';
import TableBody from './tableBody';
import { getCall } from '../../services';
import { PhotoAPI } from '../../services/apiUrls';
import Pagination from '../pagination';
import { getValue } from "../../helper";

const PhotoPage = () => {
    const [photoData, setPhotoData] = useState([]);
    const getUserInfo = getValue();
    const { albumId = 0, username = 'NA', title = '' } = getUserInfo || {};
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const start = parseInt(searchParams.get('start')) || 0;
    const limit = parseInt(searchParams.get('limit')) || 20;

    useEffect(() => {
        if(title === '') { navigate(`/`); }
        document.title = `${username} ${title}`;
    }, [username, title])
    
    /** fetch photo for specific user */
    const fetchSpecificPhotoData = useCallback(async () => {
        const apiUrl = `${PhotoAPI}?albumId=${albumId}&_start=${start}&_limit=${limit}`
        const photoList = await getCall(apiUrl);
        setPhotoData(photoList);
    }, [albumId, start, limit]);

    useEffect(() => {
        fetchSpecificPhotoData();
    }, [limit, start, fetchSpecificPhotoData])

  return (
    <Container>
        <header className="album-header">
            <h2>Photo Page</h2>
            <Link to={`/`}>Go to Album Page</Link>
        </header>
        { photoData.length > 0 ? (
            <Table striped bordered hover size="sm" responsive>
                <TableHead />
                <tbody>
                    <TableBody responseData={photoData} username={username} />
                    <Pagination apiUrl={`${PhotoAPI}?albumId=${albumId}`} pageUrl={`/photo`} />
                </tbody>
            </Table>
        ) : (
            <Fragment>No Record Found</Fragment>
        )}
    </Container>
  )
};

export default memo(PhotoPage);
