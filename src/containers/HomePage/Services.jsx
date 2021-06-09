import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ServiceCard from "../../component/serviceCard/index.jsx"
const ServicesContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items:flex-start;
`;

const Title = styled.h1`
font-weight: 900;
color:#000;
`;

const ServicesWrapper = styled.div`
display:flex;
flex-wrap:wrap;
`;

const wait = (num) => num=new Promise((rs)=>setTimeout(rs,num))


export function Services(props) {

        const [offeredServices,setServices] = useState([]);
        const [isloading,setLoading] = useState(false);

        const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.length===0);
        const WarningText = styled.h3`
        color:rbga(100,100,100);
        font-weight:500;
        `;

        const fetchServices = async()=>{
        setLoading(true)
        const response = await axios.get("http://localhost:9000/services").catch((err)=>{
            console.log("Error has occured!!",err);
        })

        await wait(2000)
        if(response){
            setLoading(false)
            setServices(response.data)
            console.log(response.data)
        }
    }
    
    useEffect(()=>{
        fetchServices();
    },[])

    return (
        <>
            <ServicesContainer>
                <Title>Most Used Services & More</Title>
                <ServicesWrapper>
                    {isServicesEmpty && !isloading && (<WarningText>No Services are published yet!</WarningText>)}
                    {isloading && (<WarningText>Loading...</WarningText>)}
                    {!isServicesEmpty && 
                        !isloading && 
                        offeredServices.map((service,idx)=>{
                            return(<ServiceCard id={idx}{...service}/>)
                        
                    })}
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
}

