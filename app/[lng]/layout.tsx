import "@/styles/globals.css";

import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import clsx from "clsx";
import Script from 'next/script';
import {Analytics} from "@vercel/analytics/react"
import {languages} from '../lib/i18n/settings'
import {dir} from "i18next";


export function generateMetadata({params: {lng}}: {
    params: { lng: string };
}): Metadata {

    return {
        title: {
            default: siteConfig.name,
            template: `%s - ${siteConfig.name} | AiSora.org`,
        },
        description: siteConfig.description,
        themeColor: [
            {media: "(prefers-color-scheme: light)", color: "white"},
            {media: "(prefers-color-scheme: dark)", color: "black"},
        ],
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-16x16.png",
            apple: "/apple-touch-icon.png",
        }, alternates: {canonical: `https://www.aisora.org/${lng}`},
        keywords: "sora,sora ai,sora ai,openai sora,video ai,ai video,sora video,ai video generator,text to video,sora ai video,sora ai video generator,sora webui,sora showcase,sora ai showcases,ai sora video,aisora",
    };
}

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

export default function RootLayout({children, params: {lng}}: {
    children: React.ReactNode, params: {
        lng: string
    }
}) {
    // metadata.alternates = {canonical: `https://www.aisora.org/${document.dir}`}
    // const router = useRouter();
    return (
        <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
        <head>

            {/*<link rel={"Canonical"} href={usePathname()}/>*/}
        </head>
        <body
            className={clsx(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >

        {/* 使用next/script组件加载Google Analytics */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PC6HP24RLY"
            strategy="afterInteractive"
        />
        <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PC6HP24RLY');
        `,
            }}
        />

        <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
            <div className="relative flex flex-col h-screen">
                {/*pt-16 px-6*/}
                <main className="container mx-auto max-w-7xl flex-grow">
                    {children}
                </main>
                {/* <footer className="w-full flex items-center justify-center py-3">
                    <Link
                        isExternal
                        className="flex items-center gap-1 text-current"
                        href="https://aisora.org"
                        title="nextui.org homepage"
                    >
                        <span className="text-default-600">Powered by</span>
                        <p className="text-primary">AiSora.org
                        </p>
                    </Link>
                </footer>*/}
            </div>
            <Analytics/>
        </Providers>

        </body>
        </html>
    );
}
