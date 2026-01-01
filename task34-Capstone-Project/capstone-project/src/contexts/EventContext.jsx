import { createContext, useContext, useState } from "react";

const EventContext = createContext(null);

export function useEvents() {
  return useContext(EventContext);
}

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => [...prev, { ...event, id: Date.now() }]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, ...updatedEvent } : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
}
