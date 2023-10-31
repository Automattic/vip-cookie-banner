import React from "react";
import classnames from 'classnames'
import './styles.scss';

export const FormToggle = (
	{
		className,
		checked,
		disabled,
		onChange = () => {},
		...rest
	}: React.HTMLProps<HTMLInputElement>
) => {
	const wrapperClasses = classnames( 'components-form-toggle', className, {
		'is-checked': checked,
		'is-disabled': disabled,
	} );

	return (
		<span className={ wrapperClasses }>
			<input
				className="components-form-toggle__input"
				type="checkbox"
				checked={ checked }
				onChange={ onChange }
				{...rest}
			/>
			<span className="components-form-toggle__track"></span>
			<span className="components-form-toggle__thumb"></span>
		</span>
	);
}
