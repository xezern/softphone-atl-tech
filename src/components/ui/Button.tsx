import React, { useState } from 'react';
interface IButtonProps {
    classname?: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode,
    id: string;
    name: string;
    onClick?: () => void;
}

export default function Button({ classname, icon, activeIcon, id, name, onClick }: IButtonProps) {
    const [active, setActive] = useState(false)
    function handleClickButton() {
        onClick?.();
        setActive(!active)
    }

    return (
        <button
            onClick={handleClickButton}
            id={id}
            name={name}
            className={`grid place-items-center p-2 shadow-2xl cursor-pointer border border-[#2f2e2e65] ${classname}`}
        >
            {(active && activeIcon) ? activeIcon : icon}
        </button>
    );
}