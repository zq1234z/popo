import React, { useState } from 'react';

const Navigation = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState({home: false, board: false, announcement: false});
    const [pageTitle, setPageTitle] = useState('');

    const handleMouseEnter = (menu) => {
        setIsDropdownVisible({...isDropdownVisible, [menu]: true});
    };

    const handleMouseLeave = (menu) => {
        setIsDropdownVisible({...isDropdownVisible, [menu]: false});
    };

    const handleClick = (path, title) => {
        window.location.href = path;
        setPageTitle(title);
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        position: 'relative',
    };

    const listItemStyle = {
        cursor: 'pointer',
        letterSpacing: '0.3em',
        marginLeft: '3em',
        marginRight: '3em',
        position: 'relative',
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: '1',
        backgroundColor: 'rgba(249, 249, 249, 0.5)',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px 20px',
    };

    const dropdownItemStyle = {
        cursor: 'pointer',
        fontSize: '0.7em',
        letterSpacing: 'normal',
        textAlign: 'left',
        lineHeight: '2em',
        whiteSpace: 'nowrap',
    };

    return (
        <div>
            <h1>{pageTitle}</h1>
            <nav>
                <ul style={navStyle}>
                    <li style={listItemStyle} onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={() => handleMouseLeave('home')}>
                        <span>홈</span>
                        {isDropdownVisible.home && (
                            <div style={dropdownStyle}>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/home1', '홈 세부 내용1')}>홈 세부 내용1</div>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/home2', '홈 세부 내용2')}>홈 세부 내용2</div>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/home3', '홈 세부 내용3')}>홈 세부 내용3</div>
                            </div>
                        )}
                    </li>
                    <li style={listItemStyle} onMouseEnter={() => handleMouseEnter('board')} onMouseLeave={() => handleMouseLeave('board')}>
                        <span>게시판</span>
                        {isDropdownVisible.board && (
                            <div style={dropdownStyle}>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/board1', '게시판 세부 내용1')}>게시판 세부 내용1</div>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/board2', '게시판 세부 내용2')}>게시판 세부 내용2</div>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/board3', '게시판 세부 내용3')}>게시판 세부 내용3</div>
                            </div>
                        )}
                    </li>
                    <li style={listItemStyle} onMouseEnter={() => handleMouseEnter('announcement')} onMouseLeave={() => handleMouseLeave('announcement')}>
                        <span>공지사항</span>
                        {isDropdownVisible.announcement && (
                            <div style={dropdownStyle}>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/announcement1', '공지사항 세부 내용1')}>공지사항 세부 내용1</div>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/announcement2', '공지사항 세부 내용2')}>공지사항 세부 내용2</div>
                                <div style={dropdownItemStyle} onClick={() => handleClick('/announcement3', '공지사항 세부 내용3')}>공지사항 세부 내용3</div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
