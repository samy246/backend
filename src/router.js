import {
    Router ,
    Switch
} from "react-router-dom";
import PublicRoute from "./publicroute";
import PrivateRoute from "./privaterouter";
import SignUp from "./App1";
import SignIn from "./App2";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Posts from "./Posts";
import history from "./history";


function Basic() {
    return (
        <Router history={history}>
            <div>

                <Switch>
                    <PublicRoute path="/signin" component={SignIn} exact={true}/>
                    <PublicRoute path="/signup" component={SignUp}/>
                    <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
                 { <PrivateRoute path="/profile" component={Profile}/> }
                    <PrivateRoute path="/posts" component={Posts}/>
                    {/* <PrivateRoute path={"/posts"}
                    render={({ match:{path} }) =>(
                        <Router path={'${path}/postcontainer'}
                     component={PostContainer}
                    )
                }
                    /> */}
                    <PublicRoute path="/" component={SignIn}  />

                </Switch>
            </div>
        </Router>
    );
}
export default Basic