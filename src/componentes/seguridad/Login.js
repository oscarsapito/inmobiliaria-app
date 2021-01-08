import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LockOutLineIcon from "@material-ui/icons/LockOutlined";


const style = {
    paper: {
      marginTop: 9,
      display: "flex", //uno tras otro
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
        margin: 5,
        backgroundColor: "red",
    },
    form: {
        witdth : "100%",
        marginTop : 8,
    }
}


class Login extends Component {
    state = {
        firebase : null,
        usuario: {
            email : '',
            password : '',
        }
    }

    onChange = e =>{
        let usuario = Object.assign({}, this.state.usuario);//con let captura el valor de usuario
        usuario[e.target.name] = e.target.value;            //
        this.setState({
            usuario: usuario
        })      
    }




    render() {
        return (
            <Container maxWidth ="xs" >
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutLineIcon></LockOutLineIcon>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingrese Usuario
                    </Typography>
                    <form style={style.form}>
                        <TextField variant="outlined" label="Email" name="email" fullWidth margin="normal" onChange={this.onChange} value={this.state.usuario.email}/>
                        <TextField variant="outlined" label="password" type="password" name="password" fullWidth margin="normal" onChange={this.onChange} value={this.state.usuario.password}/>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Enviar
                        </Button>
                        
                    </form>
                </div>
            </Container>
        );
    }
}

export default Login;