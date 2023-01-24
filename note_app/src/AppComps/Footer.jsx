import React from "react";

export default function Footer()
{
    let currYear = new Date().getFullYear();
    return <footer className="footerSec">©️ OrelChalfon { currYear}</footer>;
}
