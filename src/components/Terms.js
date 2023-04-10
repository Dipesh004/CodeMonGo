import React from 'react'
import TopNavbar from './Nav/TopNavbar';
import Footer from "./Sections/Footer"

function Terms() {
  return (
    <>
      <TopNavbar />
      <div
        style={{
          marginTop: "12vh",
          textAlign: "center",
          color: "white",
          background: "#2c70b3",
        }}
      >
        <div style={{ height: "4vh" }}></div>
        <h1 style={{ marginBottom: "2rem" }}>Terms and Conditions:</h1>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            1. The contest is open to individuals who are at least 18 years of
            age or older at the time of entry. Participants must also have a
            valid email address to enter the contest.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            2. To enter the contest, participants must follow the specific
            guidelines provided by the organizers. The entry must be original
            and created by the participant. Only one entry per participant is
            allowed.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            3. Participants will be judged based on the creativity, technical
            skill, and overall quality of the frontend development work. The
            judges’ decisions are final and binding.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            4. The prizes for the contest will be specified by the organizers.
            Winners will be notified by email and must respond within 7 days to
            claim their prize. Failure to respond within the specified time
            period will result in forfeiture of the prize.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            5. By submitting their entry, participants agree to grant the
            organizers a non-exclusive, royalty-free, worldwide, perpetual
            license to use, modify, and display the work in any media or format
            for promotional purposes related to the contest.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            6. The organizers reserve the right to disqualify any entry that
            violates these terms and conditions or the spirit of the contest,
            including entries that contain offensive, discriminatory, or
            plagiarized material.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            7. Organizers are not responsible for any injury, loss, or damage of
            any kind resulting from participation in the contest. Participants
            agree to indemnify and hold the organizers harmless from any claims
            or damages arising from their entry or participation in the contest.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            8. The organizers reserve the right to cancel or modify the contest
            at any time for any reason without liability.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            9. The organizers will collect and process participants’ personal
            information for the purpose of administering the contest. The
            organizers will handle all personal information in accordance with
            applicable data protection laws and their own privacy policy.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            10. The contest shall be governed by and construed in accordance
            with the laws of the jurisdiction in which the organizers are
            located.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            11. By submitting their entry, participants agree to be bound by
            these terms and conditions.
          </p>
        </div>
        <div style={{ height: "4vh" }}></div>
      </div>
      <Footer />
    </>
  );
}

export default Terms