import { useEffect } from "react"

const usePageTitleName = title =>{
    useEffect(()=>{
        document.title = `${title} | Learn Sports`
    },[title])
}
export default usePageTitleName;