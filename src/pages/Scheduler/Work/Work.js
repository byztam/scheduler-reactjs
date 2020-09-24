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
    render() {
        const { classes } = this.props;
        return (
            <TableBody>
                <TableRow>
                    <TableCell padding="none" align="left">001-111-2020</TableCell>
                    <TableCell padding="none" align="left">3:00</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left">2:00</TableCell>
                    <TableCell padding="none" align="left">test</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="center">20:00</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding="none" align="left">001-111-2020</TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                    <TableCell padding="none" align="center"></TableCell>
                    <TableCell padding="none" align="left"></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan="17" className={classes.tdSaveWork}>
                        <Typography component="div" align="justify">
                    
                                <TextField 
                                    id="outlined-basic"
                                    label="Add more work"
                                    variant="outlined"
                                    size="small"/>

                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    align="center"
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