import React, { useState, useEffect } from 'react';
import Board from '../Pages/board/Board';
import Home from '../Pages/Home/Home';
import Announcement from '../Pages/announcement/Announcement';

const Navigation = () => {
    const [page, setPage] = useState(null);

    useEffect(() => {
        window.onhashchange = () => {
            setPage(window.location.hash);
        };
    }, []);

    const renderPage = () => {
        switch(page) {
            case "#home":
                return <Home />;
            case "#board":
                return <Home />;
            case "#announcement":
                return <Announcement />;
            default:
                return null;
        }
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        position: 'relative'
    };

    const listItemStyle = {
        cursor: 'pointer',
        letterSpacing: '0.3em',
        marginLeft: '3em',
        marginRight: '3em',
        position: 'relative',
    };

    return (
        <div>
            <nav>
                <ul style={navStyle}>
                    <li style={listItemStyle} onClick={() => window.location.hash = '#home'}></li>
                    <li style={listItemStyle} onClick={() => window.location.hash = '#board'}></li>
                    <li style={listItemStyle} onClick={() => window.location.hash = '#announcement'}></li>
                </ul>
            </nav>
            {renderPage()}
        </div>
    );
};

export default Navigation;
