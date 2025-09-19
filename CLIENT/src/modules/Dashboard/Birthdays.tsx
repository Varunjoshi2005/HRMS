import { dummyUsers } from "@/utils";
import styles from "./birthday.module.css";
import cake from "@/assets/cake.png";

function Birthdays() {
  return (
    <div className={styles.container}>
      <span>Birthday today</span>
      <div
        style={{
          opacity: "0.7",
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img src={cake} alt="" />
        <span>No birthday today</span>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span>Upcoming birthday's</span>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {dummyUsers.map((each, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  marginTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt=""
                />
                <span>{each.name}</span>
                <span style={{ marginLeft: "auto", fontSize: "12px" }}>
                  {each.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birthdays;
