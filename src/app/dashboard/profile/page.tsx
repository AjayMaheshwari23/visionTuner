"use client";

import { useAppContext } from "../../../contexts/AppContext";
import UploadImage from "@/components/upload/UploadImage";

export default function Profile() {
  const { state, setState } = useAppContext();
  return (
    <>
      <UploadImage />
      {/* <h1>Hello {state.user?.username}</h1> */}
    </>
  );
}
