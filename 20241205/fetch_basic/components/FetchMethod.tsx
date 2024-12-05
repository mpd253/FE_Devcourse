import React from "react";

export default function FetchMethod() {
  const postHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "3", title: "a title", views: 100 }),
      });

      if (!res.ok) {
        throw new Error("Failed to post");
      }

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/3", {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete");
      }

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const putHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "a new title", views: 200 }),
      });

      if (!res.ok) {
        throw new Error("Failed to put");
      }

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const patchHandler = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts/1", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "a patch title" }),
      });

      if (!res.ok) {
        throw new Error("Failed to patch");
      }

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button onClick={postHandler}>POST</button>
      <button onClick={deleteHandler}>DELETE</button>
      <button onClick={putHandler}>PUT</button>
      <button onClick={patchHandler}>PATCH</button>
    </>
  );
}
