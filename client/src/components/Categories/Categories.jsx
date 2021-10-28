import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Categories.module.css';
import { getProducts, getCategories, filterByCategory, setCategory, setPage } from '../../redux/actions/actions';

const Categories = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch])

	const { categories } = useSelector(state => state);

	function handleClick (e) {
		dispatch(setCategory(e.target.value))
		dispatch(setPage(1));
		dispatch(getProducts({category: e.target.value}));
		
	}

	return (
		<div className={style.Categories}>
			<button className={style.btn} value="" onClick={handleClick}>TODOS</button>
			{
				categories && categories.map(x => {
					return (
						<button className={style.btn} value={x} onClick={handleClick}>{x.toUpperCase()}</button>
					)
				})
			}
		</div>
	)
}

export default Categories;