import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories, filterByCategory, setCategory, setPage } from '../../redux/actions/actions';

const Categories = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch])

	const { categories } = useSelector(state => state);

	function handleClick (e) {
		dispatch(setCategory(e.target.value))
		if (!e.target.value) {
			dispatch(getProducts());
		}
		else {
			dispatch(setPage(1));
			dispatch(filterByCategory(e.target.value));
		}
	}

	return (
		<div>
		<button value="" onClick={handleClick}>TODOS</button>
		{
			categories && categories.map(x => {
				return (
					<button value={x} onClick={handleClick}>{x.toUpperCase()}</button>
				)
			})
		}
		</div>
	)
}

export default Categories;