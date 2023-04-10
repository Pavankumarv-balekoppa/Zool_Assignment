import { useEffect } from "react";
import { useState } from "react";
const Inputphoto = () => {

    let[card,setcard]=useState([])
    let[circle,setcircle]=useState([])
    let[box,setbox]=useState([])

    useEffect(()=>{
       let fetching=async()=>{
            let response1=await fetch("http://localhost:7777/card")
            let data1=await response1.json()
            let response2=await fetch("http://localhost:7777/circle")
            let data2=await response2.json()
            let response3=await fetch("http://localhost:7777/boxs")
            let data3=await response3.json()
            setcard(data1)
            setcircle(data2)
            setbox(data3)
        }
        fetching()
    },[])
    // console.log(card);
    // console.log(circle);
    // console.log(box);

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
                {card.map((x)=>(
                    <div className="card">
                    <a href="">
                        <div className="im1">
                            <img src={x.card} alt="" />
                        </div>
                        <h3>{x.h3}</h3>
                        <p>{x.p}</p>
                    </a>
                </div>
                ))}
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
                    {circle.map((y)=>(
                        <div className="circle">
                        <a href="">
                            <img src={y.circle} alt="" />
                            <p>{y.p}</p>
                            <h6>{y.h6}</h6>
                        </a>
                    </div>
                    ))}
                </div>
                <div className="photo5">
                    <h2 style={{ margin: 0 }}>Book an appointment for an in-clinic consultation</h2>
                    <p style={{ marginLeft: 0, marginBottom: 0 }}>Find experienced doctors across all specialties</p>
                    <div className="boxes">
                        {box.map((z)=>(
                            <div className="box">
                            <a href="">
                                <img src={z.box} alt="" />
                                <h4>{z.h4}</h4>
                                <p>{z.p}</p>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>
            </section><hr/>
        </div>
     );
}
 
export default Inputphoto;