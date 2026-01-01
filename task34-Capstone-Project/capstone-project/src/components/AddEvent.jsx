import { useFormik } from "formik";
import { Form, Button, Container } from "react-bootstrap";
import { useEvents } from "../contexts/EventContext.jsx";

export default function AddEvent() {
  const { addEvent } = useEvents();

  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventDate: "",
      time: "",
      description: "",
      location: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.eventName) {
        errors.eventName = "Required";
      }

      if (!values.eventDate) {
        errors.eventDate = "Required";
      }

      if (!values.time) {
        errors.time = "Required";
      }

      if (!values.description) {
        errors.description = "Required";
      }

      if (!values.location) {
        errors.location = "Required";
      }

      return errors;
    },
    onSubmit: (values) => {
      addEvent({
        title: values.eventName,
        date: values.eventDate,
        time: values.time,
        description: values.description,
        location: values.location,
      });
      alert("Event added successfully");
      formik.resetForm();
    },
  });

  return (
    <Container className="form-container mt-5 pt-4">
      <h2>Add Event</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="eventName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            name="eventName"
            placeholder="Enter event name"
            onChange={formik.handleChange}
            value={formik.values.eventName}
          />
          {formik.errors.eventName && (
            <p className="text-danger">{formik.errors.eventName}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="eventDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="eventDate"
            onChange={formik.handleChange}
            value={formik.values.eventDate}
          />
          {formik.errors.eventDate && (
            <p className="text-danger">{formik.errors.eventDate}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            onChange={formik.handleChange}
            value={formik.values.time}
          />
          {formik.errors.time && (
            <p className="text-danger">{formik.errors.time}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Enter event description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && (
            <p className="text-danger">{formik.errors.description}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Enter event location"
            onChange={formik.handleChange}
            value={formik.values.location}
          />
          {formik.errors.location && (
            <p className="text-danger">{formik.errors.location}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Event
        </Button>
      </Form>
    </Container>
  );
}
