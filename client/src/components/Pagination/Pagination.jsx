import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, getProducts, filterByCategory } from "../../redux/actions/actions";

const Pagination = () => {

	const itemsPerPage = 10;
	const dispatch = useDispatch();
	const { page, products, allProducts, category } = useSelector(state => state);

	const changePage = (page) => {
		dispatch(setPage(page))
		if (category) {
			dispatch(filterByCategory(category));
		}
		else {
			dispatch(getProducts());
		}
	}

	return (
		<div>
			<button
				disabled={page-1 === 0}
				onClick={() => {changePage(page-1)}}
			>
				◀
			</button>
			<label>{page}</label>	
			<button
				disabled={allProducts?.length <= (page * itemsPerPage)}
				onClick={() => {changePage(page+1)}}
			>
				▶
			</button>
		</div>
	)
};

export default Pagination;