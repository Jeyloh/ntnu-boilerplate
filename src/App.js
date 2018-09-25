import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import Header from './components/Header';
import PageContent from './components/PageContent';
import { myPersonalInformation } from './personal_information';

class App extends Component {
    constructor(props) {
        console.log('>> constructor');
        super(props);
        this.state = {
            user: null,
            loading: false
        };
    }

    /**
     * A simple showcase of the LifeCycle methods
     */
    componentDidMount() {
        console.log('>> componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('>> shouldComponentUpdate');
        console.log(nextProps, nextState);
        return true;
    }
    componentDidUpdate() {
        console.log('>> componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('>> componentWillUnmount');
    }

    loginUser = () => {
        console.log(
            'Simulate fetchUserInformation call with setTimeout 1000ms'
        );
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                user: myPersonalInformation,
                loading: false
            });
        }, 1000);
    };

    render() {
        console.log('>> render');

        return (
            <Provider store={store}>
                <div className="app">
                    <Header user={this.state.user} />
                    <PageContent
                        loginUser={this.loginUser}
                        user={this.state.user}
                        loading={this.state.loading}
                    />
                </div>
            </Provider>
        );
    }
}

export default App;
