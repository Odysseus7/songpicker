import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class SongDetail extends Component {
    renderDetail() {
        if(this.props.selectedSong) {
            return (
                <div className="ui special cards">
                    <div className="card">
                        <div className="blurring dimmable image">
                        <img src={this.props.selectedSong.src} />
                        </div>
                        <div className="content">
                        <h1 className="header">{this.props.selectedSong.title}</h1>
                        <div className="meta">
                            <span className="date">Song duration: {this.props.selectedSong.duration}</span>
                        </div>
                        </div>
                    </div>
                </div>
            );
            
        }
        
    }

    render () {
        return (
            <>
                {this.renderDetail()}
            </>
        )
    }
    
}



const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);
