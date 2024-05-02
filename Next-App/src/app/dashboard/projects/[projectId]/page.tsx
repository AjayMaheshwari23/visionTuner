'use client'
import React, { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ProjectPageIndividual from "@/components/Pages/ProjectPageIndividual";
import ExampleComponent from "@/components/flask/Example";
import { Project } from "@/app/models/user";
import {BackwardOutlined } from "@ant-design/icons"
import Curves from '@/components/Curves/Curves'
import Curves2 from '@/components/Curves/Curves2'

export default function Page() {
  const { state } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();
  const projectId = parseInt(pathname.split("/").pop() || "", 10);
  console.log("in [] page projectId is " + projectId);
  
  const def = state.user?.projects.find(
    (project) => project.projectId == projectId
  );
  console.log(def);
  
  const [CurProject, setCurProject] = useState<Project | undefined>(def);
  const [loading, setLoading] = useState(0);

  const [modelCreated, setmodelCreated] = useState(
    (CurProject?.model === "") as boolean
  );

  useEffect(() => {
    if (state) {
      const project = state.user?.projects.find(
        (project) => project.projectId === projectId
      );
      
      setCurProject(project);
      console.log(CurProject?.model);
      
      const op = (CurProject?.model != "") as boolean;
      if (op) setLoading(2);
    }
  }, [state, projectId]);

  return (
    <>
      <Button style={ { margin:"10px" } } onClick={() => router.back()} icon={<BackwardOutlined /> }> Go Back </Button>
      <div>
        {CurProject && <ProjectPageIndividual project={CurProject} />}
        {CurProject && (
          <ExampleComponent
            project={CurProject}
            loading={loading}
            setloading={setLoading}
            setmodelCreated={setmodelCreated}
            modelCreated={modelCreated}
          />
        )}
        {loading==2 && <Curves loading={loading} username={state.user?.username} projectId={CurProject?.projectId} />}
        {/* {loading==2 && <Curves2 loading={loading} username={state.user?.username} projectId={CurProject?.projectId} />} */}
      </div>
    </>
  );
}
