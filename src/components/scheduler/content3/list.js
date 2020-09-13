import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Paper, 
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import styles from './styles/listStyle';
import { withStyles } from '@material-ui/core';

class ListHeader extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid item lg={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table}  size="small" aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="none" rowSpan="2" align="center" style={{width: "150px"}}>WORK</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">MON</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">TUE</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">WED</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">THU</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">FRI</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">SAT</TableCell>
                                    <TableCell padding="none" colSpan="2" align="center">SUN</TableCell>
                                    <TableCell padding="none" align="center" rowSpan="2" className={classes.total}>TOTAL</TableCell>
                                    <TableCell padding="none" align="center" rowSpan="2" className={classes.des}>DESCRIPTION</TableCell>
                                </TableRow>
                                <TableRow>
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
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ListHeader);