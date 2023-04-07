import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <section className="nav">
            <i class='bx bx-menu'></i>
                <img style={{ marginRight: 10 }} src="./images/logo.png" alt="" />
                <div className="nav1">
                    <a href="">Find Doctors</a>
                    <a href="">Video Consult</a>
                    <a href="">Medicines</a>
                    <a href="">Lab Tests</a>
                    <a href="">Surgeries</a>
                </div>
                <div className="nav2">
                    <select id="">
                        <option value="For Corporates">For Corporate</option>
                        <option value="Helth & Wellness Plan">Helth & Wellness Plan</option>
                        <option value="Group Insurance">Group Insurance</option>
                    </select>
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
            </section><hr />

            <section className="Search-photo">
                <div className="input1">
                    <div className="in1">
                        <input type="text" placeholder="  Bangalore" />
                        <input style={{ width: 350 }} type="text" placeholder=" Search doctors,clinics,hospitals,etc" />
                    </div>
                    <div className="in2">
                        <a href=""><img src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="" /></a>
                    </div>
                </div>
                <div style={{ marginTop: 50 }} className="photo1">
                    <img height={325} width={1070} src="./images/chronic_consumer_banner_dweb.png" alt="" />
                </div>
                <div style={{ marginTop: 50 }} className="photo2">
                    <div className="card">
                        <a href="">
                            <div className="im1">
                                <img style={{ width: 130, marginLeft: 20 }} src="./images/card1.jpg" alt="" />
                            </div>
                            <h3>Instant Video Cunsultation</h3>
                            <p>Connect within 60secs</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="">
                            <div className="im1">
                                <img src="./images/card2.jpg" alt="" />
                            </div>
                            <h3>Find Doctors Near You</h3>
                            <p>Confirmed appointments</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="">
                            <div className="im2">
                                <img src="./images/card3.jpg" alt="" />
                            </div>
                            <h3>Medicines</h3>
                            <p>Essential at your doorsteps</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="">
                            <div className="im1">
                                <img src="./images/card4.jpg" alt="" />
                            </div>
                            <h3>Lab Tests</h3>
                            <p>Sample picup at your home</p>
                        </a>
                    </div>
                    <div className="card">
                        <a href="">
                            <div className="im2">
                                <img src="./images/card5.jpg" alt="" />
                            </div>
                            <h3>Surgeries</h3>
                            <p>Safe and trusted surgery centers</p>
                        </a>
                    </div>
                </div>
                <div className="photo3">
                    <div className="text">
                        <h2 style={{ margin: 0 }}>Consult top doctors online for any health concern</h2>
                        <p style={{ margin: 0 }}>Private online consultations with verified doctors in all specialists</p>
                    </div>
                    <div className="view">
                        <button>View All Specialities</button>
                    </div>
                </div>
                <div className="photo4">
                    <div className="circle">
                        <a href="">
                            <img src="./images/period.png" alt="" />
                            <p>Period doubts or Pregnancy</p>
                            <h6>CONSULT NOW</h6>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="">
                            <img src="./images/Acne.png" alt="" />
                            <p>Acne,pimple or skin issues</p>
                            <h6>CONSULT NOW</h6>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="" />
                            <p>Performance issue in bed</p>
                            <h6>CONSULT NOW</h6>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="">
                            <img src="./images/coughing.png" alt="" />
                            <p>Cold,Cough or Fever</p>
                            <h6>CONSULT NOW</h6>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" alt="" />
                            <p>Child not feeling well</p>
                            <h6>CONSULT NOW</h6>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="">
                            <img src="./images/mental.jpg" alt="" />
                            <p>Depression or anxiety</p>
                            <h6>CONSULT NOW</h6>
                        </a>
                    </div>
                </div>
                <div className="photo5">
                    <h2 style={{ margin: 0 }}>Book an appointment for an in-clinic consultation</h2>
                    <p style={{ marginLeft: 0, marginBottom: 0 }}>Find experienced doctors across all specialties</p>
                    <div className="boxes">
                        <div className="box">
                            <a href="">
                                <img src="./images/sp-dentist@2x.jpg" alt="" />
                                <h4>Dentist</h4>
                                <p>Teething troubles? Shedule a dental checkup</p>
                            </a>
                        </div>
                        <div className="box">
                            <a href="">
                                <img src="./images/sp-gynecologist@2x.jpg" alt="" />
                                <h4>Gynecologist/Obstetrician</h4>
                                <p>Explore for women's helth , pregnancy and infertility treatments</p>
                            </a>
                        </div>
                        <div className="box">
                            <a href="">
                                <img src="./images/sp-dietitian@2x.jpg" alt="" />
                                <h4>Dietitian/Nutrition</h4>
                                <p>Get guidance on eating right,weight management and sport nutrition</p>
                            </a>
                        </div>
                        <div className="box">
                            <a href="">
                                <img src="./images/sp-physiotherapist@2x.jpg" alt="" />
                                <h4>Physiotherapist</h4>
                                <p>Pulled a muscle? Get it treated by a trined physiotherapist</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section><hr />


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
            <div className="call">
                    <div className="call1">
                        <img width={38} src="./images/call.jpg" alt="" />
                        <label htmlFor="">Get end to end surgical care</label>
                    </div>
                    <div className="call2">
                        <label><img width={17} src="./images/call_symbol.jpg" alt="" /><a href="">Book Appointment</a></label>
                    </div>
                </div>
        </div>
    );
}
export default Home;