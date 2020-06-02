import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import bg from './../../image.png';

const Profile = (props) => {
    return (
        <div>
            <div>
                <img src={ bg } alt="" />
            </div>

            <div className={ s.profileWrapper }>
                <div>ava+desc</div>
                <MyPosts
                    newPostText={ props.profilePage.newPostText }
                    posts={ props.profilePage.posts }
                    dispatch={ props.dispatch }
                />
            </div>

        </div>
    )
}

export default Profile;