// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = project
  return (
    <div className="project-card">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="header">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="time">
          <AiFillCalendar className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="_blank" className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
