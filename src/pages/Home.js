import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello! I'm Frankirico Restor</h2>
        <div className="prompt">
          <p>I'm a Bachelor of Science in Information Technology Student and Studied at Caraga State University.</p>
        </div>
      </div>
      <div className="skills">
        <h1> My Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Trainings and Seminars</h2>
            <span>
            Sangguniang Kabataan Mandatory Traning, Voter’s Education Seminar, Leadership Training Seminar, 
            Emergency Service Unit, Philippine National Red Cross, Rover Scout of the Philippines, 
            National Disaster Risk Reduction & Management, Theorical Driving Course, Practical Driving Course. 
            </span>
          </li>
          <li className="item">
            <h2>Awards and Achievements</h2>
            <span>
            Department Of Health  “La Fiesta Pelicula” - 1st Place (Blood Donation Video Category), 
            Sanguniang Kabataan Cluster 5 – Butuan City – Leadership Award,
            Bureau Of Fire Protection – Butuan City – Volunteer,
            National Disaster Risk Reduction & Management Council – Volunteer,
            Leadership Communities - Member.
            </span>
          </li>
          <li className="item">
            <h2>Computer Skills</h2>
            <span>
            Microsoft XP applications (Word, Excel, Office, PowerPoint, Outlook, Access),
            Google Drive (Docs, Sheets, Slides, Forms),
            Spreadsheets (Excel, Google Sheets, OpenOffice Calc),
            Email (mail merge, filters, folders, rules),
            Presentations/Slideshows (Powerpoint, Google Slides, OpenOffice Impress, Tableu),
            Adobe Photoshop (Picture Editing, Tarpulin, Background, Etc.)
            </span>
          </li>
          <li className="item">
            <h2>Database Management</h2>
            <span>
            MS Access, Oracle, Teradata, IBM DB2, MySQL, SQL
            </span>
          </li>
          <li className="item">
            <h2>Front End and Back End Development</h2>
            <span>HTML, CSS, Javascript, Java, Python, C#, C, C++, Laravel, Django, React JS, Bootstrap and more...</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
