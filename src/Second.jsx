import { Link } from "react-router-dom";

const Second = () => {
    return (
        <div className="secondpage">
            <section className="one1">
                <div className="nav">
                    <i class='bx bx-menu'></i>
                    <img style={{ marginRight: 10 }} src="./images/logo.png" alt="" />
                    <div className="navbar">
                        <div className="a">
                            <a href="">Find Doctors</a>
                            <p>Book on appointment</p>
                        </div>
                        <div className="a">
                            <a href="">Video Consult</a>
                            <p>Consult top doctors</p>
                        </div>
                        <div className="a">
                            <a href="">Medicines</a>
                            <p>Practo pharmacy</p>
                        </div>
                        <div className="a">
                            <a href="">Lab Tests</a>
                            <p>Book tests & checkup</p>
                        </div>
                        <div className="a">
                            <a href="">Surgeries</a>
                            <p>Expert surgical care</p>
                        </div>
                    </div>
                    <div className="nav2">
                        <select id="">
                            <option value="For Providers">For Providers</option>
                            <option value="Practo Prime">Practo Prime</option>
                            <option value="Software For Provider">Software For Provider</option>
                            <option value="List Of Practice For Free">List Of Practice For Free</option>
                            <option value="ABDM">ABDM</option>
                        </select>
                        <select id="">
                            <option value="Security&help">Security&help</option>
                            <option value="Data Security">Data Security</option>
                            <option value="Help">Help</option>
                        </select>
                        <button>Login/Signup</button>
                    </div>
                    <button id="dis">Sign in</button>
                </div>
                <div className="hide">
                    <p>Book <br /> appointment</p>
                    <p>Consult <br />with a doctor</p>
                    <p>Order <br /> medicines</p>
                    <p>Book tests <br /> & checkup</p>
                    <p>Surgery <br />Safe and trusted</p>
                </div>
            </section><hr />

            <section className="one2">
                <div className="navbar2">
                    <div className="navbar21">
                        <label htmlFor="">Home</label>
                        <a href="">Home</a>
                        <a href="">Healthy Hair</a>
                        <a href="">Healthy Eating</a>
                        <a href="">Healthy Skin</a>
                        <a href="">Weight Loss</a>
                    </div>
                    <div className="navbar22">
                        <select name="value" id="">
                            <option value="">Explore</option>
                        </select>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </section>

            <section className="two">
                <span style={{ visibility: "hidden" }}>k</span>
            </section>
            <section className="back">
                <span style={{ visibility: "hidden" }}>k</span>
            </section>
            <section className="twotwo">
                <div className="two1">
                    <div className="two2">
                        <div className="two22">
                            <div id="two3">
                                <section className="social">
                                    <div id="divvv">
                                        <img src="./images/facebook.png" alt="" /><br />
                                        <img src="./images/twitter1.png" alt="" /><br />
                                        <img src="./images/email.png" alt="" /><br />
                                    </div>
                                </section>
                                <div className="discription">
                                    <h1>12 Coronavirus Myths and Facts That You Should Be Aware Of</h1>
                                    <div style={{ display: "flex" }} className="p">
                                        <img src="./images/pp.jpg" alt="" />
                                        <lable style={{ color: "skyblue", marginTop: 15, paddingLeft: 10 }} href="">Dr. Diana Borgio</lable>
                                    </div><br />
                                    <a style={{ color: "rgb(99, 99, 99)" }} href="">2 March, 2020</a><br /><br />
                                    <div style={{ width: 400 }} className="q">
                                        <p>As of April 10, 2020, COVID-19 currently affects 210 countries and union territories
                                            across the globe and 7,600 confirmed cases in India. </p><br />
                                        <p>While there are so much news and information all over the internet about the spread
                                            and prevention of the outbreak, without a doubt, a few myths and fictions are also
                                            floating around. Believing in any of these myths can be more dangerous than the disease itself.</p><br />
                                        <p>Here are some of the most common misbeliefs about Coronavirus along with the actual facts that
                                            you should be aware of:</p><br />
                                        <img id="long" src="./images/longimage2.jpg" alt="" />
                                        <img id="long" src="./images/longimage1.jpg" alt="" />
                                        <img id="long" src="./images/longimage3.jpg" alt="" />
                                        <img id="long" src="./images/longimage4.jpg" alt="" /><br /><br />
                                        <p>This information is important and must be shared with all. It is recommended to stay hydrated,
                                            stay away from people who are sick or down with a cold/ cough/ fever and maintain hand & face
                                            hygiene at all times to avoid catching an infection. </p>
                                    </div>
                                    <div className="lastbutton">
                                        <a href="">Viruese</a>
                                        <a href="">Common Cold</a>
                                        <a href="">Coronavirus</a>
                                        <a href="">COVID-19</a>
                                    </div>
                                    <div className="n">
                                        <a style={{ fontSize: 20 }} href="">♡</a><label>106</label>
                                        <div className="m">
                                            <img src="./images/facebook.png" alt="" /><br />
                                            <img src="./images/twitter1.png" alt="" /><br />
                                            <img src="./images/email.png" alt="" /><br />
                                            <img src="./images/whatsapp.png" alt="" /><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: 90 }} className="single">
                                <Link to="/">
                                    <img width={340} height={230} src="./images/single.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <p id="p" style={{ fontSize: 12, marginTop: -80, marginLeft: 150, paddingBottom: 20 }}>Home > Health Articles > Viruses , Common cold > 12 Coronavirus Myths and Facts That You Should Be Aware Of</p>
                    </div>
                    <div id="lastlist">
                        <h3 style={{ marginLeft: 150 }}>Articles based on Health interests</h3>
                        <ul>
                            <li style={{ listStyle: "none" }}>Healthy Eating</li>
                            <li>Everyday Fitness</li>
                            <li>Oral hygiene</li>
                            <li>Weight Loss</li>
                            <li>Sexual Well-being</li>
                            <li>Hair care</li>
                            <li>Diabetes</li>
                            <li>Skin Care</li>
                            <li>Pregnancy</li>
                            <li style={{ listStyle: "none" }}>Healthy Skin</li>
                            <li>Acne</li>
                            <li>Hair loss</li>
                            <li>Back Pain</li>
                            <li>Stress management</li>
                            <li>Weight gain</li>
                            <li>Cancer Prevention</li>
                            <li>Healthy Digestion</li>
                            <li>Healthy Heart</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="llllllllll">
                <section className="footer">
                    <div className="foot1">
                        <div className="fo">
                            <a href="">
                                <ul>
                                    <li>Practo</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Careers</li>
                                    <li>Press</li>
                                    <li>Contact Us</li>
                                </ul>
                            </a>
                        </div>
                        <div className="fo">
                            <a href="">
                                <ul>
                                    <li>For patients</li>
                                    <li>Search for doctors</li>
                                    <li>Search for clinics</li>
                                    <li>Search for hospitals</li>
                                    <li>Book Diagnostic Tests</li>
                                    <li>Book Full Body Checkups</li>
                                    <li>Practo Plus</li>
                                    <li>Covid Hospital listing</li>
                                    <li>Practo Care Clinics</li>
                                    <li>Read health articles</li>
                                    <li>Read about medicines</li>
                                    <li>Practo drive</li>
                                    <li>Health app</li>
                                    <li>Practo Plus Infinity</li>
                                </ul>
                            </a>
                        </div>
                        <div className="fo">
                            <a href="">
                                <ul>
                                    <li>For doctors</li>
                                    <li>Practo Profile</li><br />
                                    <li>For clinics</li>
                                    <li>Ray by Practo</li>
                                    <li>Practo Reach</li>
                                    <li>Ray Tab</li>
                                    <li>Practo Pro</li>
                                </ul>
                            </a>
                        </div>
                        <div className="fo">
                            <a href="">
                                <ul>
                                    <li>For hospitals</li>
                                    <li>Insta by Practo</li>
                                    <li>Qikwell by Practo</li>
                                    <li>Practo Profile</li>
                                    <li>Practo Reach</li>
                                    <li>Practo Drive</li><br />
                                    <li>For Corporates</li>
                                    <li>Wellness Plans</li>
                                </ul>
                            </a>
                        </div>
                        <div className="fo">
                            <a href="">
                                <ul>
                                    <li>More</li>
                                    <li>Help</li>
                                    <li>Developers</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>PCS T&C</li>
                                    <li>Healthcare Directory</li>
                                    <li>Practo Health Wiki</li>
                                </ul>
                            </a>
                        </div>
                        <div className="fo">
                            <a href="">
                                <ul>
                                    <li>Social</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>LinkedIn</li>
                                    <li>Youtube</li>
                                    <li>Github</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                    <div className="foot2">
                        <div className="im">
                            <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="" />
                            <p style={{ color: "white", marginTop: 20 }}>Copyright © 2017, Practo. All rights reserved.</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="media">
                <select name="one" id="">
                    <option value="">Practo</option>
                    <option value="">About</option>
                    <option value="">Blog</option>
                    <option value="">Careers</option>
                    <option value="">Press</option>
                    <option value="">Contact</option>
                </select><br />
                <select name="two" id="">
                    <option value="">Ask free health questions</option>
                    <option value="">Search for doctors</option>
                    <option value="">Search for clinics</option>
                    <option value="">Search for hospitals</option>
                    <option value="">Search for diagnostics</option>
                    <option value="">Read health articles</option>
                    <option value="">Read about medicines</option>
                    <option value="">Consult a doctor</option>
                    <option value="">Order medicines</option>
                    <option value="">Practo Drive</option>
                    <option value="">Health app</option>
                </select><br />
                <select name="three" id="">
                    <option value="">For doctors</option>
                    <option value="">Practo Consult</option>
                    <option value="">Practo Health Feed</option>
                    <option value="">Practo Profile</option>
                    <option value="">For clinics</option>
                    <option value="">Ray by Practo</option>
                    <option value="">Practo Reach</option>
                    <option value="">Ray Tab</option>
                    <option value="">Practo Pro</option>
                </select><br />
                <select name="four" id="">
                    <option value="">For hospitals</option>
                    <option value="">Insta by Practo</option>
                    <option value="">Qikwell by Practo</option>
                    <option value="">Querent by Practo</option>
                    <option value="">Practo Profile</option>
                    <option value="">Practo Reach</option>
                </select><br />
                <select name="fifth" id="">
                    <option value="fifth">More</option>
                    <option value="fifth">Help</option>
                    <option value="fifth">Developers</option>
                    <option value="fifth">Privacy Policy</option>
                    <option value="fifth">Terms & Conditions</option>
                    <option value="fifth">PCS T&C</option>
                    <option value="fifth">Subscribers</option>
                    <option value="fifth">Healthcare directory</option>
                    <option value="fifth">Practo Health Wiki</option>
                </select><br />
                <select name="six" id="">
                    <option value="six">Social</option>
                    <option value="six">Facebook</option>
                    <option value="six">Twitter</option>
                    <option value="six">LinkedIn</option>
                    <option value="six">YouTube</option>
                    <option value="six">GitHub</option>
                </select><br />
                <div className="foot2">
                    <div className="im">
                        <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="" />
                        <p style={{ color: "white", marginTop: 20 }}>Copyright © 2017, Practo. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Second;