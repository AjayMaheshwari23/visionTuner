"use client";

import { useAppContext } from "../../../contexts/AppContext";

export default function Profile() {
  const { state, setState } = useAppContext();
  return (
    <>
      <h1>Hello {state.user?.username}</h1>
    </>
  );
}
