import { ImageObj } from "../upload/UploadImage";
import AnnotateTool from "../../app/dashboard/testing/page";
import { Dispatch, useEffect } from "react";
import { AnnotationObj } from "@/app/models/user";

interface Props {
  images: ImageObj[];
  data: any;
  annotations: AnnotationObj[];
  setannotations: Dispatch<React.SetStateAction<AnnotationObj[]>>;
}

const Third = ({ images, data, annotations, setannotations }: Props) => {
  const { Title_of_Project, Description, CategoryCount, categories_list } =
    data;

  console.log(annotations);

  useEffect(() => {
    console.log("Ues effect Re-rendered the THird Component");
  }, [images, data]);

  return (
    <>
      <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <h1>{Title_of_Project ? Title_of_Project : "Title_of_Project"} </h1>
      </div>
      <AnnotateTool
        images={images}
        data={data}
        annotations={annotations}
        setannotations={setannotations}
      />
      {/* {images.map((val) => {
          return (
            <>
              <h2>{val.url}</h2>
            </>
          );
        })} */}
    </>
  );
};

export default Third;
