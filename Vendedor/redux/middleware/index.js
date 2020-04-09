import { applyMiddleware } from "redux";

//Middlewares
import thunk from "redux-thunk";
//import logger from "redux-logger";

export default applyMiddleware(thunk);
