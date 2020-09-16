import React, { Component } from 'react';
import Content1 from '../../components/scheduler/content1';
import Content2 from '../../components/scheduler/content2';
import Content3 from '../../components/scheduler/content3';
import SchedulerLayout from './../../layouts/SchedulerLayout';

class Home extends Component {
    render(){
        return (
            <SchedulerLayout>
                <Content1/>
                <div style={{marginTop: 50}}></div>
                <Content2/>
                <div style={{marginTop: 50}}></div>
                <Content3/>
            </SchedulerLayout>
        );
    }
}

export default Home;