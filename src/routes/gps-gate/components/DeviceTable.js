import DeviceTableRow from './DeviceTableRow';

const DeviceTable = ({devices}) => {
    const deviceFields = ['name', 'imei'];
    return (
        <table>
            <thead>
                <tr>
                    {deviceFields.map(field => (
                        <th key={field}>{field}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {devices.map(device => (
                    <DeviceTableRow key={device.id} device={device}
                    deviceFields={deviceFields} />
                ))}
            </tbody>
        </table>
    );
}

export default DeviceTable;