import cn from "classnames";
import styles from "./Button.module.scss";

export default function Button({
  icon,
  type = "fill",
  text,
  variant = "primary",
  className,
  onClick,
}) {
  const clickHandler = () => onClick && onClick();

  const buttonClassnames = cn(
    styles.Button,
    styles[`Button-${type}`],
    styles[`Button-${type}-${variant}`],
    icon && styles.has_icon,
    className
  );

  return (
    <button className={buttonClassnames} onClick={clickHandler}>
      <span>{text}</span>
      {icon && icon}
    </button>
  );
}
