import classes from './Input.module.scss';

export default function Input({ type, ...inputProps }) {
    let customInput;
    switch (type) {
        case 'textarea':
            customInput = <textarea {...inputProps} />;
            break;
        default:
            customInput = <input type={type} {...inputProps} />;
    }

    return (
        <div className={classes.Input}>
            {inputProps.label && (
                <label htmlFor={inputProps.name}>{inputProps.label}</label>
            )}
            {customInput}
        </div>
    );
}
