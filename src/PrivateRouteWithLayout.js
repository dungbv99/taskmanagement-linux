import React from "react";
import { Route } from "react-router-dom";
//import PrivateRoute from "../common/PrivateRoute";

function PrivateRouteWithLayout({
                                    component: Component,
                                    layout: Layout,
                                    ...rest
                                }) {
    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

export default PrivateRouteWithLayout;
