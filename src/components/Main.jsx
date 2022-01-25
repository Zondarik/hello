import moment from "moment";

function Main() {

    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(time);
    

    return (
        <div>
            {time}
        </div>
    )
}

export default Main;

