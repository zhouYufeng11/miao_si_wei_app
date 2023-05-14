function scrollToPosition (target) {
	const offsetLeft = target.offsetLeft,
	      scrollEl = target.parentNode.parentNode;

	scrollEl.scrollTo(offsetLeft, 0);
}

function filterData (data, id) {
	if (id === 0) {
		return data;
	}

	return data.filter(item => item.field === id);
}

export {
	scrollToPosition,
	filterData
}