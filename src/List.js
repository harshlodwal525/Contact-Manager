import React from "react";
class List extends React.Component {
    constructor() {
        super();
        this.state = { isPrior: "Add Close Contact",
        favbtnColor: true              };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isPrior === "Add Close Contact") {
            this.setState(() => ({ isPrior: "Remove From Close Contact",favbtnColor: !this.state.favbtnColor}))
        }
        else {
            this.setState(() => ({ isPrior: "Add Close Contact",favbtnColor: !this.state.favbtnColor}))
        }
    }

  
    render() {
       
       
        let btn_class = this.state.favbtnColor ? "btn btn-info" : "btn btn-warning";
        return (

            <tr>
                <td>{this.props.contactList.Contact_Name}</td>
                <td>{this.props.contactList.Contact_Number}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.deleteContactList(this.props.index);
                    }}>Delete</button>
                    &nbsp;

                    <button id="priorbtn" className={btn_class} onClick={this.handleClick}>{this.state.isPrior}</button>   
                </td>
            </tr>
        );

    }
}
export default List;