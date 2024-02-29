import React from "react";
import {Navbar} from "@/components/navbar";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";

export default function DetailLayout({children}: { children: React.ReactNode }) {

    return (
        <div>
            <Navbar/>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    {children}
                </div>
            </section>
        </div>
    );
}