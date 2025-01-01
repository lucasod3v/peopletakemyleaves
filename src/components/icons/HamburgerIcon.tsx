import React from "react";

interface HamburgerIconProps {
    color?: string;
    height?: number;
    width?: number;
}

export default function HamburgerIcon({ color, height, width }: HamburgerIconProps) {
    return (
        <svg
            width={width || 50}
            height={height || 50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.33333 10.417C7.18275 10.417 6.25 11.3497 6.25 12.5003C6.25 13.6509 7.18275 14.5837 8.33333 14.5837H41.6667C42.8173 14.5837 43.75 13.6509 43.75 12.5003C43.75 11.3497 42.8173 10.417 41.6667 10.417H8.33333ZM14.5833 25.0003C14.5833 23.8497 15.5161 22.917 16.6667 22.917H41.6667C42.8173 22.917 43.75 23.8497 43.75 25.0003C43.75 26.1509 42.8173 27.0837 41.6667 27.0837H16.6667C15.5161 27.0837 14.5833 26.1509 14.5833 25.0003ZM27.0833 37.5003C27.0833 36.3497 28.016 35.417 29.1667 35.417H41.6667C42.8173 35.417 43.75 36.3497 43.75 37.5003C43.75 38.6509 42.8173 39.5837 41.6667 39.5837H29.1667C28.016 39.5837 27.0833 38.6509 27.0833 37.5003Z"
                fill={color || "white"}
            />
        </svg>
    );
}
