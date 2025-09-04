import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import clsx from "clsx";
function Button({
    primary,
    rounded,
    bordered,
    href,
    children,
    className,
    size = "medium",
    disabled,
    loading,
    onClick,
    ...props
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.loading]: loading,
    });

    const Component = href ? "a" : "button";
    return (
        <Component onClick={onClick} disabled={disabled || loading} {...props} href={href} className={classNames}>
            <span className={styles.content}>{children}</span>
            {loading && <span className={styles.spinner}></span>}
        </Component>
    );
}

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};
