//narasimha
import styles from "./TimelineCard.module.css";

const TimeLineCard = ({ event }) => {
  const { date, title, description, icon } = event;

  return (
    <div className="timeline-card">
      <TimelineItem
        date={date}
        title={title}
        description={description}
        icon={icon}
      />
    </div>
  );
};

export default TimeLineCard;
