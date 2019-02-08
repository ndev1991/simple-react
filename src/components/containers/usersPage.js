import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/usersActions';

import UserCard from '../UserCard';

export class UsersPage extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const { persons } = users;

    return (
      <div>
        {persons.map(person => <UserCard key={person.id} person={person} />)}
      </div>
    );
  }
}

UsersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
