import React from "react";

export default function Help() {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>Help Section</h1>

      <h2>Navigating the App</h2>
      <p>
        Use the navigation links at the top to access different sections of the
        app, including the Dashboard and Add Event pages.
      </p>

      <h2>Adding Events</h2>
      <p>
        To add a new event, go to the Add Event page and fill out the form with
        the event details. Make sure to provide all required information.
      </p>

      <h2>Managing Events</h2>
      <p>
        On the Dashboard, you can view your upcoming events. You can delete or
        update events using the respective buttons next to each event.
      </p>

      <h2>Registering an Account</h2>
      <p>
        To register an account, click the "Register" link in the top right
        corner of the navigation bar. Fill out the registration form with your
        details and submit it to create your account.
      </p>

      <h2>Logging In</h2>
      <p>
        To log in to your account, click the "Login" link in the top right
        corner of the navigation bar. Enter your username and password and click
        "Login".
      </p>

      <h2>Tips for Organising Events</h2>
      <ul>
        <li>Plan ahead and set clear dates and times for your events.</li>
        <li>
          Provide detailed descriptions to inform attendees about the event.
        </li>
        <li>Regularly update your events to keep information current.</li>
      </ul>
    </div>
  );
}
