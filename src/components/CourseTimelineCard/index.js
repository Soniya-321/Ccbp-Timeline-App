// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'
const CourseTimelineCard = props => {
  const {course} = props
  const {title, courseTitle, description, tagsList, duration} = course
  return (
    <div className="course-card">
      <div className="header">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="time">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags">
        {tagsList.map(each => (
          <p key={each.name} className="tags-list">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
