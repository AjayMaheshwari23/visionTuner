import Image from "next/image";
import WIP from '../../../public/assets/images/WIP.png'

const AnnotateTool = () =>  {
    return (
        <>
            <Image alt="WORK in Progress" src={WIP}/>
        </>
    )
}

export default AnnotateTool;