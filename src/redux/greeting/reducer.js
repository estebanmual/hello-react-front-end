const GETGREETING_SUCCESS = 'GETGREETING_SUCCESS';
const BASE_URL = 'http://127.0.0.1:3000/greeting';

const INITIAL_STATE = {
  greeting: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETGREETING_SUCCESS:
      return {
        greeting: action.payload,
      };
    default: return state;
  }
}

export function getGreeting() {
  return (dispatch) => {
    fetch(BASE_URL).then((response) => {
      response.json().then((json) => {
        const { greeting } = json;
        dispatch({ type: GETGREETING_SUCCESS, payload: greeting });
      });
    });
  };
}
