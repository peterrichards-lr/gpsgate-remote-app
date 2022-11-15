import UserTableRow from './UserTableRow';

const UserTable = ({users}) => {
    const userFields = ['username', 'name', 'surname', 'trackPoint']
    return (
        <table className="fold-table">
            <thead>
                <tr>
                    {userFields.map(field => (
                        field === 'trackPoint'
                            ? <th key={field}>Locate</th>
                            : <th key={field}>{field}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {(users.map) ? users.map(user => ([
                    <UserTableRow key={'r_' + user.id}
                        user={user}
                        userFields={userFields} />
                ])
                ) : <tr><td></td></tr>}
            </tbody>
        </table>
    );
}

export default UserTable;