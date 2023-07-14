import useReduction from "use-reduction";

const initialState = { status: "INIT", error: null, result: null };

const reducer = {
    loading: (state, { payload }) => ({ ...state, status: "LOADING" }),
    error: (state, { payload }) => ({ ...state, status: "ERROR", error: payload }),
    success: (state, {payload}) => ({...state, status: "SUCCESS", result: payload})
}

function useLoader() {
    return useReduction(initialState, reducer);
};

export default useLoader;