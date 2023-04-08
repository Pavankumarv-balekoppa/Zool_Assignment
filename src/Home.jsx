import Footer from "./Footer1";
import Inputphoto from "./Inputphoto";
import Nextpage from "./Nextpage";

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
            <Inputphoto/>
            <Nextpage/>
            <Footer/>
        </div>
    );
}
export default Home;