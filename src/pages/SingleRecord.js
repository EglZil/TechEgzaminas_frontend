import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CreateComment } from "./CreateComment";

export function SingleRecordPage(props) {
  const [record, setRecord] = useState("");
  const params = useParams();

  useEffect(() => {
    fetch("/api/v1/records/" + params.id)
      .then((response) => response.json())
      .then(setRecord);
  }, [params.id]);

  return (
    <div>
      <div>
        <b>Name</b>
      </div>
      <div>{record.name}</div>

      <div>
        <b>Publikuota</b>
        <div>{record.createdDate}</div>
      </div>

      <div>
        <b>Description</b>
      </div>
      <div>{record.description}</div>

      <br />
      <CreateComment />
    </div>
  );
}
