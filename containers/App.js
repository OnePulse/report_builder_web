import React, {Component} from 'react';

import Header from '../components/app/Header';
import Main from '../components/app/Main';
import Footer from '../components/app/Footer';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}