import React, { useState, useEffect } from "react"; import "./Resume.css";
import { resumeBullets } from "../../data";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";


const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };


    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 75 },
        { skill: "React JS", ratingPercentage: 70 },
        { skill: "Express JS", ratingPercentage: 65 },
        { skill: "Node JS", ratingPercentage: 65 },
        { skill: "Mongo Db", ratingPercentage: 65 },
        { skill: "HTML", ratingPercentage: 90 },
        { skill: "CSS", ratingPercentage: 75 },
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2022" },
            description:
                "Portfolio website created to demonstrate my knowledge of  working with reusable components .",
            subHeading: "Technologies Used: React JS, Bootsrap, Nodemailer",
        },
        {
            title: "Kibbles and Ritz Capstone",
            duration: { fromDate: "2021" },
            description:
                "Collaborated on a five person capstone project following scrum processes and roles to build a full stack application with ReactJS and communicate with the Google Maps API to aid pet owners with a feasible way to plan trips/vacations by identifying pet-friendly establishments.",
            subHeading:
                "Technologies Used:  React, Mongo DB, Express Js, Node Js, Bootstrap.",
        },
        // {
        //     title: " ",
        //     duration: { fromDate: "", toDate: "" },
        //     description:
        //         "",
        //     subHeading:
        //         "",
        // },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Kenzie Academy, Indiana, IN"}
                subHeading={"Certificate/MERN Stack"}
                fromDate={"2020"}
                toDate={"2021"}
                description={"Completed a 15 month of intensive technical programs earning front-end and MERN Stack software certifications."}
            />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Amazon, Inc"}
                    subHeading={"Vendor Receive Associate/Ambassador"}
                    fromDate={"October 2016"}
                    toDate={"Ocotober 2021"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Meticulously and successfully trained many new Amazon Associates in the Inbound Vendor Receive
                        processes to ensure consistent quality of merchandise as per SOP.
                    </span>
                </div>
                <br />
                <ResumeHeading
                    heading={"Amazon, Inc"}
                    subHeading={"ISS/Inbound Problem Solver"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Supported Inbound department with problem solving vendor defects and data collection to minimize quality and quantity issues going to the production floor.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Identified and removed expired products to make space for new inventory and ensure customer safety.</span>
                    <br />


                </div>



            </div>
        </div >,

        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        // <div className="resume-screen-container" key="interests">
        //     <ResumeHeading
        //         heading=""
        //         description=""
        //     />
        //     <ResumeHeading
        //         heading="Music"
        //         description=""
        //     />
        //     <ResumeHeading
        //         heading=""
        //         description=""
        //     />
        // </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={`${bullet.logoSrc}`}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Resume Highlights"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;