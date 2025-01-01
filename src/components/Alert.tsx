"use client";

import React from 'react';

interface AlertProps {
    type: 'alert' | 'warning' | 'info';
    title: string;
    children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, title, children }) => {
    let bgColor, borderColor, textColor;

    switch (type) {
        case 'alert':
            bgColor = 'bg-red-100';
            borderColor = 'border-red-500';
            textColor = 'text-red-700';
            break;
        case 'warning':
            bgColor = 'bg-yellow-100';
            borderColor = 'border-yellow-500';
            textColor = 'text-yellow-700';
            break;
        case 'info':
            bgColor = 'bg-green-100';
            borderColor = 'border-green-500';
            textColor = 'text-green-700';
            break;
        default:
            bgColor = 'bg-yellow-100';
            borderColor = 'border-yellow-500';
            textColor = 'text-yellow-700';
    }

    return (
        <div className={`${bgColor} border-l-4 ${borderColor} ${textColor} p-2 pl-4`} role="alert">
            <p className="font-bold m-2">{title}</p>
            <p className="m-2">{children}</p>
        </div>
    );
};

export default Alert;