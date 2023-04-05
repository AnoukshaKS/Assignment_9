import React, { useState} from 'react';
import Card from '../../components/card/card'
import  AI_JOB from '../../../assets/AI_JOB.png'
import  fullstack from '../../../assets/fullstack.jpg'
import  dataengg from '../../../assets/dataengg.jpg'
import  devops from '../../../assets/devops.png'
import  frontend from '../../../assets/frontend.png'



import './jobs.css'
import Container from 'react-bootstrap/Container';
import Layout from '../../layout/layout'


export default function Jobs(props) {
  const [jobList] = useState([
    {
      title:'Artificial Intellingence',
      description:'REQUIRED: Should be experienced in python and Machine learning',
      image:AI_JOB,
      isButton:true,
      btnName:'Apply',
      isList:false
    },
    {
      title:'Full Stack Developer',
      description:'REQUIRED: Should be experienced in Java, Javascript, SQL, PHP',
      image:fullstack,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Data-Engineer',
      description:'REQUIRED: Should be experienced in cloud, SQL, Migrating Data ',
      image:dataengg,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Devops',
      description:'REQUIRED: Should be experienced in github, jenkins and builds',
      image:devops,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Frontend Developer',
      description:'REQUIRED: Should be experienced in Javascript, React, CSS, HTML',
      image:frontend,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
   
    

]);
let cards=jobList.map((e,i)=>{
 return ( <li key={"index"+i}>
   <Card title={e.title} description={e.description} image={e.image} isSmallCard={true} isList={e.isList} btnName={e.btnName}
    isButton={e.isButton} ></Card>     
  </li>)
});
  return (
    <Layout userName={props.userName}>
      <Container>
        <div className='jobs'>
          <ul>
                {cards}
          </ul>
        </div>
    </Container>
    </Layout>

   )
}
