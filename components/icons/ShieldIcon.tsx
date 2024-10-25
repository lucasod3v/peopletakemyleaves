import React from "react";

interface ShieldIconProps {
    color?: string;
}

export default function LinkArrow({ color }: ShieldIconProps) {
    return (
        <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.125 24.7396C7.125 17.1453 7.125 13.3482 8.0216 12.0707C8.9182 10.7933 12.4885 9.57115 19.6292 7.12688L20.9896 6.6612C24.7118 5.38707 26.573 4.75 28.5 4.75C30.427 4.75 32.2882 5.38707 36.0104 6.6612L37.3708 7.12688C44.5115 9.57115 48.0818 10.7933 48.9784 12.0707C49.875 13.3482 49.875 17.1453 49.875 24.7396C49.875 25.8867 49.875 27.1306 49.875 28.4795C49.875 41.8699 39.8075 48.368 33.4909 51.1273C31.7775 51.8758 30.9207 52.25 28.5 52.25C26.0793 52.25 25.2225 51.8758 23.5091 51.1273C17.1925 48.368 7.125 41.8699 7.125 28.4795C7.125 27.1306 7.125 25.8867 7.125 24.7396Z"
                stroke={color || "black"}
                strokeWidth="3.5625"
            />
            <path
                d="M35.625 28.5001L28.5 28.5001M28.5 28.5001L21.375 28.5001M28.5 28.5001L28.5 21.375M28.5 28.5001L28.5 35.625"
                stroke={color || "black"}
                strokeWidth="3.5625"
                strokeLinecap="round"
            />
        </svg>
    );
}