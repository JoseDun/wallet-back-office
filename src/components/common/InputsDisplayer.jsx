/* eslint no-eval: "off" */
import React from 'react';

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	FormHelperText,
} from '@mui/material';

const InputsDisplayer = ({ fields = [], onInputChange, values, errors }) => {
	return (
		<>
			{fields.map(
				({ name, class: className, type, _eval, required, _eval_required, ...field }) => {
					if (_eval && !eval(_eval)) return null;

					const isRequired = _eval_required ? eval(_eval_required) : required;

					return (
						<FormControl
							key={name}
							className={`w-100 mb-3 ${className || ''}`}
							error={!!errors[name]}
						>
							{type === 'select' && (
								<>
									<InputLabel id={name}>{field.label}</InputLabel>
									<Select
										labelId={name}
										className="w-100"
										name={name}
										id={name}
										value={values[name] === undefined ? '' : values[name]}
										onChange={onInputChange}
										required={isRequired}
										{...field}
									>
										<MenuItem value="">{field.placeholder || '-'}</MenuItem>
										{field.options.map(({ value, title }) => (
											<MenuItem key={value} value={value}>
												{title}
											</MenuItem>
										))}
									</Select>
									{!!errors[name] && (
										<FormHelperText>{errors[name]}</FormHelperText>
									)}
								</>
							)}
							{type !== 'select' && (
								<>
									<TextField
										name={name}
										fullWidth
										type={type || 'text'}
										id={name}
										value={values[name] === undefined ? '' : values[name]}
										onChange={onInputChange}
										variant="outlined"
										error={!!errors[name]}
										InputLabelProps={{
											[type === 'date' ? 'shrink' : 'focused']:
												type === 'date',
										}}
										helperText={errors[name] || ''}
										required={isRequired}
										{...field}
									/>
								</>
							)}
						</FormControl>
					);
				}
			)}
		</>
	);
};

export default InputsDisplayer;
