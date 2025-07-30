'use client'

import React, { useCallback, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface Props {
    pageCount: number
    onPageChange: (selected: number) => void;
    initialPage?: number;
}

const HandlePagination: React.FC<Props> = ({ pageCount, onPageChange, initialPage = 0 }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Create a memoized function to update URL to avoid unnecessary re-renders
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    // Handle page changes with proper client-side navigation
    const handlePageClick = (selectedItem: { selected: number }) => {
        // Call the provided onPageChange handler
        onPageChange(selectedItem.selected);
        
        // Update URL with Next.js router to ensure consistent behavior in all environments
        const query = createQueryString('page', (selectedItem.selected + 1).toString());
        router.push(`${pathname}?${query}`, { scroll: false });
    };

    // Handle browser back/forward navigation
    useEffect(() => {
        const pageParam = searchParams.get('page');
        const currentPageFromUrl = pageParam ? parseInt(pageParam) - 1 : 0;
        
        // Only trigger onPageChange if the page from URL is different than current page
        if (currentPageFromUrl !== initialPage) {
            onPageChange(currentPageFromUrl);
        }
    }, [searchParams, onPageChange, initialPage]);

    return (
        <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            forcePage={initialPage}
            renderOnZeroPageCount={null}
        />
    );
};

export default HandlePagination;