'use client'

import React from 'react';

interface Props {
    pageCount: number;
    onPageChange: (selected: number) => void;
    currentPage?: number; // Make this optional
    initialPage?: number; // Keep this for backward compatibility
}

const HandlePagination: React.FC<Props> = ({ 
    pageCount, 
    onPageChange, 
    currentPage, 
    initialPage = 0 
}) => {
    // Use currentPage if provided, otherwise fall back to initialPage (0-based) + 1
    const activePage = currentPage !== undefined ? currentPage : initialPage + 1;
    
    if (pageCount <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, activePage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (activePage > 1) {
        pages.push(
            <button
                key="prev"
                onClick={() => {
                    const newPage = activePage - 1;
                    // If using old 0-based system, convert back
                    const pageToPass = currentPage !== undefined ? newPage : newPage - 1;
                    onPageChange(pageToPass);
                }}
                className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
            >
                &lt;
            </button>
        );
    }

    // First page
    if (startPage > 1) {
        pages.push(
            <button
                key={1}
                onClick={() => {
                    const pageToPass = currentPage !== undefined ? 1 : 0;
                    onPageChange(pageToPass);
                }}
                className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
            >
                1
            </button>
        );
        if (startPage > 2) {
            pages.push(<span key="dots1" className="px-2">...</span>);
        }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => {
                    const pageToPass = currentPage !== undefined ? i : i - 1;
                    onPageChange(pageToPass);
                }}
                className={`px-3 py-2 mx-1 border rounded ${
                    i === activePage
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:bg-gray-100'
                }`}
            >
                {i}
            </button>
        );
    }

    // Last page
    if (endPage < pageCount) {
        if (endPage < pageCount - 1) {
            pages.push(<span key="dots2" className="px-2">...</span>);
        }
        pages.push(
            <button
                key={pageCount}
                onClick={() => {
                    const pageToPass = currentPage !== undefined ? pageCount : pageCount - 1;
                    onPageChange(pageToPass);
                }}
                className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
            >
                {pageCount}
            </button>
        );
    }

    // Next button
    if (activePage < pageCount) {
        pages.push(
            <button
                key="next"
                onClick={() => {
                    const newPage = activePage + 1;
                    const pageToPass = currentPage !== undefined ? newPage : newPage - 1;
                    onPageChange(pageToPass);
                }}
                className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
            >
                &gt;
            </button>
        );
    }

    return (
        <div className="flex items-center justify-center">
            {pages}
        </div>
    );
};

export default HandlePagination;
