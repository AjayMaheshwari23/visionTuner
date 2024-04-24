"use client";
import { Button } from "antd";
import { useAppContext } from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ProjectPageIndividual from "@/components/Pages/ProjectPageIndividual";
import { Spin, Progress } from "antd";
import { useEffect, useState } from "react";

export default function Page()
 {
   const { state } = useAppContext();
   const router = useRouter();
   const pathname = usePathname();
   const projectId = parseInt(pathname.split("/").pop() || "", 10);
   
   const CurProject = state.user?.projects.find(
     (project) => project.projectId == projectId
    );
    console.log(CurProject);
    
    const [loading,setloading] = useState((CurProject?.model == '') as boolean);
    // useEffect( () => {      
    //   if(!loading) return;

    //    try {
    //    } catch (err) {
    //      console.log(err);
    //    } finally {
    //      setloading(false);
    //    }
       
    // },[])
  // console.log(CurProject);

  return (
    <>
      <Button onClick={() => router.back()}> Go Back </Button>
      <div>

      {loading ? (
        <>
          <Spin tip="Loading" size="large">
            {/* <div className="content" > Creating Your Project</div> */}
          </Spin>
        </>
      ) : (
        <>Model Succesfully created...</>
      )}


      {CurProject && <ProjectPageIndividual project={CurProject} />}

      </div>
    </>
  );
}
