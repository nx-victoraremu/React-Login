import React, { Component } from 'react';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

class App extends Component {

    async componentDidMount(){
        try{
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            });

            let result = await res.json();
            if (result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.name;
            }
            else{
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }
        catch(e){
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
        }
    }

    async doLogout(){
        try{
            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            });

            let result = await res.json();
            if (result && result.success){
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
        }
        catch(e){
                console.log(e)
        }
    }

    render() { 

        if (UserStore.loading){
            return(
                <div className="app">
                    <div className="container">
                        Loading, please wait...
                    </div>                    
                </div>
            )
        }

        return ( 
            <div>
                asdfgh
            </div>
         );

    }
}
 
export default App;
export default App; 