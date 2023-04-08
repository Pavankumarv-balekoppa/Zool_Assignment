const Inputphoto = () => {
    return ( 
        <div className="inputphoto">
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
        </div>
     );
}
 
export default Inputphoto;