import { FC, PropsWithChildren } from "react";
import Head from "next/head"
import { NavBar, SideMenu } from "../ui";

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<PropsWithChildren<Props>> = ({ children, title, pageDescription, imageFullUrl }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />

                <meta name="og:title" content="title" />
                <meta name="og:description" content={pageDescription} />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>

            <nav>
                {/*nav bar menu productos */}
                <NavBar />
            </nav>

            {/*sidebar*/}
            <SideMenu />

            <main style={{
                margin: "10% auto",
                maxWidth: "1300px",
                padding: "0px 30px",
            }}>
                {children}
            </main>

            <footer>

                {/*footer*/}
            </footer>
        </>
    )
}

