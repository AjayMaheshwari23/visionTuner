'use client'
import React, { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ProjectPageIndividual from "@/components/Pages/ProjectPageIndividual";
import ExampleComponent from "@/components/flask/Example";
import { Project } from "@/app/models/user";

export default function Page() {
  const { state } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();
  const projectId = parseInt(pathname.split("/").pop() || "", 10);

  const def = state.user?.projects.find(
    (project) => project.projectId === projectId
  );
  const [CurProject, setCurProject] = useState<Project | undefined>(def);
  const [loading, setLoading] = useState(false);
  const [modelCreated, setmodelCreated] = useState(false);

  useEffect(() => {
    // Wait until state is available from useAppContext
    if (state) {
      const project = state.user?.projects.find(
        (project) => project.projectId === projectId
      );
      // console.log(project);
      
      setCurProject(project);
      setmodelCreated((CurProject?.model == "") as boolean);
    }
  }, [state, projectId]);

  return (
    <>
      <Button onClick={() => router.back()}> Go Back </Button>
      <div>
        {loading ? (
          <Spin size="large">
            {/* <div className="content" > Creating Your Project</div> */}
          </Spin>
        ) : (
          <>Model Successfully created...</>
        )}
        {CurProject && <ExampleComponent project={CurProject} loading={loading} setloading={setLoading} />}
        {CurProject && <ProjectPageIndividual project={CurProject} />}
      </div>
    </>
  );
}
