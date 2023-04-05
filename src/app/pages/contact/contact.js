import React, { useState} from 'react';
import Card from '../../components/card/card'
import  hr1 from '../../../assets/hr5.jpg'
import  hr2 from '../../../assets/hr2.jpeg'
import  hr3 from '../../../assets/hr3.jpeg'
import  hr4 from '../../../assets/hr4.webp'
import  hr6 from '../../../assets/hr6.jpg'



import './contact.css'
import Container from 'react-bootstrap/Container';
import Layout from '../../layout/layout'


export default function Contact(props) {
  const [jobList] = useState([
    {
      title:'Ms. Smith',
      description:'HR',
      image:hr1,
      isButton:false,
      isList:true,
      listData :{
        des1:"Contact: 123-123-2234",
        des2:"smith@workday.org"
      }
    },
    {
      title:'Mrs. Jones',
      description:'Manager',
      image:hr2,
      isButton:false,
      isList:true,
      listData :{
        des1:"Contact: 123-123-2234",
        des2:"jones@workday.org"
      }

    },
    {
      title:'Ms. Davis',
      description:'Technical Consultant',
      image:hr3,
      isButton:false,
      isList:true,
      listData :{
        des1:"Contact: 123-123-2234",
        des2:"davis@workday.org"
      }

    },
    {
      title:'Mr. Peters',
      description:'Accounts Manager',
      image:hr6,
      isButton:false,
      isList:true,
      listData :{
        des1:"Contact: 123-123-2234",
        des2:"peters@workday.org"
      }
    },
    {
      title:'Ms. Phoebe',
      description:'Business Consultant',
      image:hr4,
      isButton:false,
      isList:true,
      listData :{
        des1:"Contact: 123-123-2234",
        des2:"phoebe@workday.org"
      }
    }
    
]);
let cards=jobList.map((e,i)=>{
 return ( <li key={"index"+i}>
   <Card title={e.title} description={e.description} image={e.image} isSmallCard={true} isList={e.isList} btnName={e.btnName}
    isButton={e.isButton} listData ={e.listData} ></Card>     
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
