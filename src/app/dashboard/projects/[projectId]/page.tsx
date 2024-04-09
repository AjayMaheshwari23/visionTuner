'use client'
import { Button } from "antd";
import { useAppContext } from "@/contexts/AppContext";
import { Project } from "@/app/models/user";
import { useRouter } from "next/navigation";
import ProjectPageIndividual from "@/components/Pages/Projects";

export default function Page({ params }: { params: { projectId: string } }) {

  const router = useRouter();
  const {state} = useAppContext();
  const CurProject : Project | undefined = state.user?.projects[params.projectId as unknown as number];
  return (
    <>
      <Button onClick={() => router.back()}> Go Back</Button>
      { CurProject && <ProjectPageIndividual project={CurProject} />}
    </>
  );
}
