import React from "react";
import { Button } from './Button';
import { Form } from './Forms';
import { HorizontalDivider, VerticalDivider } from "./Dividers";
import { Link } from 'react-router-dom';
import './Section.css';

function Section(props) {
    const {lightBg, topLine, lightText, lightTextDesc, headline, description, subdescription, buttonLabel, img, alt, imgStart, withForm } = props

    return (
    <>
            <div className={lightBg ? 'home_hero-section' : 'hero__hero-section darkBg'}>
                <div>
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h2 className={lightText ? 'heading' : 'heading dark'}>{headline}</h2>

                                
                                {/* { withForm && <Form name={"Full name:"} field2={"emails"}/>} */}
                                {/* { withForm && <Form labe={name} field2={field2}/>} */}
                                { withForm && <Form {...props}/>} 

                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <HorizontalDivider />
                                <p className="subheading">{subdescription}</p>

                                <Link to="/sign-up">
                                    {buttonLabel && 
                                        <Button buttonSize='btn-medium' buttonColor='blue'>{buttonLabel}</Button>
                                    }
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SectionTest(props) {
    return(
        <>
            <div className={'home_hero-section darkBg'}>
                    <div className="row2 home__hero-row"
                    style={{display: 'flex', flexDirection: 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{props.topLine}</div>
                                <h4 className='preheading'>{props.preheadline}</h4>
                                <h1 className={props.lightText ? 'heading' : 'heading dark'}>{props.headline}</h1>

                                <VerticalDivider />
                                <p className={props.lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {props.name} {props.description}</p>

                                <Link to="/sign-up">
                                    {props.buttonLabel && 
                                        <Button buttonSize='btn-medium' buttonColor='blue'>{props.buttonLabel}</Button>
                                    }
                                </Link>

                            </div>
                        </div>
                        <div className="col2">
                            <div className="home__hero-img-wrapper">
                                <img src={props.img} alt={props.alt} className='home__hero-img' />
                            </div>
                            <div className="home__hero-img-wrapper">
                                <img src={props.img} alt={props.alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export { Section, SectionTest }