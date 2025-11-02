import generatePagination from '@/components/ui/generatePagination';
import { SEARCH_PARAMS_KEYS, SEARCH_RESULT_PAGE_LIMIT } from '@/config/app.config';
import { useSearchParams } from 'react-router';

const usePagination = (totalData) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get(SEARCH_PARAMS_KEYS.PAGE)) || 1;
    const pageSize = searchParams.get(SEARCH_PARAMS_KEYS.SIZE) || SEARCH_RESULT_PAGE_LIMIT;
    
    const totalPage = Math.ceil(totalData/pageSize)
    
    function onPageChange(page){
        searchParams.set(SEARCH_PARAMS_KEYS.PAGE,page);
        setSearchParams(searchParams);
    }

    const pages = generatePagination(
        currentPage, 
        totalPage, 
        onPageChange
    )

    return ({totalPage, currentPage, onPageChange, pages});
}

export default usePagination