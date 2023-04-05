
import React from 'react'
import './home.css'
import png1 from '../../../assets/job1.jpg'
import Accordion from 'react-bootstrap/Accordion';
import Layout from '../../layout/layout'
import Cards from '../../components/card/card'

function home(props) {
  let data = {
    title: 'WORKDAY',
    description: "Whether you are an early stage startup, or are looking at growth, scaling or transformation; with our unique approach and technical expertise we assure to take your product to the next level.",
    image: png1,
    description2: "Make your seconds count.",
    isButton1:true,
    isButton2:true,
    btnTitle:'Add Profile',
    btnTitle2: 'Search Jobs',
    title_style: {
      fontSize: "110px",
      color: '#a3a1ff',
      fontFamily: 'emoji',
      fontWeight: 'bolder',
      textAlign: 'center'

    },
    description_style: {
      fontSize: "30px",
      color: "white",
      border: "1px solid",
      marginTop: "50px",
      padding: "23px",
      borderRadius: "47px"
    },
    description2_style:{
      fontSize: "50px",
      color: '#a3a1ff',
      fontFamily: 'emoji',
      fontWeight: 'bolder',
      textAlign: 'center',
      marginTop: "50px"
    },
    button_style:{
      margin:'10px',
      textAlign:'center'

    }
  }


  return (
    <Layout userName={props.userName}>
      <div className='card'>
        <Cards data={data} isImageCard={true} >
          <p>
          Workday is a cloud-based software company that provides human resources, payroll, and financial management applications for businesses of all sizes. 
          Workday's suite of software products helps organizations manage their workforce, including 
          employee data, benefits, time tracking, and performance management. Additionally, Workday's financial management 
          tools provide accounting, procurement, and revenue management capabilities.
          </p>
        </Cards>
      </div>
      <div className='accord'>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>REMINDER 1</Accordion.Header>
            <Accordion.Body>
            "The price of success is hard work, dedication to the job at hand, 
            and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand."
            <br></br>
            <cite title="Source Title">~Vince Lombardi</cite>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>REMINDER 2</Accordion.Header>
            <Accordion.Body>
            "If everyone is moving forward together, then success takes care of itself."
            <br></br>
            <cite title="Source Title">~Henry Ford</cite>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    </Layout>
  );
}

export default home;