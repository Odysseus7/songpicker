import React, { Component } from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';



const App = () => {
    
    return (
        <div>
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SongDetail />
                    </div>
                </div>
            </div>
            
        </div>
    );
    
}

export default App;