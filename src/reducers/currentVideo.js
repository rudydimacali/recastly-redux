import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO' && action.video) {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
