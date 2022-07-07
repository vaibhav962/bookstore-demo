import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Book from "../pages/book";
import BookList from "../pages/book-listing";
import EditBook from "../pages/book/editBook";
import { RoutePaths } from "../utils/enum";
import PrivateRoute from "./PrivateRoute";

//component lazy loading
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register/index"));

const AppRoutes: React.FC = () => {
	return (
		<Switch>
			<Route exact path={RoutePaths.Login} component={Login} />
			<Route exact path={RoutePaths.Register} component={Register} />
			<Route exact path={RoutePaths.BookListing} component={BookList} />
			<PrivateRoute exact path={RoutePaths.Book} component={Book} />
			<PrivateRoute exact path={RoutePaths.AddBook} component={EditBook} />
			<PrivateRoute exact path={RoutePaths.EditBook} component={EditBook} />
		</Switch>
	);
};

export default AppRoutes;
