import React, {Component} from 'react';
import MainImg from '../Img/Img';
import Section from '../Section/Section';
import MainInfo from '../MainInfo/MainInfo';
import SectionInfo from '../SectionInfo/SectionInfo';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';


class Resume extends Component {

    render(){
        return <>
        <Section><MainImg name = 'Oleksandr Hrubyi' skills ={['Html', 'Css', 'Js', 'React', 'Github']} soft ={['Працелюбність', 'Відповідальність', 'Цілеспрямованість', 'Порядність']} /></Section>
        <SectionInfo>
            <MainInfo name ="Грубий Олександр Вікторович" age ="32"/>
            <Experience/>
            <Education/>
          
            </SectionInfo>
           
        
        </>
    }
}

export default Resume