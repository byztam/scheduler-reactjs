import React, { Component } from 'react';
import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import styles from './Work.style';
import { withStyles } from '@material-ui/core';

const Header = withStyles(styles)(class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <TableHead>
                <TableRow style={{height: 50}}></TableRow>
                <TableRow className={classes.bgHeader}>
                    <TableCell padding="none" rowSpan="2" align="center" style={{width: "130px"}}>WORK</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>MON</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>TUE</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>WED</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>THU</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>FRI</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>SAT</TableCell>
                    <TableCell padding="none" colSpan="2" align="center" className={classes.bgHeader2}>SUN</TableCell>
                    <TableCell padding="none" align="center" rowSpan="2" className={classes.total}>TOTAL</TableCell>
                    <TableCell padding="none" align="center" rowSpan="2" className={classes.des}>DESCRIPTION</TableCell>
                </TableRow>
                <TableRow className={classes.bgHeader}>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>h</TableCell>
                    <TableCell padding="none" align="left" className={classes.nomarl}>text</TableCell>
                </TableRow>
            </TableHead>
        );
    }
});

const Body = withStyles(styles)(class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataWork: [
                {
                    name: '001-111-2020',
                    cellData: [
                        {
                            hours: '1:00',
                            text: 'test'
                        },
                        {
                            hours: '1:00',
                            text: 'test'
                        },
                        {
                            hours: '1:00',
                            text: 'test'
                        },
                        {
                            hours: '1:00',
                            text: 'test'
                        },
                        {
                            hours: '1:00',
                            text: 'test'
                        },
                        {
                            hours: '1:00',
                            text: 'test'
                        },
                        {
                            hours: '1:00',
                            text: 'test'
                        }
                    ],
                    total: '50:00',
                    description: ''
                }
            ]
        }
    }
    
    handleSaveWork = () => {
        console.log(this.txtWorkName.value)
        const emptyData = {
            name: '001-111-2020',
            cellData: [
                {
                    hours: '1:00',
                    text: 'test'
                },
                {
                    hours: '1:00',
                    text: 'test'
                },
                {
                    hours: '1:00',
                    text: 'test'
                },
                {
                    hours: '1:00',
                    text: 'test'
                },
                {
                    hours: '1:00',
                    text: 'test'
                },
                {
                    hours: '1:00',
                    text: 'test'
                },
                {
                    hours: '1:00',
                    text: 'test'
                }
            ],
            total: '50:00',
            description: ''
        };

        this.setState({
            dataWork: [
                ...this.state.dataWork,
                emptyData
            ]
        })
    }
    
    render() {
        const { classes } = this.props;
        return (
            <TableBody>
                {
                    this.state.dataWork.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell padding="none" align="left">{ data.name }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[0].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[0].text }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[1].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[1].text }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[2].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[2].text }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[3].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[3].text }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[4].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[4].text }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[5].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[5].text }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[6].hours }</TableCell>
                            <TableCell padding="none" align="left">{ data.cellData[6].text }</TableCell>
                            <TableCell padding="none" align="center">{ data.total }</TableCell>
                            <TableCell padding="none" align="left">{ data.description }</TableCell>
                        </TableRow>
                    ))
                }
                <TableRow>
                    <TableCell colSpan="17" className={classes.tdSaveWork}>
                        <Typography component="div" align="justify">
                                <TextField 
                                inputRef={ref => { this.txtWorkName = ref; }}
                                    id="outlined-basic"
                                    label="Add more work"
                                    variant="outlined"
                                    size="small"
                                    helperText={this.state.workName}
                                    />

                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    align="center"
                                    onClick={this.handleSaveWork}
                                    className={classes.btnSaveWork}>SAVE WORK</Button>
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }
});

export {
    Header,
    Body
}