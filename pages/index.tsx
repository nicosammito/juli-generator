import type {NextPage} from 'next'
import {Col, Container, Row} from "react-bootstrap";
import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons";
import Generator from "../components/Generator";
import * as htmlToImage from 'html-to-image';

let changeState: { "size": Function, "design": Function, "template": Function, "content": Function, "fontSizeHeadline": Function, "fontSizeDescription": Function, "association": Function, "source": Function, "background": Function };

const Tool: NextPage = () => {
    return (
        <>
            <head>
                <title>Junge Liberale Kachel Generator</title>

            </head>
            <Container style={{position: "relative"}}>
                <h1>Das JuLi Social Media Tool Made by Nico Sammito</h1>
                <p>Du möchtest die digitale Verbandsarbeit besser gestalten? Dann ist dieses Tool genau das richtige für
                    dich. Gestalte Kacheln, Storys und vieles mehr und verbessere so den Internetauftritt deines
                    Verbandes.</p>

                <div className="tool-menu" id="tool-menu">
                    <span className="tool-item active" id="size" onClick={onToolMenuClick}>1. Größe
                    </span>
                    <span className="tool-item" id="design" onClick={onToolMenuClick}>2. Design</span>
                    <span className="tool-item" id="templates" onClick={onToolMenuClick}>3. Format
                    </span>
                    <span className="tool-item" id="inhalt" onClick={onToolMenuClick}>4. Inhalt</span>
                    <span className="tool-item" id="download" onClick={downloadImage}>5. Download</span>
                    <span className="tool-item" id="download"><a href={"https://www.instagram.com/nico_sammito/"}>Du benötigtst Hilfe?</a></span>
                    <span className="tool-item" id="download"><a
                        href={"https://www.instagram.com/nico_sammito/"}><IconBrandInstagram
                        size={16}/>Mein Instagram</a></span>
                </div>
                <Row className="tool">
                    <Col id={"col-generator"} md={6} style={{padding: 0}}>
                        <Generator getStateFunction={(pChangeState: any) => {
                            changeState = pChangeState;
                        }}/>
                    </Col>
                    <Col md={6} style={{padding: 0}}>
                        <div className="tool-selections" id="tool-selections">
                            <div className="tool-selection show" id="size">
                                <p>Wähle hier die größe und die Platform aus, auf der du deinen Beitrag veröffentlichen
                                    möchtest.</p>
                                <Row>
                                    <Col lg={3}>
                                        <div className="size"
                                             onClick={() => changeState["size"]("instagram-post")}>
                                            <div className="icon">
                                                <IconBrandInstagram size={32}/>
                                            </div>
                                            <p>Instagram Kachel</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="size"
                                             onClick={() => changeState["size"]("instagram-story")}>
                                            <div className="icon">
                                                <IconBrandInstagram size={32}/>
                                            </div>
                                            <p>Instagram Story</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="size"
                                             onClick={() => changeState["size"]("facebook-banner")}>
                                            <div className="icon">
                                                <IconBrandFacebook size={32}/>
                                            </div>
                                            <p>Facebook Banner</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="tool-selection" id="design">
                                <p>Wähle hier das passende Design zu deinem Beitrag aus.<br/><br/></p>
                                <p>Bundestagswahl Design 2021</p>
                                <Row>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("purple-yellow-btw")}>
                                            <div className="theme purple-yellow-btw"/>
                                            <p>Lila-Gelb Theme</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("purple-blue-btw")}>
                                            <div className="theme purple-blue-btw"/>
                                            <p>Lila-Blau Theme</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("blue-yellow-btw")}>
                                            <div className="theme blue-yellow-btw"/>
                                            <p>Blau-Gelb Theme</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("black-black-btw")}>
                                            <div className="theme black-black-btw"/>
                                            <p>Schwarz Theme</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("yellow-purple-btw")}>
                                            <div className="theme yellow-purple-btw"/>
                                            <p>Gelb-Lila Theme</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("blue-purple-btw")}>
                                            <div className="theme blue-purple-btw"/>
                                            <p>Blau-Lila Theme</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("yellow-blue-btw")}>
                                            <div className="theme yellow-blue-btw"/>
                                            <p>Gelb-Blau Theme</p>
                                        </div>
                                    </Col>
                                </Row>
                                <p><br/>JuLi Design 2020</p>
                                <Row>
                                    <Col lg={3}>
                                        <div className="design"
                                             onClick={() => changeState["design"]("transparent-white-btw")}>
                                            <div className="theme transparent-white-btw"/>
                                            <p>Transparentes Theme</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="tool-selection" id="templates">
                                <p>Wähle hier die Ausrichtung / Format des Inhaltes aus.<br/><br/></p>
                                <p>Vorgefertigte Templates</p>
                                <Row>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => {
                                                 changeState["template"]("wrapper-left-end");
                                                 changeState["fontSizeHeadline"](30);
                                                 changeState["fontSizeDescription"](40);
                                                 changeState["content"](['"Jetzt wissen wir: Aus der deutschen Geschichte ergibt sich eine Verantwortung dafür, dass wir handeln in Deutschland und Europa."', "__Christian Lindner__"]);
                                             }}>
                                            <div className="theme purple-yellow"/>
                                            <p>Zitat Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => {
                                                 changeState["template"]("wrapper-middle-end");
                                                 changeState["fontSizeHeadline"](60);
                                                 changeState["fontSizeDescription"](30);
                                                 changeState["content"](["__Bundeskongress__", "Wer in Frieden und Demokratie lebt, trägt die Verantwortung, Frieden und Demokratie zu gestalten. "]);
                                             }}>
                                            <div className="theme purple-yellow"/>
                                            <p>Inhalt Template</p>
                                        </div>
                                    </Col>
                                </Row>
                                <p><br/><br/>Template Ausrichtung</p>
                                <Row>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-left-start")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Links-Oben Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-left-middle")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Links-Mitte Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-left-end")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Links-Unten Template</p>
                                        </div>
                                    </Col>

                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-middle-start")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Mitte-Oben Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-middle-middle")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Mitte-Mitte Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-middle-end")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Mitte-Unten Template</p>
                                        </div>
                                    </Col>

                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-right-start")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Rechts-Oben Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-right-middle")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Rechts-Mitte Template</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="format"
                                             onClick={() => changeState["template"]("wrapper-right-end")}>
                                            <div className="theme purple-yellow"/>
                                            <p>Rechts-Unten Template</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="tool-selection" id="inhalt">
                                <p>Inhalt (Nutze __text__ um einen makierten Text zu erstellen)</p>
                                <textarea className={"form-control"} style={{
                                    width: "100%",
                                    height: "200px",
                                    fontSize: ".75rem"
                                }} onKeyPress={(event) => {
                                    changeState["content"](event.currentTarget.value.split("\n"))
                                }} onKeyDown={(event) => {
                                    changeState["content"](event.currentTarget.value.split("\n"))
                                }} onKeyUp={(event) => {
                                    changeState["content"](event.currentTarget.value.split("\n"))
                                }}
                                          placeholder={"__JULI SOCIAL MEDIA TOOL__                                                                                                                                                                                         DU BENÖTIGST HILFE? DANN SCHREIB MIR EINE DM UNTER @NICO_SAMMITO"}/>
                                <p><br/><br/>Verband</p>
                                <input className={"form-control"} style={{fontSize: ".75rem"}}
                                       onKeyPress={(event) => {
                                           changeState["association"](event.currentTarget.value)
                                       }} onKeyDown={(event) => {
                                    changeState["association"](event.currentTarget.value)
                                }} onKeyUp={(event) => {
                                    changeState["association"](event.currentTarget.value)
                                }} placeholder={"KV Mettmann"}/>
                                <p><br/><br/>Quelle</p>
                                <input className={"form-control"} style={{fontSize: ".75rem"}}
                                       onKeyPress={(event) => {
                                           changeState["source"](event.currentTarget.value)
                                       }} onKeyDown={(event) => {
                                    changeState["source"](event.currentTarget.value)
                                }} onKeyUp={(event) => {
                                    changeState["source"](event.currentTarget.value)
                                }} placeholder={"Quelle"}/>

                                <p><br/><br/>Farbiger Text (Größe)</p>
                                <input type="range" className="form-range" min={20} max={100}
                                       onChange={event => {
                                           console.log(event.currentTarget.value)
                                           changeState["fontSizeHeadline"](Number(event.currentTarget.value))
                                       }}/>

                                <p><br/><br/>Normaler Text (Größe)</p>
                                <input type="range" className="form-range" min={20} max={100}
                                       onChange={event => {
                                           console.log(event.currentTarget.value)
                                           changeState["fontSizeDescription"](Number(event.currentTarget.value))
                                       }}/>
                                <p><br/><br/>Hintergrundbild</p>
                                <input type="file" id="background" name="background"
                                       accept="image/png, image/jpeg"
                                       onChange={(event) => {
                                           // @ts-ignore
                                           const output = URL.createObjectURL(event.target.files[0]);
                                           changeState["background"](output);
                                       }}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}

