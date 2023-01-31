module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'import'],
	rules: {
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		'no-underscore-dangle': 'off',
		'no-nested-ternary': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'max-len': ['error', { code: 120, ignoreUrls: true, ignoreTemplateLiterals: true }],
		'prettier/prettier': 'error',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: [2, 'always'],
		'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 0,
		camelcase: 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
	},
	settings: {
		react: {
			version: '16.13.1',
		},
	},
};
