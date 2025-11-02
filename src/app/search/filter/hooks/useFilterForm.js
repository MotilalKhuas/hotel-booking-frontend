import { SEARCH_PARAMS_KEYS } from '@/config/app.config';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'

const useFilterForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const form = useForm({
        defaultValues : {
            starCategory : searchParams.getAll(SEARCH_PARAMS_KEYS.STAR_CATEGORY).map(Number), 
            priceRange : searchParams.getAll(SEARCH_PARAMS_KEYS.PRICE_RANGE)
        }
    });

    useEffect(() => {
        form.reset({
            starCategory: searchParams.getAll(SEARCH_PARAMS_KEYS.STAR_CATEGORY).map(Number),
            priceRange: searchParams.getAll(SEARCH_PARAMS_KEYS.PRICE_RANGE),
        });
    }, [searchParams, form]);

    function clearSearchParams(){
        searchParams.delete(SEARCH_PARAMS_KEYS.STAR_CATEGORY);
        searchParams.delete(SEARCH_PARAMS_KEYS.PRICE_RANGE);
    }

    function clearFilters(){
        form.reset({
            starCategory : [],
            priceRange : [],
        })
        clearSearchParams();
        setSearchParams(searchParams);
    }

    function filterChangeHandler(){
        const {starCategory, priceRange} = form.getValues();
        clearSearchParams();
        starCategory.forEach((star)=>{
            searchParams.append(SEARCH_PARAMS_KEYS.STAR_CATEGORY, star);
        });
        priceRange.forEach((price)=>{
            searchParams.append(SEARCH_PARAMS_KEYS.PRICE_RANGE, price);
        });
        setSearchParams(searchParams);
    }

    return ({form, clearFilters, filterChangeHandler});
}

export default useFilterForm