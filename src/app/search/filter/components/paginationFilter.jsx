import React from 'react'
import usePagination from '../hooks/usePagination'
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationFilter = ({totalData}) => {
  
  const {currentPage, totalPage, pages, onPageChange} = usePagination(totalData);

  return (
    <Pagination>
        <PaginationContent>
          {
            totalPage ? (
              <PaginationPrevious
                className="h-8 text-xs"
                disabled = {currentPage <= 1}
                onClick = {()=>onPageChange(currentPage-1)}
              >
                Previous
              </PaginationPrevious>
            ) : null
          }
          {pages}
          {
            totalPage ? (
              <PaginationNext
                className="h-8 text-xs"
                disabled = {currentPage >= totalPage}
                onClick = {()=>onPageChange(currentPage+1)}
              >
                Previous
              </PaginationNext>
            ) : null
          }
        </PaginationContent>
      </Pagination>
  )
}

export default PaginationFilter