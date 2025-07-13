interface IButtonProps {
    classname?: string,
    icon: React.ReactNode,
    id: string,
    name: string,
    onClick?: () => void;
}

export default function Button({ classname, icon, id, name, onClick }: IButtonProps) {

    return (
        <button
            onClick={onClick}
            id={id}
            name={name}
            className={`grid place-items-center p-2 shadow-2xl cursor-pointer border border-[#2f2e2e65] ${classname}`}
        >
            {icon}
        </button>
    )
}
