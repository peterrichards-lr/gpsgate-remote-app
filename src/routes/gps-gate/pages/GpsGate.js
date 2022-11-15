import { useEffect, useState } from 'react';
import GpsGateApi from './../../../common/services/gpsgate/api';
import UserTable from '../components/UserTable';

const GpsGate = ({ applicationId, username, password }) => {

    const [authToken, setAuthToken] = useState('');
    const [userArray, setUserArray] = useState([]);


    const apiHelper = new GpsGateApi('77.83.62.150');

    apiHelper.auth(applicationId, username, password, (token) => {
        setAuthToken(token)
    });

    useEffect(() => {
        apiHelper.baseFetch(`applications/${applicationId}/users`, authToken)
            .then((response) => response.json())
            .then(function (data) {
                setUserArray(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [authToken])

    

    return (<div className="gps-gate">
        <h2>Users</h2>
        <UserTable users={userArray} />
    </div>);
};

export default GpsGate;