// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'
const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <h1 className="my-journey">
        MY JOURNEY OF <br /> <span className="ccbp">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            titleColor: '#0967d2',
            primary: '#0967d2',
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => (
            <div key={each.id}>
              {each.categoryId === 'COURSE' ? (
                <CourseTimelineCard course={each} />
              ) : (
                <ProjectTimelineCard project={each} />
              )}
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
