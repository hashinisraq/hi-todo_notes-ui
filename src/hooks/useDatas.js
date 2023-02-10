import { useEffect, useState } from "react";

const useDatas = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://todo-hi-server-opgv.onrender.com/datas')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [datas])

    return [datas, setDatas];
}

export default useDatas;