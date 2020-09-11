import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import { Resource, Message } from '../../resources/resource.vi';
import { stringFormat } from '../../utils/cfuntion';
import { ApiUrl } from './../../constants/apiConfig';
import callApi from './../../utils/callApi';
import packageConfig from './../../../package.json';


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            validUser: "",
            validPasword: "",
            validLogin: ""
        }
    }
    login_Click = () => {
        var isValid = true;
        var user = this.txtUser.value;
        var password = this.txtPassword.value;
        this.setState({
            validUser: "",
            validPasword: "",
            validLogin: ""
        });
        if(user === '') {
            this.setState({
                validUser: stringFormat(Message.Common.Msg_Required, [Resource.login.lblUername])
            });
            isValid = false;
        }
        if(password === '') {
            this.setState({
                validPasword: stringFormat(Message.Common.Msg_Required, [Resource.login.lblPassword])
            });
            isValid = false;
        }
        
        if(!isValid) return;

        callApi(ApiUrl.Login, 'POST', {
            'username': user,
            'password': password
        }).then(resp => {
            if(resp !== undefined) {
                var data = resp.data;
                if(data.status === 1) {
                    this.setState({
                        validLogin: data.msg
                    })
                    return;
                }
                window.location.href = `/${packageConfig.name}/scheduler`;
            }
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.backgroud}>
                <div className={classes.formlogin}>
                    <span className={classes.formtitle}>{Resource.login.lblLoginTitle}</span>
                    <TextField
                        className={classes.text}
                        inputRef={ref => { this.txtUser = ref; }}
                        id="txtUsername"
                        label={Resource.login.lblUername}
                        helperText={this.state.validUser}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PermIdentityOutlinedIcon color="primary" />
                                </InputAdornment>
                            )
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelText
                            }
                        }}
                        FormHelperTextProps={{
                            classes: {
                                root: classes.validcolor
                            }
                        }}
                    />

                    <TextField
                        className={classes.text}
                        inputRef={ref => { this.txtPassword = ref; }}
                        id="txtPassword"
                        label={Resource.login.lblPassword}
                        type="password"
                        helperText={this.state.validPasword}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon color="primary" />
                                </InputAdornment>
                            )
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.labelText
                            }
                        }}
                        FormHelperTextProps={{
                            classes: {
                                root: classes.validcolor
                            }
                        }}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        className={classes.btnlogin}
                        onClick={() => {this.login_Click()}}>
                            {Resource.login.btnLogin}
                    </Button>

                    <p className={classes.msglogin}>{this.state.validLogin}</p>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);