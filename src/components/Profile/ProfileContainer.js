import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  setUserProfile,
  getProfile,
  updateStatus,
  getStatus,
} from '../../redux/reducers/profile-reducer';
import DefaultLoader from '../common/loaders/DefaultLoader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.id;
    if (!userId) {
      userId = 0;
    }
    this.props.getStatus(userId);
    this.props.getProfile(userId);
  }

  render() {
    if (this.props.profile === null) {
      return <DefaultLoader />;
    }

    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

/**
 * withRouter is a higher-order component (HOC).
 * It passes updated match, location, and history props to the wrapped component whenever it renders.
 * we can extracts URL params from match props (/profile/:id)
 *
 * Now we have connect -> withRouter -> ProfileContainer -> Profile
 */

// This is the same as connect(....)(withRouter(ProfileContainer))
// compose function works like Array.prototype.reduceRight
export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    updateStatus,
    getStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
