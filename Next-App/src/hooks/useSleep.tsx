interface useSleepProps {
  duration: number;
}

const useSleep = async (props: useSleepProps):Promise<boolean> => 
{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("useSleep is Resolved");
            resolve(true);
        }, props.duration);
    })
  
};

export default useSleep;