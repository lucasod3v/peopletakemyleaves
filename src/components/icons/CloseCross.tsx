import React from "react";

interface CloseCrossProps {
    color?: string;
    width?: number;
    height?: number;
}

export default function CloseCross({ color, width, height }: CloseCrossProps) {
    return (
        <svg
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.493 1.92C19.8835 1.52947 19.8835 0.896308 19.493 0.505784C19.1025 0.11526 18.4693 0.11526 18.0788 0.505784L9.99911 8.58545L1.92146 0.507808C1.53094 0.117284 0.897773 0.117284 0.507249 0.507808C0.116724 0.898332 0.116725 1.5315 0.507249 1.92202L8.5849 9.99967L0.507283 18.0773C0.116758 18.4678 0.116759 19.101 0.507283 19.4915C0.897808 19.882 1.53097 19.882 1.9215 19.4915L9.99911 11.4139L18.0787 19.4935C18.4693 19.884 19.1024 19.884 19.493 19.4935C19.8835 19.103 19.8835 18.4698 19.493 18.0793L11.4133 9.99967L19.493 1.92Z"
                fill={color || "white"}
            />
        </svg>
    );
}
