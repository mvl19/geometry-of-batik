"use client";
import { lazy } from "react";
import Gallery from "@/components/Gallery";
import Layout from "@/components/Layout";
const LazyCard = lazy(()=>  import('@/components/Card'));

export default function Home() {
  const urls = [
    "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
    "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
    "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
    "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
    "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
    "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
  ]
  return (
    <Layout>
      <Gallery>
        {urls.map((url, index) => <LazyCard key={index} url={url} description={"CAPTION"} />)}
      </Gallery>
    </Layout>
  )
}
