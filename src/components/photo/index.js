import React, { useCallback, useEffect, useState, Suspense, lazy } from "react";
import { useSearchParams  } from 'react-router-dom';
import { Container, Table, Spinner } from 'react-bootstrap';
import TableHead from './tableHead';
const TableBody = lazy(() => import("./tableBody"));
import { getCall } from '../../services';
import { PhotoAPI } from '../../services/apiUrls';
import Pagination from '../pagination';
import { getValue } from "../../helper";

const PhotoPage = () => {
    const [photoData, setPhotoData] = useState([]);
    const getUserInfo = getValue();
    const { albumId = 0, username = 'NA', title = '' } = getUserInfo || {};

    const [searchParams] = useSearchParams();
    const start = parseInt(searchParams.get('start')) || 0;
    const limit = parseInt(searchParams.get('limit')) || 20;

    useEffect(() => {
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
        </header>
        { photoData.length > 0 ? (
        <Table striped bordered hover size="sm" responsive>
            <TableHead />
            <tbody>
                <Suspense fallback={<tr><td><Spinner animation="grow" /></td></tr>}>
                    <TableBody responseData={photoData} username={username} />
                </Suspense>
                <Pagination apiUrl={`${PhotoAPI}?albumId=${albumId}`} pageUrl={`/photo`} />
            </tbody>
        </Table>
        ) : (
            <Spinner animation="grow" />
        )}
    </Container>
  )
};

export default PhotoPage;
