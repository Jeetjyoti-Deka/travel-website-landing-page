import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ variant, type, title, icon }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};
export default Button;
