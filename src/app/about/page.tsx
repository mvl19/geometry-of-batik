'use client';
import Layout from "@/components/Layout";
import Bio from "@/components/about/Bio";
import Profile from "@/components/about/Profile";

export default function About() {
    return (
        <Layout>
            <Profile />
            <Bio />
        </Layout>
    )
}