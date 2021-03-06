import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, InputAdornment, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { connect } from 'react-redux';

import styles from './Index.style';
import { Resource, Message } from '../../assets/resources/resource';
import { stringFormat } from '../../helpers/cfuntion';
import { ApiUrl } from '../../constants/apiConfig';
import callApi from '../../helpers/callApi';
import * as StoreAction from '../../store/actions/userInfo';
import * as localStore from '../../store/localStorages';
import userInfoModel from '../../store/stateModels/userInfo'

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
                validUser: stringFormat(Message.Common.MsgRequired, [Resource.login.lblUername])
            });
            isValid = false;
        }
        if(password === '') {
            this.setState({
                validPasword: stringFormat(Message.Common.MsgRequired, [Resource.login.lblPassword])
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

                var userInfo = userInfoModel;
                userInfo.UserName = data.data.UserName;
                userInfo.FullName = data.data.FullName;
                userInfo.Token = data.data.Token;
                userInfo.TokenExpired = data.data.TokenExpired;
                this.props.setUserInfo(userInfo);

                localStore.put('userInfo', JSON.stringify(userInfo));
                
                const { history } = this.props;
                if(history) {
                    history.push('/scheduler');
                }
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

const mapStateToProps = (state) => {
    return {
        todos: state.userInfo
    }
}

const maptDispatchToProps = (dispatch, props) => {
    return {
        setUserInfo: (data) => {
            dispatch(StoreAction.userInfo(data));
        }
    }
}

export default connect(mapStateToProps, maptDispatchToProps)(withStyles(styles)(withRouter(Login)));