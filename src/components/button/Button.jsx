const variants = {
    primary: {
        backgroundColor: "#2196f3",
        color: "#fff",
    },
    warning: {
        backgroundColor: "#fdd835",
        color: "#000",
    },
    success: {
        backgroundColor: "#2e7d32",
        color: "#fff"
    }
}

const Button = (props) => {
    const { variant, name, type } = props;
    const userVariant = variants[variant]
    return (
        <button type={type} style={{
            border: "none",
            padding: "1rem 2rem",
            fontSize: "18px",
            cursor: "pointer",
            margin: "0.5rem",
            ...userVariant
        }}>{name}</button>
    )
}

export default Button