import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, live, notes }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4><strong>{title}</strong></h4>
          <span><em>{description}</em></span>

          {/* Live Link */}
          {live && (
            <div style={{ marginTop: "8px" }}>
              🔗 <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontSize: "14px",
                }}
              >
                Live Link
              </a>
            </div>
          )}

          {/* Notes */}
          {notes && (
            <div style={{ marginTop: "10px", fontSize: "13px", lineHeight: "1.4" }}>
              {notes.map((note, i) => (
                <div key={i}>• {note}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Always visible title */}
      <div
        style={{
          textAlign: "center",
          marginTop: "16px",
          marginBottom: "32px",
          padding: "0 12px",
        }}
      >
        <h5
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: "17px",
            lineHeight: "1.4",
            wordBreak: "break-word",
          }}
        >
          {title}
        </h5>
      </div>
    </Col>
  );
};
