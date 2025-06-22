import React from 'react';
import {Button} from 'reactstrap';
import './pagination.css';

const Pagination = ({ showPerPage, postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumber = [];
    const totalPages = Math.ceil(totalPosts/postsPerPage)
    for (let i=1; i<=totalPages; i++) {
        pageNumber.push(i);
    }



    return (
        <div className="row" >
            <div className='col-lg-6 col-md-6 col-sm-6' style={{display: "inherit", flex: 1, alignItems: "center"}}>
                <span style={{display: 'inline-block'}}>Page: <b>{currentPage}/{Math.ceil(totalPosts / postsPerPage)}</b> - Found <b>{totalPosts}</b> vehicles </span>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6' style={{display: "inherit", flex: 1, justifyContent: "right"}}>
                <nav style={{padding: 0, margin: 0}}>
                    <ul className="pagination" style={{padding: 0, margin: 0}}>
                        {pageNumber.map(number => (
                            <Button onClick={() => paginate(number)} className="pageLink" key={number}>
                                {number}
                            </Button>
                        ))}
                        {showPerPage ??
                        (<select name="pagination" className="selective-pagination" onChange={(e) => paginate(e.target.value)}>
                            {
                            pageNumber.map(number => (
                                <option className="pageLink selective-pagination" value={number} key={number}>
                                    {number}
                                </option>
                            ))}
                        </select>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination;