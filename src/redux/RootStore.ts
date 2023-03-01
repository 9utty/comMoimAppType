import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";
import eventReducer from "./event/reducer";
import hashtagReducer from "./hashtag/reducer";
import searchReducer from "./search/reducer";
import summaryEventReducer from "./SummaryEvent/SummaryEventReducer";
import locationReducer from "./location/LocationReducer";
import reviewReducer from "./review/reducer";
import eventImageReducer from "./eventImage/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  hashtag: hashtagReducer,
  search: searchReducer,
  summaryEvent: summaryEventReducer,
  location: locationReducer,
  review: reviewReducer,
  eventImage: eventImageReducer,
});

const store = createStore(rootReducer);

export default store;
