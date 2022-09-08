import Layout from "../components/layout";
import Home from "../components/home/home";
import Assemble from "../components/home/assemble";
import Boxes from "../components/home/boxes";
import WhyZanco from "../components/home/why_zanco";
import Materials from "../components/home/materials";
import Signup from "../components/home/signup";
import WhatWeDo from "../components/home/what_we_do";
import SuggestionBox from "../components/home/suggestionbox";

import styles from '../styles/Index.module.css';
export default function NewIndex() {
    return (
        <Layout>
            <div id="home">
                <Home></Home>
            </div>
            <div id="assemble">
                <Assemble></Assemble>
            </div>
            <div id="boxes">
                <Boxes></Boxes>
            </div>
            <div id="whyzanco">
                <WhyZanco></WhyZanco>
            </div>
            <div id="materials">
                <Materials></Materials>
            </div>
            <div id="signup">
                <Signup></Signup>
            </div>
            <div id="whatwedo">
                <WhatWeDo></WhatWeDo>
            </div>
            <div id="suggestionbox">
                <SuggestionBox></SuggestionBox>
            </div>
        </Layout>
    );
}