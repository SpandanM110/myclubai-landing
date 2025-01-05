import { ButtonProps } from "@types";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  const handleClick = () => {
    // Option A: Same tab
    window.location.href = "https://forms.gle/m96gVBqQRxTFQGCC7";

    // Option B: New tab
    // window.open("https://forms.gle/m96gVBqQRxTFQGCC7", "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer`}
    >
      Try Our Services
    </button>
  );
};

export default Button;
