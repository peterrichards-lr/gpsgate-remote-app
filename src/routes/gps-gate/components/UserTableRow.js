import { useEffect, useState } from 'react';
import DeviceTable from './DeviceTable';

const _getMapUrl = (latitude, longitude) => {
    return 'https://maps.google.com/maps?q=' + latitude + ',' + longitude;
}

const UserTableRow = ({ user, userFields }) => {
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
       console.log(expanded);
    }, [expanded])

    const toggerExpander = (e) => {
        setExpanded(!expanded);

    }

    return ([
        <tr className="view" onClick={toggerExpander}>
            {userFields.map(field => (
                field === 'trackPoint'
                    ? <td key={field + '_' + user.id}>
                        <a className="btn btn-primary" target="_blank" href={_getMapUrl(user.trackPoint.position.latitude, user.trackPoint.position.longitude)}>View</a>
                    </td>
                    : <td key={field + '_' + user.id}>{user[field]}</td>
            ))}
        </tr>,
        expanded && (
        <tr className="fold open">
            <td colSpan={userFields.length}>
                <div>
                    <h3>Devices</h3>
                    <DeviceTable devices={user.devices} />
                </div>
            </td>
        </tr>
        )
    ]);
}

export default UserTableRow;