
import React from 'react'
import './aboutUs.css'
import bg from '../../../assets/bg.jpg'
import Layout from '../../layout/layout'
import Cards from '../../components/card/card'

function aboutUS(props) {
  let data = {
    title: 'About Us',
    description: "Whether you are an early stage startup, or are looking at growth, scaling or transformation; with our unique approach and technical expertise we assure to take your product to the next level.",
    image: bg,
    description2: "Subscribe now",
    isButton1:true,
    isButton2:false,
    btnTitle:'Reviews',
    btnTitle2: 'Search Jobs',
    title_style: {
      fontSize: "110px",
      color: '#a3a1ff',
      fontFamily: 'emoji',
      fontWeight: 'bolder',

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
           Workday's suite of software products helps organizations manage their workforce, 
           including employee data, benefits, time tracking, and performance management. 
           Additionally, Workday's financial management tools provide accounting, procurement, 
           and revenue management capabilities.
          </p>
        </Cards>
      </div>
      </Layout>
  );
}

export default aboutUS;