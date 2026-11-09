"use client";

import React, { useState } from "react";
import WorkFilterNav from "./WorkFilterNav";

export default function WorkFilterClient() {
  const [active, setActive] = useState("all");

  return <WorkFilterNav activeFilter={active} onSelect={setActive} />;
}
