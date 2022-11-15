class GpsGateApi {
    constructor(hostname) {
        this.hostname = hostname;
    }

    _getBaseUrl() {
        return `http://${this.hostname}/comGpsGate/api/v.1`;
    }

    async auth(applicationId, username, password, successCallback, failureCallback) {
        return fetch(this._getBaseUrl() + `/applications/${applicationId}/tokens`, {
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
            .then((response) => response.json())
            .then(function (data) {
                if (successCallback)
                    successCallback(data.token);
            })
            .catch((err) => {
                if (failureCallback)
                    failureCallback(err);
                else
                    console.error(err);
            });
    };

    async baseFetch(url, authToken, options = {}) {
        return fetch(this._getBaseUrl() + "/" + url, {
            headers: {
                "accept": "application/json",
                "Authorization": authToken
            },
            ...options,
        });
    };
}

export default GpsGateApi;