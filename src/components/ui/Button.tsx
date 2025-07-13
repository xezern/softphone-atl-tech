import React, { useState } from 'react';

interface IButtonProps {
    classname?: string;
    icon: React.ReactNode;
    activeColor?: string,
    id: string;
    name: string;
    onClick?: () => void;
}

export default function Button({ classname, icon, activeColor, id, name, onClick }: IButtonProps) {
    const [active, setActive] = useState(false)
    function handleClickButton() {
        onClick?.();
        setActive(!active)
    }

    return (
        <button
            onClick={handleClickButton}
            id={id}
            aria-pressed={active}
            name={name}
            style={{
                background: active ? activeColor : ''
            }}
            className={`grid place-items-center transition-all duration-500 p-2 shadow-2xl cursor-pointer border border-[#2f2e2e65] ${classname}`}
        >
            {icon}
        </button>
    );
}