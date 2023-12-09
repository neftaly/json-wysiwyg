import { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseOver={(e) => setHover(true)}
      onMouseOut={(e) => setHover(false)}
      style={{
        userSelect: "none",
        opacity: hover ? 1 : 0.5,
        backgroundColor: "transparent",
        fontFamily: "inherit",
        fontSize: "inherit",
        border: 0,
        padding: 0,
        margin: "0 0 0 1ch",
      }}
      {...props}
    />
  );
};

// Not wild about the placement of these buttons, but unsure where else to put them
export const Actions = ({ path, isBranch }) => (
  <div
    style={{
      marginRight: "1ch",
      display: "inline-block",
      userSelect: "none",
    }}
  >
    {isBranch && (
      <>
        <Button children="📂" title="Import JSON" />
        <Button children="💾" title="Export JSON" />
        <Button children="➕" title="Add" />
      </>
    )}
    <Button children="❌" title="Delete" />
  </div>
);

export const ExpandButton = ({ expanded, onClick }) => (
  <div
    style={{
      position: "absolute",
      width: 0,
      marginLeft: "-2ch",
    }}
  >
    <button
      children={expanded ? "▾" : "▸"}
      style={{
        userSelect: "none",
        backgroundColor: "transparent",
        fontFamily: "inherit",
        fontSize: "inherit",
        border: 0,
        padding: 0,
        margin: 0,
      }}
      onClick={onClick}
    />
  </div>
);
