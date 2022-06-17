import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2001 - 2005"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Butuan Central Elementary School, A.D. Curato Street Butuan City.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Elementary
          </h4>


          <p> From Grade 1 to Grade 5</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2009"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Obrero Elemetary School, Barangay 18 Obrero Pob., Butuan City
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Transfered:
          </h4>

          <p> Grade 5 to Grade 6</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Agusan National High School, A.D. Curato Street Butuan City

          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          HighSchool: ALS-BPOSA
          </h4>
          <p>Alternative Learning System Passer.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - present (Transfered to 2018 curriculum)"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Caraga State University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            College
          </h4>
          <p>
            Bachelor of Science in Information Technology
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 13, 2018 to present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Barangay 16 Ong Yiu, Butuan City

          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Elected Sanguniang Kabataan
          </h4>
          <p>6th Kagawad</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
