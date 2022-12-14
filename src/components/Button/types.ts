export interface IButtonProps {
    title: string;
    type?: "button" | "reset" | "submit" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disable?:boolean;
}