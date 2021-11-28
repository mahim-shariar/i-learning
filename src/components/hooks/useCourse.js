import { useState,useEffect } from "react";

let useCourse = (JSON) =>{
    let [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch(JSON)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses,setCourses]
}

export default useCourse