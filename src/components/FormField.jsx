import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "centre",
        gap: "2px",
        marginBottom: "2px",
      }}
    >
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#111827",
        }}
      >
        {LabelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          style={{
            fontWeight: "600",
            fontSize: "0.75rem",
            background: "#ECECF1",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "5px",
            color: "#000000",
          }}
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      style={{
        background: "#F9FAFB",
        borderColor: "#D1D5DB",
        color: "#111827",
        fontSize: "0.875rem",
        borderRadius: "0.375rem",
        border: "1px solid #D1D5DB", // Added border property
        outline: "none",
        display: "block",
        width: "100%",
        padding: "0.75rem",
      }}
    />
  </div>
);

export default FormField;
