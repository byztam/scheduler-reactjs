import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Routes from './routes';

class App extends Component {
	render(){
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<ScrollToTop>
					<Switch>
					{
						this.Route(Routes)
					}
					</Switch>
				</ScrollToTop>
			</Router>
		);
	}
	Route = (routes)=> {
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index) => {
				return(
					<Route key={index} path={route.path} exact={route.exact} component={route.content} />
				);
			})
		}
		return result;
	}
}


export default App;
