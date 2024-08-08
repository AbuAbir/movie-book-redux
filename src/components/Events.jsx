import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../features/events/eventSlice";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (events.status === "loading") return <div> Loading....</div>;
  if (events.status === "failed") return <div>Error{events.error}</div>;

  return (
    <div>
      {events.records.map((event) => (
        <div key={event.id} style={{ marginBottom: "40px" }}>
          <h1>{event.name}</h1>

          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
