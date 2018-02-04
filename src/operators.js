const OPERATORS = {
    '*': (arg1, arg2) => arg1 * arg2,
    'x': (arg1, arg2) => arg1 * arg2,
    '/': (arg1, arg2) => arg1 / arg2,
    '÷': (arg1, arg2) => arg1 / arg2,
    '%': (arg1, arg2) => arg1 % arg2,
    '+': (arg1, arg2) => arg1 + arg2,
    '-': (arg1, arg2) => arg1 - arg2,
    '^': (arg1, arg2) => arg1 ** arg2
};

const PRECEDENCE = {
    '*': 1,
    'x': 1,
    '/': 1,
    '÷': 1,
    '%': 1,
    '+': 2,
    '-': 2,
    '^': 0
};

module.exports = { OPERATORS, PRECEDENCE };

