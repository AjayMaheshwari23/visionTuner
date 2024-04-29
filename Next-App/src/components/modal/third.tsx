import { ImageObj } from "../upload/UploadImage";
import AnnotateTool from "../annotateTool/page";
import { useEffect } from "react";

interface Props {
    images: ImageObj[];
    data:any
}

const Third = ( { images , data  } : Props ) => 
    {
          const {
            Title_of_Project,
            Description,
            CategoryCount,
            categories_list,
          } = data;

          useEffect( () => {
                console.log("Ues effect Re-rendered the THird Component");
          },[images,data])

    return (
      <>
        <h1>{Title_of_Project ? Title_of_Project : "Title_of_Project"} </h1>
        {images.map((val) => {
          return (
            <>
              <h2>{val.url}</h2>
            </>
          );
        })}
      </>
    );
}

export default Third;