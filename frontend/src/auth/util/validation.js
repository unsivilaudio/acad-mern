const emailRegex =
    // eslint-disable-next-line
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const emailRules = [
    {
        error: 'Please enter a valid email',
        rule: e => emailRegex.test(e),
    },
];

const passwordRules = [
    {
        error: 'Passwords must be at least 6 characters',
        rule: p => p.trim().length > 5,
    },
    {
        error: 'Passwords must contain at least one special character',
        rule: p => /[!*:.^~#%&]/.test(p),
    },
    {
        error: 'Passwords must include at least one uppercase character',
        rule: p => /[A-Z]/.test(p),
    },
];

export function validatePassword(pwd) {
    return validateRules(pwd, passwordRules);
}

export function validateEmail(email) {
    return validateRules(email, emailRules);
}

function validateRules(val, rules) {
    return rules.reduce((acc, { error, rule }) => {
        const valid = rule(val);
        if (!valid) acc.push(error);
        return acc;
    }, []);
}
