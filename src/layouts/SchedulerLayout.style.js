import bg from '../assets/images/mainBackground.jpg'

const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundReplace: 'none'
      },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        //...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1
    },
});

export default styles;