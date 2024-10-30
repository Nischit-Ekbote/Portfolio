'use client'

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer"
import { Suspense } from "react";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Page() {
    return (
        <Suspense fallback={<p>Loading</p>}>
            <NavBar/>
            <AboutMe/>
            <Footer/>
        </Suspense>
    );
}