import React from 'react';
import {Button} from 'reactstrap'

const PostsPerPage = (props) => {
    const array = [3,5,10]
    return (
    <nav>
        <ul className="pagination ppp">
            {array.map(number => (
                <Button onClick={() => props.changePPP(number)} className="pageLink ppp" key={number}>
                    {number}
                </Button>
            ))}
        </ul>
    </nav>
)}

export default PostsPerPage;