import React, {Component} from 'react';

const Module = ()=>(<div>module</div>);
const Home = ()=>(<div>home</div>);

// React router version v4
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Root extends React.Component {
    constructor(props) { super(props); }
    render() {
        return(
            <Router>
                <div>
                    <div><Link to="/">home</Link></div>
                    <div><Link to="/module">module</Link></div>
                    <div>
                        <p>App</p>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/module" component={Module} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}


// // React router version 3
// import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
// const App = ({children}) => (
//     <div>
//         <div><Link to="/">home</Link></div>
//         <div><Link to="/module">module</Link></div>
//         <div>
//             <p>App</p>
//             {children}
//         </div>
//     </div>
// );
//
// class Root extends Component {
//     constructor(props) { super(props); }
//     render() {
//         return(
//             <Router history={browserHistory}>
//                 <Route  path="/" component={App} >
//                     <IndexRoute component={Home} />
//                     <Route path="/module" component={Module} />
//                 </Route>
//             </Router>
//         );
//     }
// }

export default Root;



