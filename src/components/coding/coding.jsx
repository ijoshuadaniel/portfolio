import './coding.scss';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import react from './../../assets/coding/react.svg';
import firebase from './../../assets/coding/firebase.svg'
import android from './../../assets/coding/android.svg';
import docker from './../../assets/coding/docker.svg';
import flutter from './../../assets/coding/flutter.svg';
import github from './../../assets/coding/github.svg';
import graphql from './../../assets/coding/graphql.svg';
import html from './../../assets/coding/html.svg';
import ios from './../../assets/coding/ios.svg';
import javascript from './../../assets/coding/javascript.svg';
import jquery from './../../assets/coding/jquery.svg';
import mongodb from './../../assets/coding/mongodb.svg';
import mysql from './../../assets/coding/mysql.svg';
import nodejs from './../../assets/coding/nodejs.svg';
import php from './../../assets/coding/php.svg';
import scss from './../../assets/coding/saas.svg';
import seo from './../../assets/coding/seo.svg';
import wordpress from './../../assets/coding/wordpress.svg';
import apple from './../../assets/coding/apple.svg';
import linux from './../../assets/coding/linux.svg';
import windows from './../../assets/coding/windows.svg';
import css from './../../assets/coding/css.svg';
import dart from './../../assets/coding/dart.svg';
import vscode from './../../assets/coding/vs-code.svg';


const ProgrammingLanguague = () => (
 <div className="coding-top">
     <Container>
         <h2 className="text-center">SKILLS I KNOW</h2>
         <p className="text-center">Skills are the qualities I have been learning and possess for better perfomance in my career. I have mastered in high end skills vital for a Web developer. My top technical skills include PHP, NODEJS, REACT, MONGO DB and more. In addition to this I acquire interpersonal skills, quick learning skills and I am self motivated.</p>
     <Row className="coding-lang">
        <Col md="2" xs="4"><img src={react} alt="react"/></Col>
        <Col md="2" xs="4"><img src={firebase} alt="firebase"/></Col>
        <Col md="2" xs="4"><img src={nodejs} alt="nodejs"/></Col>
        <Col md="2" xs="4"><img src={mongodb} alt="mongodb"/></Col>
        <Col md="2" xs="4"><img src={javascript} alt="javascript"/></Col>
        <Col md="2" xs="4"><img src={graphql} alt="graphql"/></Col>
        <Col md="2" xs="4"><img src={php} alt="php"/></Col>
        <Col md="2" xs="4"><img src={mysql} alt="mysql"/></Col>
        <Col md="2" xs="4"><img src={jquery} alt="jquery"/></Col>
        <Col md="2" xs="4"><img src={html} alt="html"/></Col>
        <Col md="2" xs="4"><img src={css} alt="css"/></Col>
        <Col md="2" xs="4"><img src={scss} alt="sass"/></Col>
        <Col md="2" xs="4"><img src={flutter} alt="flutter"/></Col>
        <Col md="2" xs="4"><img src={dart} alt="dart"/></Col>
        <Col md="2" xs="4"><img src={android} alt="android"/></Col>
        <Col md="2" xs="4"><img src={ios} alt="ios"/></Col>
        <Col md="2" xs="4"><img src={docker} alt="docker"/></Col>
        <Col md="2" xs="4"><img src={wordpress} alt="wordpress"/></Col>
        <Col md="2" xs="4"><img src={seo} alt="seo"/></Col>
        <Col md="2" xs="4"><img src={github} alt="github"/></Col>
        <Col md="2" xs="4"><img src={apple} alt="apple"/></Col>
        <Col md="2" xs="4"><img src={linux} alt="linux"/></Col>
        <Col md="2" xs="4"><img src={windows} alt="windows"/></Col>
        <Col md="2" xs="4"><img src={vscode} alt="vscode"/></Col>
     </Row>
     </Container>
 </div>
)

export default ProgrammingLanguague;