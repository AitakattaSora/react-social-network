import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import DefaultLoader from '../common/loaders/DefaultLoader';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3004/users/2`).then((response) => {
      console.log(response.data);
      this.props.setUserProfile(response.data);
    });
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

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
