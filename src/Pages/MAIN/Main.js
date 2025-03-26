import React from "react";
import bg_space from "../../assets/bg_space.gif";
import mylearning from "../../assets/mylearning.png";
import astronaut from "../../assets/astronaut.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Main.css";


function Main() {
  return (
    <>
      <section
        className="bg-space"
        style={{
          backgroundImage: `url(${bg_space})`,
          height: "70vh",
          width: "100%",
          backgroundRepeat: "repeat",
          backgroundSize: "500px, 500px",
        }}
      >
        <div className="astronaut">
          <img src={astronaut} alt="astronaut"></img>
        </div>
        <div>
          <h1 className="learn">Learn To Code</h1>
        </div>
        <div>
          <h5 className="line">With the world's largest web developer site.</h5>
        </div>
        <br />

        <form className="example" action="/">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search our tutorials, e.g. HTML"
              name="search"
              style={{
                width: "20%",
                padding: "15px",
                height: "1rem",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                outline: "none",
                border: "none",
              }}
            ></input>
            <button
              type="submit"
              style={{
                backgroundColor: "#04AA6D",
                color: "white",
                border: "none",

                padding: "1rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: "1rem",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <i className="fa fa-search" style={{ marginRight: "5px" }}></i>
              Search
            </button>
          </div>
        </form>
      </section>
      {/* <img src= {bg_space} alt = "image" style={{width:'100%'}}/> */}
      <svg
        style={{ backgroundColor: "#D9EEE1" }}
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="wavepath"
          d="M0,0  L110,0C35,150 35,0 0,100z"
          fill="#282A35"
        ></path>
      </svg>

      <section className="section2">
        <div className="section2div" style={{ display: "flex" }}>
          <div className="inside1">
            <div>
              <h1>HTML</h1>
            </div>
            <div>
              <p>The language for building web pages</p>
            </div>
            <div className="buttonss">
              <div>
                <button className="learnbtn">Learn HTML</button>
              </div>
              <div>
                <button className="videobtn">Video Tutorial</button>
              </div>
              <div>
                <button className="refbtn">HTML Reference</button>
              </div>
              <div>
                <button className="certificatebtn">Get Certified</button>
              </div>
            </div>
          </div>
          <div className="inside2">
            <div>
              <h4>HTML Example</h4>
            </div>
            <div className="inside3">
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}> !DOCTYPE</span>
              <span style={{ color: "red" }}> html</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>html</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>head</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>title</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <span>HTML Tutorial </span>
              <span style={{ color: "#2d289e" }}>{"</"}</span>
              <span style={{ color: "brown" }}>title</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"</"}</span>
              <span style={{ color: "brown" }}>head</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>body</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br /> <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>h1</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <span>This is a heading</span>
              <span style={{ color: "#2d289e" }}>{"</"}</span>
              <span style={{ color: "brown" }}>h1</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>p</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <span>This is a paragraph.</span>
              <span style={{ color: "#2d289e" }}>{"</"}</span>
              <span style={{ color: "brown" }}>p</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <br />
              <span style={{ color: "#2d289e" }}>{"</"}</span>
              <span style={{ color: "brown" }}>body</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"</"}</span>
              <span style={{ color: "brown" }}>html</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
            </div>
            <div>
              <button className="tryyourselfbtn" >Try it Yourself</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="section3div" style={{ display: "flex" }}>
          <div className="inside1">
            <div>
              <h1>CSS</h1>
            </div>
            <div>
              <p>The language for styling web pages</p>
            </div>
            <div className="buttonss">
              <div>
                <button className="learnbtn">Learn CSS</button>
              </div>
              <div>
                <button className="refbtn">CSS Reference</button>
              </div>
              <div>
                <button className="certificatebtn">Get Certified</button>
              </div>
            </div>
          </div>
          <div className="inside2">
            <div>
              <h4>CSS Example:</h4>
            </div>
            <div className="inside3">
              <span style={{ color: "brown" }}>body </span>
              <span>{"{"}</span>
              <br />
              <span style={{ color: "red" }}>
                &nbsp;&nbsp; background-color
              </span>
              <span style={{ color: "#2d289e" }}>: lightblue;</span>
              <br />
              <span>{"}"}</span>

              <br />
              <br />
              <span style={{ color: "brown" }}>h1 </span>
              <span>{"{"}</span>
              <br />
              <span style={{ color: "red" }}>&nbsp;&nbsp;color</span>
              <span style={{ color: "#2d289e" }}>: white;</span>
              <br />
              <span style={{ color: "red" }}>&nbsp;&nbsp;text-align</span>
              <span style={{ color: "#2d289e" }}>: center;</span>
              <br />
              <span>{"}"}</span>

              <br />
              <br />
              <span style={{ color: "brown" }}>p </span>
              <span>{"{"}</span>
              <br />
              <span style={{ color: "red" }}>&nbsp;&nbsp;font-family</span>
              <span style={{ color: "#2d289e" }}>: verdana;</span>
              <br />
              <span>{"}"}</span>
            </div>
            <div>
              <button className="tryyourselfbtn">Try it Yourself</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="section4div" style={{ display: "flex" }}>
          <div className="inside1">
            <div>
              <h1>Javascript</h1>
            </div>
            <div>
              <p>The language for programming web pages</p>
            </div>
            <div className="buttonss">
              <div>
                <button className="learnbtn">Learn Javascript</button>
              </div>
              <div>
                <button
                  className="refbtn"
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  Javascript Reference
                </button>
              </div>
              <div>
                <button className="certificatebtn">Get Certified</button>
              </div>
            </div>
          </div>
          <div className="inside2">
            <div>
              <h4 style={{ color: "black" }}>Javascript Example:</h4>
            </div>
            <div className="inside3">
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>button </span>
              <span style={{ color: "red" }}>onClick</span>
              <span>=</span>
              <span style={{ color: "#2d289e" }}>"myFunction()"</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <span style={{ color: "black" }}>CLick Me!</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>/button</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>script</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>function </span>
              <span style={{ color: "black" }}>myFunction() {"{"}</span>
              <br />
              <span style={{ color: "#2d289e" }}> &nbsp;&nbsp; let x </span>
              <span style={{ color: "black" }}>= document.getElementById</span>
              <span style={{ color: "black" }}>{"("}</span>
              <span style={{ color: "brown" }}>"demo"</span>
              <span style={{ color: "black" }}>{")"};</span>
              <br />
              <span style={{ color: "black" }}>
                {" "}
                &nbsp;&nbsp; x.style.fontSize ={" "}
              </span>
              <span style={{ color: "brown" }}>"25px"</span>
              <span style={{ color: "black" }}>;</span>
              <br />
              <span style={{ color: "black" }}>
                {" "}
                &nbsp;&nbsp; x.style.color ={" "}
              </span>
              <span style={{ color: "brown" }}>"red"</span>
              <span style={{ color: "black" }}>;</span>
              <br />
              <span style={{ color: "black" }}>{"}"}</span>
              <br />
              <span style={{ color: "#2d289e" }}>{"<"}</span>
              <span style={{ color: "brown" }}>/script</span>
              <span style={{ color: "#2d289e" }}>{">"}</span>
            </div>
            <div>
              <button className="tryyourselfbtn">Try it Yourself</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="section5div" style={{ display: "flex" }}>
          <div className="inside1">
            <div>
              <h1>Python</h1>
            </div>
            <div>
              <p>A popular programming language</p>
            </div>
            <div className="buttonss">
              <div>
                <button className="learnbtn">Learn Python</button>
              </div>
              <div>
                <button className="refbtn">Python Reference</button>
              </div>
              <div>
                <button className="certificatebtn">Get Certified</button>
              </div>
            </div>
          </div>
          <div className="inside2">
            <div>
              <h4>Python Example:</h4>
            </div>
            <div className="inside3">
              <span style={{ color: "#2d289e" }}>if </span>
              <span style={{ color: "red" }}>5 </span>
              <span style={{ color: "black" }}>{">"} </span>
              <span style={{ color: "red" }}>2</span>
              <span style={{ color: "black" }}>{":"}</span>
              <br />
              <span> &nbsp;&nbsp; print{"("}</span>
              <span>"Five is greater than two!" </span>
              <span>{")"}</span>
            </div>
            <div>
              <button className="tryyourselfbtn">Try it Yourself</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section6">
        <div className="section6div" style={{ display: "flex" }}>
          <div className="inside1">
            <div>
              <h1>SQL</h1>
            </div>
            <div>
              <p>A language for accessing databases</p>
            </div>
            <div className="buttonss">
              <div>
                <button className="learnbtn">Learn SQL</button>
              </div>
              <div>
                <button className="refbtn">SQL Reference</button>
              </div>
              <div>
                <button className="certificatebtn">Get Certified</button>
              </div>
            </div>
          </div>
          <div className="inside2">
            <div>
              <h4>SQL Example:</h4>
            </div>
            <div className="inside3">
              <span style={{ color: "#2d289e" }}>SELECT </span>
              <span style={{ color: "black" }}>{"*"} </span>
              <span style={{ color: "#2d289e" }}>FROM </span>
              <span style={{ color: "black" }}>Customers </span>
              <br />
              <span style={{ color: "#2d289e" }}>WHERE </span>
              <span style={{ color: "black" }}>Country = </span>
              <span style={{ color: "Brown" }}>'Mexico' </span>
              <span style={{ color: "black" }}>{";"}</span>
            </div>
            <div>
              <button className="tryyourselfbtn">Try it Yourself</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section7">
        <Container>
      <Row>
        <Col className="pink">
        <h2 className="hh">PHP</h2>
        <h6 className="headd">A web server programming language</h6>
        <button style={{backgroundColor : "#282A35" , color : "white" , alignItems:"center" , margin : "2rem auto" , display : "block" , borderRadius : "20px" , width : "10rem"}}>Learn PHP</button>
        </Col>
        <Col className="yello">
        <h2 className="hh">jQuery</h2>
        <h6 className="headd">A JS Library for developing web pages</h6>
          <button style={{backgroundColor : "#282A35" , color : "white" , alignItems:"center" , margin : "2rem auto" , display : "block" , borderRadius : "20px" , width : "10rem"}}>Learn jQuery</button>

        </Col>
      </Row>
      <Row>
        <Col className="babypink">
        <h2 className="hh">Java</h2>
        <h6 className="headd">A programming language</h6>
          <button style={{backgroundColor : "#282A35" , color : "white" , alignItems:"center" , margin : "2rem auto" , display : "block" , borderRadius : "20px" , width : "10rem"}}>Learn Java</button>

        </Col>
        <Col className="lgreen">
        <h2 className="hh">C++</h2>
        <h6 className="headd">A programming language</h6>
          <button style={{backgroundColor : "#282A35" , color : "white" , alignItems:"center" , margin : "2rem auto" , display : "block" , borderRadius : "20px" , width : "10rem"}}>Learn C++</button>

        </Col>
      </Row>
      <Row>
        <Col className="dgreen">
        <h2 className="hh">W3.CSS</h2>
        <h6 className="headd">A CSS framework for faster and better responsive web pages</h6>
          <button style={{backgroundColor : "#282A35" , color : "white" , alignItems:"center" , margin : "2rem auto" , display : "block" , borderRadius : "20px" , width : "10rem"}}>Learn W3.CSS</button>

        </Col>
        <Col className="violet">
        <h2 className="hh">Bootstrap</h2>
        <h6 className="headd">A CSS framework for developing better web pages </h6>
          <button style={{backgroundColor : "#282A35" , color : "white" , alignItems:"center" , margin : "2rem auto" , display : "block" , borderRadius : "20px" , width : "10rem"}}>Learn Bootstrap</button>
        </Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "7rem"}}><h4 style={{textAlign : "center" , margin : "2rem" , fontSize : "xx-large" , fontFamily : "Poppins, sans-serif"}}>C</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "7rem"}}><h4 style={{textAlign : "center" , margin : "2rem" , fontSize : "xx-large" , fontFamily : "Poppins, sans-serif"}}>C#</h4></Col>
      </Row>

      <Row>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>R</h4></Col>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Kotlin</h4></Col>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Node.js</h4></Col>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>React</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>JSON</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Vue</h4></Col>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>MySQL</h4></Col>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>XML</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Sass</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Icons</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>RWD</h4></Col>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Graphics</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>SVG</h4></Col>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Canvas</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Raspberry Pi</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Cyber Security</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Colors</h4></Col>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Git</h4></Col>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Matplotlib</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>NumPy</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Pandas</h4></Col>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>SciPy</h4></Col>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>ASP</h4></Col>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>AngularJS</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>AppML</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Go</h4></Col>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>TypeScript</h4></Col>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Django</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>MongoDB</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Statistics</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Data Science</h4></Col>
        <Col style={{backgroundColor : "#D9EEE1" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Typing Speed</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "4rem" , width : "2rem"}}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>HowTo</h4></Col>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Code Game</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>Spaces</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "4rem" , width : "2rem" }}><h4 style={{fontSize : "x-large" , fontFamily : "Poppins , sans-serif" , textAlign : "center" , margin : "10px 0"}}>PostgreSQL</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#96D4D4" , margin : "2rem" , height : "7rem"}}><h4 style={{textAlign : "center" , margin : "2rem" , fontSize : "xx-large" , fontFamily : "Poppins, sans-serif"}}>Excel</h4></Col>
        <Col style={{backgroundColor : "#FFF4A3" , margin : "2rem" , height : "7rem"}}><h4 style={{textAlign : "center" , margin : "2rem" , fontSize : "xx-large" , fontFamily : "Poppins, sans-serif"}}>Google Sheets</h4></Col>
      </Row>
      <Row>
        <Col style={{backgroundColor : "#FFC0C7" , margin : "2rem" , height : "7rem"}}><h4 style={{textAlign : "center" , margin : "2rem" , fontSize : "xx-large" , fontFamily : "Poppins, sans-serif"}}>Machine Learning</h4></Col>
        <Col style={{backgroundColor : "#F3ECEA" , margin : "2rem" , height : "7rem"}}><h4 style={{textAlign : "center" , margin : "2rem" , fontSize : "xx-large" , fontFamily : "Poppins, sans-serif"}}>Artificial Intelligence</h4></Col>
      </Row> 
    </Container>
    <h1 style={{color : "white" , fontSize : "55px" , fontWeight : "700" , marginTop : "3rem" , textAlign : "center"}}>Code Editor</h1>
    <h6 style={{color : "white" , textAlign : "center" , marginTop : "0.6rem"}}>With our online code editor,you can edit code eand view the result in your browser</h6>
              
      </section>
      <section className="section8">
        <div className="sub-sec8">
          <h1 style={{textAlign : "center"}}>My Learning</h1>
          <p style={{textAlign : "center"}}>Track your progress with our free "My Learning" program</p>
          <p style={{textAlign : "center"}}>Log in to your account,and start earning points!</p>
          <div className="myLearning" style={{marginLeft :"auto" , marginRight : "auto"}}>
            <img src={mylearning} alt="learning image" style={{justifyContent : "center" , alignItems : "center" , justifySelf :  "center"}}></img>
            <button className="tryyourselfbtn" style={{marginTop : "2rem" , marginLeft : "32rem" , marginBottom :"2rem"}}>Sign Up for Free</button>
          </div>
     
        </div>
      </section>
    </>
  );
}

export default Main;
