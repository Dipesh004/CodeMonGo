import React from 'react'
import TopNavbar from './Nav/TopNavbar';
import Footer from './Sections/Footer'

function Refund() {
  return (
    <>
      <TopNavbar aboutUs="/" />
      <div
        style={{
          marginTop: "12vh",
          textAlign: "center",
          background: "white",
          color: "#2c70b3",
        }}
      >
        <div style={{ height: "20px" }}></div>
        <h4 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          Cancellation and Refund Policy for CodeMongo
        </h4>
        <p style={{ width: "80%", margin: "auto", marginBottom: "3rem" }}>
          The following cancellation and refund policy applies to the CodeMongo
          coding competition, hosted by OCPL Tech. By registering for the event,
          you agree to the terms and conditions outlined in this policy.
        </p>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Terms and Conditions:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. Participant Cancellation: If a participant wishes to cancel their
            registration, they must notify the CodeMongo team via email at
            info@ocpl.tech no later than 14 days before the competition start
            date. Cancellations made before this deadline will be eligible for a
            full refund, minus any transaction fees.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            B. Event Cancellation: In the unlikely event that CodeMongo must be
            canceled due to unforeseen circumstances, such as natural disasters,
            health emergencies, or other force majeure situations, participants
            will be notified as soon as possible. In such cases, registered
            participants will receive a full refund, minus any transaction fees.
          </p>
        </div>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Terms and Refunds:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. Eligible Refunds: Refunds will only be granted to participants
            who cancel their registration within the specified timeframe or in
            case of event cancellation. Refunds will be processed within 30 days of the cancellation request or event
            cancellation notification.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            B. Non-Eligible Refunds: No refunds will be issued for cancellations
            made after the specified deadline or for participants who fail to
            attend the competition without prior notice.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            C. Refund Method: Refunds will be processed using the original
            payment method.Participants should allow 7-14
            days for the refund to appear on their bank or credit card
            statement.
          </p>
        </div>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Modifications:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. Registration Transfer: If a participant is unable to attend
            CodeMongo, they may transfer their registration to another eligible
            participant. The original registrant must notify the CodeMongo team
            via email at info@ocpl.tech with the new participant's full name,
            email address, and contact information no later than 7 days before
            the competition start date. No registration transfers will be
            accepted after this deadline.
          </p>
        </div>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Partial Refunds:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. In the case of multi-tiered or multi-day events, participants may
            request partial refunds for specific portions of the event they are
            unable to attend. Requests for partial refunds must be made in
            writing to info@ocpl.tech no later than 14 days before the
            competition start date.
          </p>
        </div>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Discounted Registrations:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. Discounted registrations, such as those provided to students or
            early-bird registrants, are non-refundable. However, they may be
            transferred to another eligible participant, following the
            registration transfer procedure mentioned in section 3.
          </p>
        </div>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Team Registrations:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. If a team withdraws from the competition, the entire team must
            notify the CodeMongo team via email at info@ocpl.tech no later than
            14 days before the competition start date. In such cases, the team
            may be eligible for a full or partial refund, minus any transaction
            fees, at the discretion of the CodeMongo team.
          </p>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            B. Individual team members who wish to withdraw from the competition
            must follow the participant cancellation policy outlined in section
            1.
          </p>
        </div>
        <h5
          style={{
            marginBottom: "1.5rem",
            textAlign: "left",
            marginLeft: "10%",
          }}
        >
          Code of Conduct:
        </h5>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "1rem auto", width: "80%" }}>
            A. Participants who violate the Code of Conduct or engage in any
            form of cheating, harassment, or other misconduct may be
            disqualified from the competition at the discretion of the CodeMongo
            team. In such cases, no refunds will be issued. By registering for
            CodeMongo, you acknowledge that you have read, understood, and
            agreed to this cancellation and refund policy, including any
            additional clauses. If you have any questions or concerns, please
            contact the CodeMongo team at info@ocpl.tech.
          </p>
        </div>
      </div>
      <Footer footer="navbar" offset={-1500} />
    </>
  );
}

export default Refund