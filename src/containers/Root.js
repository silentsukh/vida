import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
	return state;
}
const Root = connect(mapStateToProps)(App);

export default Root;