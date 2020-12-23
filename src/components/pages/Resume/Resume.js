import React, { Component } from "react";
import Education from "../../Education/Education";
import Experience from "../../Experience/Experience";
import resumePaint from "../../../videos/resumePaint.mp4";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <video autoPlay muted>
          <source src={resumePaint} type="video/mp4" />
        </video>

        <div className="resume-body">
          <div className="resume-left-col">
            <h2>Andrew Garcia</h2>
            <h4>Web Developer | Scrum Master</h4>
            <hr />
            <p>
              “One reason product management is such an appealing career is you
              get to sit at the intersection of technology, business, and
              design.”
            </p>
            <p>
              <i>― Gayle Laakmann McDowell</i>
            </p>
            <hr />
            <h5>Location</h5>
            <p>Miami, FL</p>
            <h5>Phone</h5>
            <p>(305) 542-8722</p>
            <h5>Email</h5>
            <p>garandrew102@gmail.com</p>
            <h5>Web</h5>
            <p>www.andrewgport.com</p>
            <hr />
          </div>
          <div className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear={2008}
              endYear={2013}
              schoolName="The City College Of New York"
              schoolCourse={
                <p>
                  <i>BA - Psychology</i>
                </p>
              }
            />
            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Wyncode Academy"
              schoolCourse={
                <p>
                  <i>Full Stack Web Development</i>
                </p>
              }
              schoolDescription={
                <ul>
                  <li>
                    Trained in HTML, CSS, JavaScript as main programming
                    languages.
                  </li>
                  <li>
                    Used Bootstrap library and React Framework to develop
                    projects.
                  </li>
                  <li>
                    Completed 350+ hours of staffed learning and 8,000+ lines of
                    code.
                  </li>
                  <li>
                    Presented Midterm and Final Project as end products to a
                    panel of judges and audience.
                  </li>
                </ul>
              }
            />
            <hr />
            <h2>Experience</h2>
            <Experience
              startYear="Jan. 2019"
              endYear="Sept. 2019"
              jobName="Blue Streak Telecommunications"
              jobTitle={<i>HR Coordinator/Payroll Clerk</i>}
              jobDescription={
                <ul>
                  <li>
                    Oversaw the rolling out of new medical benefits for the 2020
                    - 2021 calendar by successfully enrolling 200 employees.
                  </li>
                  <li>
                    Resonsbile for payroll, verifying billable hours and keeping
                    employee records secure with key access.
                  </li>
                  <li>
                    Verified i9, W4, E-verify, and job offer letter were all
                    signed and accurate.
                  </li>
                  <li>
                    Prepared and submitted payroll reports, new hire reports,
                    and over time reports monthly to President and executive
                    team.
                  </li>
                  <li>
                    Create job posts and conduct first round interviews for
                    entry and managerial positions.
                  </li>
                </ul>
              }
            />
            <Experience
              startYear="Jan. 2018"
              endYear="Sept. 2018"
              jobName="Park One"
              jobTitle={<i>HR Assistant/Recruiter</i>}
              jobDescription={
                <ul>
                  <li>
                    Managed the Applicant Tracking System while concurrently
                    filtering through applicants based on hiring needs.
                  </li>
                  <li>
                    Created job postings, participating in job fairs, and
                    conducting first round interviews.
                  </li>
                  <li>
                    Verified i9, W4, E-verify and all other on-boarding
                    documents were completed for all new hires I recruited.
                  </li>
                  <li>
                    Led new hire orientation for 20 to 30 new hires every week
                    going over safety procedures and company policy.
                  </li>
                  <li>
                    Monitored drivers license status for approximately 1500
                    employees to maintain compliance and reduce risk.
                  </li>
                  <li>
                    Strengthened HR investigations by gathering evidence if
                    there was any suspicion of company policy being violated.
                  </li>
                </ul>
              }
            />
            <Experience
              startYear="Dec. 2016"
              endYear="Dec. 2017"
              jobName="GL Staffing/Waste Collections"
              jobTitle={<i>VOP Manager/Recruiter</i>}
              jobDescription={
                <ul>
                  <li>
                    Responsible for interviewing, drug testing, on-boarding,
                    scheduling, billing, and payroll for approximately 200
                    employees.
                  </li>
                  <li>
                    Verified i9, W4, E-verify and all other on-boarding
                    documents were completed for all employees and new hires.
                  </li>
                  <li>
                    Reduced overtime spending by $2000 weekly in labor costs by
                    increasing the number of front line workers due to increase
                    of business.
                  </li>
                  <li>
                    Built relationships with Career Source recruiters and other
                    staffing angencies updating them on open positions to find
                    suitable candidates to fill the roles needed.
                  </li>
                  <li>
                    Submitted reports to clients weekly including new hires,
                    turn over, payroll, total hours in labor, and any injuries
                  </li>
                  <li>
                    Conducted monthly on-site observations ensuring all staff
                    has proper safety equipment (OHSA).
                  </li>
                  <li>
                    Investigated any work-related injuries and seek medical
                    attention if needed.
                  </li>
                  <li>
                    Managed client requests via email regarding invoices and
                    staffing needs.
                  </li>
                </ul>
              }
            />
            <hr />
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li>Team & Product Management</li>
                <li>Public Speaking & Presentation Design</li>
                <li>Customer Relationship Management</li>
                <li>Sprint Planning & Backlog</li>
                <li>Documentation & Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
