import { useState } from "react";

export function CreateComment() {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const clear = () => {
    setAuthor("");
    setComment("");
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert("Nepavyko sukurti: " + result.status);
    }
  };

  const createComment = () => {
    fetch("/api/v1/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        comment,
      }),
    })
      .then(applyResult);
  };

  return (
    <fieldset>
      <legend>Palikti komentarą</legend>

      <div>
        <label htmlFor="author">Autorius</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="comment">Komentaras</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createComment}>Publikuoti</button>
      </div>
    </fieldset>
  );
}
