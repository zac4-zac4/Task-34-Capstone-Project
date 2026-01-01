import React from "react";
import { useEvents } from "../contexts/EventContext.jsx";

export default function Dashboard() {
  const { events, deleteEvent, updateEvent } = useEvents();

  return (
    <div className="container mt-5 pt-4">
      <h2>Dashboard</h2>
      <h3>Upcoming Events</h3>

      {events.length === 0 && <p>No events yet.</p>}

      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-6 col-lg-4 mb-3">
            <div className="event-item">
              <h4>{event.title}</h4>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Location:</strong> {event.location}</p>

              <button onClick={() => deleteEvent(event.id)}>Delete</button>
              <button
                onClick={() => {
                  const newTitle = prompt("Edit event title", event.title);
                  if (newTitle) {
                    updateEvent(event.id, { title: newTitle });
                  }
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
