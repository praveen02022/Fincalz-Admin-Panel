import type { NextPage } from 'next'
const Mytask: NextPage = () => {
    const sample = [1,2,3]
    localStorage.setItem("lastname", JSON.stringify(sample));
    const teest =localStorage.getItem("lastname")
    console.log(teest);
    
    return (
        <div>
           <h1>My Task</h1>
        </div>
    )
}

export default Mytask;
