import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Categories.module.css';
import { Link } from "react-router-dom";
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
		<Link to="/">
			<button className={style.btn} value="" onClick={handleClick}>TODOS</button>
		</Link>
			{
				categories && categories.map(x => {
					return (
						<Link to={`/${x}`}>
							<button className={style.btn} value={x} onClick={handleClick}>{x.toUpperCase()}</button>	
						</Link>
					)
				})
			}
		</div>
	)
}

export default Categories;