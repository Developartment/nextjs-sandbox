import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    title: string;
    className: string;
};

const Layout = ({ children, title, className }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Head>
        <main className={className}>{children}</main>
    </>
);

export default Layout;
