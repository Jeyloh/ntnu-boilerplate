import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstagram } from '../actions/instagram-action';
import { PersonalEntry } from './PersonalEntry';
import { LoadingSpinner } from './LoadingSpinner';
import IntroText from './IntroText';
import { ProfileCard } from './ProfileCard';
import personalLogo from '../profile.png';

class PageContent extends Component {
    componentDidMount() {
        this.props.fetchInstagram();
    }

    render() {
        console.log(this.props);
        if (this.props.user) {
            return (
                <div className="content">
                    <IntroText />
                    <div className="personal-data-wrapper">
                        <ProfileCard
                            color="rgb(255, 0, 225)"
                            description={this.props.user.description}
                            age={this.props.user.age}
                            name={this.props.user.name}
                            profileImgSrc={personalLogo}
                        />
                        <PersonalEntry
                            color="rgb(255, 100, 100)"
                            dataArray={this.props.user.projectExperience}
                            category="project"
                        />
                        <PersonalEntry
                            color="rgb(100, 255, 100)"
                            dataArray={this.props.user.workExperience}
                            category="work"
                        />
                        <PersonalEntry
                            color="rgb(100, 100, 255)"
                            dataArray={this.props.user.hobbies}
                            category="hobby"
                        />
                    </div>
                    <div className="content">
                        Jørgens insta
                        <ul className="instagram-bilder">
                            {this.props.images.data
                                ? this.props.images.data.graphql.user.edge_owner_to_timeline_media.edges.map(
                                      image => {
                                          return (
                                              <li>
                                                  <img
                                                      src={
                                                          image.node.display_url
                                                      }
                                                      alt=""
                                                      width="200"
                                                  />
                                              </li>
                                          );
                                      }
                                  )
                                : null}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="login-container">
                    <h1>Please log in to see your content</h1>
                    {this.props.loading ? (
                        <LoadingSpinner />
                    ) : (
                        <button onClick={this.props.loginUser}>Log in</button>
                    )}
                </div>
            );
        }
    }
}

export default connect(
    state => {
        return {
            images: state.instagramReducer
        };
    },
    {
        fetchInstagram
    }
)(PageContent);
