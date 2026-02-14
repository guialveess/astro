import { Facehash as FacehashIcon } from "facehash";

export default function Facehash({ name, size, class: className }: { name: string; size: number; class?: string }) {
    return (
        <div className={`flex flex-col items-center gap-2 ${className || ''}`}>
            <FacehashIcon name={name} size={size} />
            <span className="text-sm text-black">{name}</span>
        </div>
    );
}