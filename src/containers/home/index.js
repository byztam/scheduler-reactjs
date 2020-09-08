import React, { Component } from 'react';
import Content1 from '../../components/home/content1'
import Content2 from '../../components/home/content2'
import Content3 from '../../components/home/content3'

class Home extends Component {
    render(){
        return (
            <div>
                <Content1/>
                <div style={{marginTop: 50}}></div>
                <Content2/>
                <div style={{marginTop: 50}}></div>
                <Content3/>
            </div>
        );
    }
}

export default Home;