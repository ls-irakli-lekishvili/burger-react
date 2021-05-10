import React from "react";
import classes from './Layout.module.css';

interface ILayout {
    children?: React.ReactNode;
}

const Layout = (props: ILayout) => {
    return (
        <>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    )
}

export default Layout;