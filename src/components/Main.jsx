import moment from "moment";

function Main() {

    const time = moment().format("HH:mm"); 
    const date = moment().format("DD.MM.YYYY"); 
    console.log(time);
    

    return (
        <div className="center border">
            <h1>{time}</h1>
            <h1>{date}</h1>
        </div>
    )
}

export default Main;

