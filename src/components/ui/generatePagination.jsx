import React from 'react'
import { PaginationButton, PaginationEllipsis } from './pagination';

const generatePagination = (currentPage, totalPage, onPageChange = ()=>{}, className="") => {

    const pages = [];

    if(totalPage <= 6){
        for(let i = 1; i <= totalPage; i++){
            pages.push(
                <PaginationButton
                    key={i}
                    isActive={i===currentPage}
                    className={className}
                    onClick = {()=>onPageChange(i)}
                >
                    {i}
                </PaginationButton>
            )
        }
    }
    else{
        for(let i = 1; i <= 2; i++){
            pages.push(
                <PaginationButton
                    key={i}
                    isActive={i===currentPage}
                    className={className}
                    onClick = {()=>onPageChange(i)}
                >
                    {i}
                </PaginationButton>
            )
        }
        if(currentPage > 2 && currentPage < totalPage - 1){
            pages.push(
                <PaginationEllipsis 
                    className={className} 
                    key={'ellipsis'}
                />
            )
            pages.push(
                <PaginationButton
                    key={currentPage}
                    isActive={true}
                    className={className}
                    onClick = {()=>onPageChange(currentPage)}
                >
                    {currentPage}
                </PaginationButton>
            )
        }
        pages.push(
            <PaginationEllipsis 
                className={className} 
                key={'ellipsis'}
            /> 
        )
        for(let i = totalPage-1; i <= totalPage; i++){
            pages.push(
                <PaginationButton
                    key={i}
                    isActive={i===currentPage}
                    className={className}
                    onClick = {()=>onPageChange(i)}
                >
                    {i}
                </PaginationButton>
            )
        }
    }

    return (pages)
}

export default generatePagination