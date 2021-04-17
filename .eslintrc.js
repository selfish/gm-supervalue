module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaVersion': 2018,
    },
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'no-var': 'error',
        'no-console': 'error',
        'quotes': ['error', 'single'],
        'require-await': ['error'],
        'eol-last': ['error', 'always'],
        'require-atomic-updates': ['off'],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never',
        }],
        'padded-blocks': ['error', 'never'],
        'block-spacing': ['error', 'never'],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'object-curly-spacing': ['error', 'always'],
        'dot-location': ['error', 'property'],
        'function-call-argument-newline': ['error', 'consistent'],
        'one-var': ['error', 'never'],
        'no-debugger': 'error',
        'no-multi-spaces': 'error',
    },
};
