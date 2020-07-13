import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getProfile } from '../../redux/profile-reducer';
import DefaultLoader from '../common/loaders/DefaultLoader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.id;
    if (!userId) {
      userId = 0;
    }
    this.props.getProfile(userId);
  }

  render() {
    if (this.props.profile === null) {
      return <DefaultLoader />;
    }

    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

/**
 * withRouter is a higher-order component (HOC).
 * It passes updated match, location, and history props to the wrapped component whenever it renders.
 * we can extracts URL params from match props (/profile/:id)
 *
 * Now we have connect -> withRouter -> ProfileContainer -> Profile
 */

export default connect(mapStateToProps, {
  setUserProfile,
  getProfile,
})(withRouter(ProfileContainer));
