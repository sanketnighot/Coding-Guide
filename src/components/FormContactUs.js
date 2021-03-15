import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormContactUs() {
    const classes = useStyles();
    const [value, setValue] = React.useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" align="center">
            <div class="col">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Enter Your Name"
                    multiline
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    autoFocus
                />
                <br />
                <TextField
                    id="outlined-textarea"
                    label="Enter E-Mail Id Here"
                    placeholder="Placeholder"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Enter Message Here"
                    rows={7}
                    cold={18}
                    variant="outlined"
                />
                <br /><br/>
                <Button
                    variant="outlined"
                    className={classes.button}
                >
                    Send
      </Button>
            </div>
        </form>
    );
}
