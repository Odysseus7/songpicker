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
                        <div className="ui button primary">Select</div>
                    </div>
                    <div className="content">
                        {song.title}
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
    return {songs: state.songs};
}

export default connect(mapStateToProps, { selectSong })(SongList);