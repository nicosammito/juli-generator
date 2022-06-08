import {useEffect, useState} from "react";

const Generator = (props: { getStateFunction: Function }) => {


    const [type, setType] = useState("instagram-post");
    const [design, setDesign] = useState("purple-blue-btw");
    const [template, setTemplate] = useState("wrapper-middle-end");
    const [content, setContent] = useState(["__JULI Social Media Tool__", "Du benötigst Hilfe? Dann schreib mir eine DM unter @nico_sammito"])
    const [fontSizeHeadline, setFontSizeHeadline] = useState(60);
    const [fontSizeDescription, setFontSizeDescription] = useState(30);
    const [association, setAssociation] = useState("");
    const [source, setSource] = useState("");
    const [background, setBackground] = useState("");


    props.getStateFunction({
        "size": setType,
        "design": setDesign,
        "template": setTemplate,
        "fontSizeHeadline": setFontSizeHeadline,
        "fontSizeDescription": setFontSizeDescription,
        "content": setContent,
        "association": setAssociation,
        "source": setSource,
        "background": setBackground
    });

    useEffect(() => {

        const resizeGenerator = () => {
            const div = document.getElementById("generator");
            const col = document.getElementById("col-generator");

            // @ts-ignore
            const scaleWidth = (col.offsetWidth - 20) / div.offsetWidth;
            // @ts-ignore
            const scaleHeight = (col.offsetHeight - 20) / div.offsetHeight;

            if (scaleHeight <= scaleWidth) { // @ts-ignore
                div.style.transform = "scale("+ scaleHeight +")"
            }
            else { // @ts-ignore
                div.style.transform = "scale("+ scaleWidth +")"
            }
        }

        resizeGenerator();

        window.addEventListener("resize", resizeGenerator);
    })

    return <div id={"generator"} className={"generator " + type + " " + design}>
        <img src={background} className={"background-img"}/>
        <div className={template}>
            <div className="design-wrapper">

                {
                    content.map((line, index) => {

                        if (line.startsWith("__") && line.endsWith("__")) {
                            return <><span style={{fontSize: fontSizeHeadline}} key={line.substring(2, line.length - 2)}
                                           className="heading">{line.substring(2, line.length - 2)}</span><br/></>
                        } else {
                            return <><span style={{fontSize: fontSizeDescription}} className="description">{line}</span><br/></>
                        }
                    })
                }
            </div>
        </div>
        {association != "" ?
            <img src={"https://cdn.statically.io/gh/nicosammito/juli-generator/gh-pages/julis_white.svg"}
                 className={"julilogo"} alt={"Junge Liberale Logo"}/> : null}
        <span className={"verband"}>{association}</span>
        <span className={"quelle"}>{source}</span>
    </div>;
}
export default Generator;