const downloadImage = () => {

    // @ts-ignore
    const generator: HTMLElement = document.getElementById('generator');
    // @ts-ignore
    const downloadButton: HTMLElement = document.getElementById("download");
    const downloadButtonContent = downloadButton.textContent;

    downloadButton.textContent = "Bild wird generiert..."
    htmlToImage.toJpeg(generator, {pixelRatio: 0.1}).then(() => {
        htmlToImage.toJpeg(generator, {pixelRatio: 0.1}).then(() => {
            htmlToImage.toJpeg(generator, {pixelRatio: 0.1}).then(() => {
                const generatorTransform = generator.style.transform;
                generator.style.transform = "scale(1)";
                htmlToImage.toJpeg(generator, {pixelRatio: 1}).then((data) => {
                    generator.style.transform = generatorTransform;
                    const link = document.createElement('a');
                    link.download = 'jungeliberale.jpg';
                    link.href = data
                    link.click();
                    downloadButton.textContent = downloadButtonContent;
                })
            });
        });
    });

};

const onToolMenuClick = (args: any) => {

    const targetId = args.target.id;

    const toolSelections = document.querySelector("#tool-selections");
    const toolMenu = document.querySelector("#tool-menu");
    // @ts-ignore
    const targetMenu = toolMenu.querySelector("#" + targetId);
    // @ts-ignore
    const targetSelection = toolSelections.querySelector("#" + targetId);

    // @ts-ignore
    toolMenu.querySelectorAll(".tool-item").forEach(item => {
        item.classList.remove("active")
    })

    // @ts-ignore
    toolSelections.querySelectorAll(".tool-selection").forEach(item => {
        item.classList.remove("show")
    })

    // @ts-ignore
    targetMenu.classList.add("active")

    // @ts-ignore
    targetSelection.classList.add("show")


}

export default Tool
