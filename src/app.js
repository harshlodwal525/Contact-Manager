const todoresult= {
    result:[]
};

const toDoHandler=(event)=>{
    event.preventDefault();
     const task=event.target.elements.task.value;
     const description=event.target.elements.description.value;
     todoresult.result.push({
         taskvalue:task,
         descriptionvalue:description
     });
    console.log(todoresult.result);
    rerender();
}
const rerender=()=>{
    var template =(
        <div>
            <center>
            <p> TODO Length {todoresult.result.length}</p>
            <form onSubmit={toDoHandler} >
                Task :<input type="text" name="task"/><br/>
                Description :<input type="text" name="description"/><br/>
                <input type="submit"/>
            </form>
            </center>
            <ol>
                {todoresult.result.map((res,index)=>(
                   <li key={index}> TODO Task : {res.taskvalue} <br/> Description : {res.descriptionvalue} </li>
                 ) )}
            </ol>
        </div>
    )
    ReactDOM.render(template,document.getElementById('root'));
}
rerender();