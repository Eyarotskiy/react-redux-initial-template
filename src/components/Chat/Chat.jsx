import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, addMessage } from '@app/actions/actions';
import './Chat.less';
import React, { PureComponent } from 'react';

class Chat extends PureComponent {
	render() {
		return (
			<div>
				<button onClick={this.props.addUser}>Add new user</button>
				<button onClick={() => this.props.addMessage('Lorem Ipsum')}>Add new message</button>
				<p>{this.props.users}</p>
				<p>{this.props.messages}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.reducerOne,
		messages: state.reducerTwo
	}
};

const mapDispatchToProps = dispatch => bindActionCreators({
	addUser,
	addMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
