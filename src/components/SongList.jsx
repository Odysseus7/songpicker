import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component {
    renderList = () => {
        console.log(this.props);
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div className="ui button primary" onClick ={() => this.props.selectSong(song)}>Select</div>
                    </div>
                    <div className="content">
                        {song.title} &ensp;
                        {  
                            this.props.selectedSong.title === song.title ? <i className="hand point left icon"></i> : null
                        }
                        <br />
                        {song.duration}
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    };
}

export default connect(mapStateToProps, { selectSong })(SongList);