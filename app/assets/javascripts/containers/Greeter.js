import {connect} from 'react-redux'
import {setName} from '../actions/greeter'
import Greeter from '../components/Greeter'

const mapStateToProps = (state) => ({
    name: state.name,
});
const mapDispatchToProps = (dispatch) => ({
    onSetName: (name) => dispatch(setName(name))
});

const GreeterCont = connect(mapStateToProps, mapDispatchToProps)(Greeter);
export default GreeterCont;
