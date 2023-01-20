import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function RecordListPage(props) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("/api/v1/records")
      .then((record) => record.json())
      .then(setRecords);
  }, []);

  return (
    <div>
      {records.map((record) => (
        <div key={record.id}>
          <h2>{record.name}</h2>
          <h4>Publikuota: {record.createdDate}</h4>
          <p>{record.description}</p>
          <Link to={"/records/view/" + record.id}>Skaityti daugiau</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
