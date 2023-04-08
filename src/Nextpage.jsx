import { Link } from "react-router-dom";
const Nextpage = () => {
    return ( 
        <div className="nextpage">
            <section className="link-page">
                <div className="link1">
                    <h1>Read top articles from health experts</h1>
                    <p style={{ marginLeft: 0, marginTop: 0 }}>Health articles that keep you informed about good health practices and achieve your goals.</p>
                    <button>Sell all article</button>
                </div>
                <div className="link2">
                    <div className="linkp">
                        <Link to="/second_page">
                            <img src="./images/corona.jpg" alt="" />
                            <h6 style={{ color: "skyblue" }}>CORONAVIRUS</h6>
                            <h4>12 Coronavirus myths and Facts That You Should Be Aware Of</h4>
                            <p>Dr.Diana Borgio</p>
                        </Link>
                    </div>
                    <div className="linkp">
                        <Link to="/second_page">
                            <img src="./images/vitamins.jpg" alt="" />
                            <h6 style={{ color: "skyblue" }}>VITAMINS AND SUPPLIMENTS</h6>
                            <h4>Eating Right to Build Immunity Against Cold and Viral Infection</h4>
                            <p>Dr.Diana Borgio</p>
                        </Link>
                    </div>
                </div>
            </section><br />

            <section className="download">
                <div className="down">
                    <img width={300} height={350} src="./images/download.jpg" alt="" />
                </div>
                <div className="down1">
                    <h1>Download the Practo app</h1>
                    <p>Access video consultation with India’s top doctors on the Practo app.
                        Connect with doctors online, available 24/7, from the comfort of your home.</p><br /><br />
                    <label>Get the link to download the app</label><br />
                    <div className="in2">
                    <div className="in1">
                    <input id="num" type="text" placeholder="+91" readOnly />
                    <input id="num1" type="text" placeholder="Enter phone number" />
                    </div>
                    <button id="send">Send SMS</button>
                    </div>
                    <div className="in2">
                    <img src="./images/google_play.jpg" alt="" />
                    <img src="./images/apple_store.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Nextpage;