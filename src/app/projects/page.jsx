'use client'

import MyProjects from "@/components/myProjects/MyProjects";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <Suspense fallback={<p>Loading feed...</p>}>
                <NavBar/>
                <MyProjects />
                <Footer/>
            </Suspense>
        </>
    );
}