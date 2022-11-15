const DeviceTableRow = ({device, deviceFields}) => {
    return (
        <tr key={'d_' + device.id}>
            {deviceFields.map(field => (
                <td key={field + '_' + device.id}>{device[field]}</td>
            ))}
        </tr>
    );
}

export default DeviceTableRow;