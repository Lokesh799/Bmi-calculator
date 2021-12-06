import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../action';

const BmiForm = ({ change }) => {
	const dispatch = useDispatch();
	const setstate = useSelector((state) => state.setData.setdata);
	console.log(setstate)

	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		const newState ={ ...setstate , [name]: value, date };
		dispatch(setData(newState))
	}

	const handleSubmit = () => {
		change(setstate);
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={setstate.weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="176"
						value={setstate.height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={setstate.weight === '' || setstate.height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
