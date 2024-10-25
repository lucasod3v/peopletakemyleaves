import React from 'react';

interface LinkArrowProps {
    color?: string;
}

export default function LinkArrow({ color }: LinkArrowProps) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.32812 4.07812L10.5469 9L6.32812 13.9219"
                stroke={color || "white"}
                strokeWidth="1.6875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
    }