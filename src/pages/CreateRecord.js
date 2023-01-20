import { useState } from "react";

export function CreateRecordPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const clear = () => {
    setName("");
    setDescription("");
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert("Nepavyko sukurti: " + result.status);
    }
  };

  const createRecord = () => {
    fetch("/api/v1/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    })
      .then(applyResult);
  };

  return (
    <fieldset>
      <legend>Naujas įrašas</legend>

      <div>
        <label htmlFor="name">Antraštė</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="description">Tekstas</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createRecord}>Publikuoti</button>
      </div>
    </fieldset>
  );
}
