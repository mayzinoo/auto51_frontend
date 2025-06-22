import { React,Fragment, useRef } from 'react';
import './style/Contact.css'
import TopBanner from '../../Components/TopBanner';
import NavHeader from '../../Components/NavHeader';
import HeadContact from './component/HeadContact';
import MiddleContact from './component/MiddleContact';

function Contact() {

    const middleContact = useRef(null);
    const meetingForm = useRef(null);

    const gotoMiddleContact = () => window.scrollTo({
        top:middleContact.current.offsetTop,
        behavior: "smooth"
    });

    const gotoMeetingForm = () => window.scrollTo({
        top:meetingForm.current.offsetTop,
        behavior: "smooth"
    });

    return (
        <Fragment>
            <TopBanner title='Contact'/>
            <NavHeader pageName = 'contact'/>
            <section className='Contact-body-content'>
                <HeadContact gotoMiddleContact = {gotoMiddleContact} gotoMeetingForm = {gotoMeetingForm}/>
                <MiddleContact reference = {middleContact}/>
            </section>
        </Fragment>
    )
}

export default Contact;

                