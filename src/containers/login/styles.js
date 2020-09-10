import bg from './../../images/bg-01.jpg'

const styles = () => ({
    backgroud: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    formlogin: {
        width: '370px',
        boxSizing: 'boder-box',
        background: '#fff',
        padding: '60px 55px 20px 55px',
        borderRadius: '10px',
        margin: '15px'
    },
    formtitle: {
        paddingBottom: '40px',
        fontWeight: 'bold',
        display: 'block',
        fontSize: '35px',
        color: '#333333',
        textAlign: 'center'
    },
    text: {
        marginTop: 30,
        paddingTop: 10
    },
    labelText: {
        fontSize: 20
    },
    btnlogin: {
        marginTop: 20,
        height: 50,
        borderRadius: 30
    },
    validcolor: {
        color: '#e62528'
    },
    msglogin: {
        textAlign: 'center',
        color: 'red'
    }
});

export default styles;