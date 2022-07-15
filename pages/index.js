import Layout from "../components/layout";
import Home from "../components/home/home";
import Assemble from "../components/home/assemble";
import Boxes from "../components/home/boxes";
import WhyZanco from "../components/home/why_zanco";
import Materials from "../components/home/materials";
import Signup from "../components/home/signup";
import WhatWeDo from "../components/home/what_we_do";

export default function NewIndex() {
    return (
        <Layout>
            <Home></Home>
            <Assemble></Assemble>
            <Boxes></Boxes>
            <WhyZanco></WhyZanco>
            <Materials></Materials>
            <Signup></Signup>
            <WhatWeDo></WhatWeDo>
        </Layout>
    );
}