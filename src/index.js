import React from 'react';
import ReactDOM from 'react-dom';

import GpsGate from './routes/gps-gate/pages/GpsGate';
import HelloBar from './routes/hello-bar/pages/HelloBar';
import HelloFoo from './routes/hello-foo/pages/HelloFoo';
import HelloWorld from './routes/hello-world/pages/HelloWorld';
import './common/styles/index.scss';

const App = ({ route, applicationId, username, password }) => {
	if (route === "gps-gate") {
		return <GpsGate applicationId={applicationId}
						username={username}
						password={password} />
	}
	
	if (route === "hello-bar") {
		return <HelloBar />;
	}

	if (route === "hello-foo") {
		return <HelloFoo />;
	}

	return <HelloWorld />;
};

class WebComponent extends HTMLElement {
	connectedCallback() {
		ReactDOM.render(
			<App route={this.getAttribute("route")}
				applicationId={this.getAttribute("applicationId")}
				username={this.getAttribute("username")}
				password={this.getAttribute("password")} />,
			this
		);
	}
}

const ELEMENT_ID = 'gpsgate-remote-app';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}
