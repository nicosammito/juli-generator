import {useState} from "react";

const Generator = (props: { getStateFunction: Function}) => {


    const [type, setType] = useState("instagram-post");
    const [design, setDesign] = useState("purple-blue-btw");
    const [template, setTemplate] = useState("wrapper-middle-end");
    const [content, setContent] = useState(["__JULI Social Media Tool__", "Du benötigst Hilfe? Dann schreib mir eine DM unter @nico_sammito"])
    const [fontSizeHeadline, setFontSizeHeadline] = useState(60);
    const [fontSizeDescription, setFontSizeDescription] = useState(30);
    const [association, setAssociation] = useState("Verband");
    const [source, setSource] = useState("");
    const [background, setBackground] = useState("https://cdn.statically.io/gh/nicosammito/juli-generator/gh-pages/77208332_2555833491170848_7632607706234224640_o-1.jpg");


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

    return <div id={"generator"} className={"generator " + type+ " " + design} style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: "url("+ background +")"}}>
        <div className={template}>
            <div className="design-wrapper">

                {
                    content.map((line, index) => {

                        if (line.startsWith("__") && line.endsWith("__")) {
                            return <><span style={{fontSize: fontSizeHeadline}} key={line.substring(2, line.length-2)} className="heading">{line.substring(2, line.length-2)}</span><br/></>
                        } else {
                            return <><span style={{fontSize: fontSizeDescription}} className="description">{line}</span><br/></>
                        }
                    })
                }
            </div>
        </div>
        <img src={"https://cdn.statically.io/gh/nicosammito/juli-generator/gh-pages/julis_white.svg"} className={"julilogo"}/>
        <span className={"verband"}>{association}</span>
        <span className={"quelle"}>{source}</span>
    </div>;
}
export default Generator;