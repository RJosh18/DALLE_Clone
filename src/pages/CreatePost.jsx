import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {};
  const handleSurpriseMe = () => {};
  return (
    <section
      style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto" }}
    >
      <div>
        <h1
          style={{
            fontStyle: "bold",
            color: "#222328",
            fontWeight: "900",
            fontSize: "25px",
          }}
        >
          Create
        </h1>
        <p
          style={{
            marginTop: "0.5rem",
            color: "666e75",
            fontSize: "14px",
            maxWidth: "650px",
          }}
        >
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>
      <form
        style={{ marginTop: "4rem", maxWidth: "48rem" }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            marginTop: "1.25rem",
            flexDirection: "column",
          }}
        >
          <FormField
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="Rachel Bing"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
