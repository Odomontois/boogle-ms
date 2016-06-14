import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SnackBar from 'material-ui/Snackbar'


const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
    paper: {
        height: 800,
        width: 500,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    }
};

export default class Greeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            greeting: false,
        };
    }

    textChange = (evt) => this.setState({
        name: evt.target.value
    });


    greetClose = () => this.setState({
        greeting: false
    });


    greetOpen = () => {
        this.setState({
            greeting: true
        });
        this.props.onSetName(this.state.name);
    };

    static propTypes = {
        onSetName: React.PropTypes.func.isRequired,
        name: React.PropTypes.string,
    };

    render() {
        return (
            <div style={styles.container}>
                <Paper style={styles.paper} zDepth={1}>
                    <h1> My Form for {this.props.name} </h1>
                    <TextField floatingLabelText="Your name"
                               onChange={this.textChange}
                               value={this.state.name}/>
                    <RaisedButton label="Greet" onClick={this.greetOpen}/>
                    <SnackBar open={this.state.greeting}
                              message={"Greetings, " + this.state.name + "!"}
                              autoHideDuration={4000}
                              onRequestClose={this.greetClose}/>
                </Paper>
            </div>
        )
    }
}