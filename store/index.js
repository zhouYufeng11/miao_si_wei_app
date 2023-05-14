export const state = () => ({
  id: 0
});

export const mutations = {
	selectTab (state, id) {
		state.id = id;
	}
}