

function NestedProps(props) {
    return(
        <div className="Coment">
            <div className="UserInfo">
                
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Coment-text">
                {props.text}
            </div>
            <div className="Coment-date">
                {props.date}
            </div>
        </div>
    );
}



export default NestedProps;