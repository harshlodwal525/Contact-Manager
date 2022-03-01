import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";
import ContactForms from "./ContactForms";
import ContactList from "./ContactList";

class ContactManager extends React.Component {
    constructor(props) {
        super(props);
        this.contactHandleManager = this.contactHandleManager.bind(this);
        this.deleteContactList = this.deleteContactList.bind(this);
        this.deleteAllContactList = this.deleteAllContactList.bind(this);
        this.state = {
            title: "Contact Manager",
            description: props.description,
        };
    };

    componentDidMount() {
        const descriptionString = localStorage.getItem('description');
        if(descriptionString){
        const description = JSON.parse(descriptionString);
        this.setState(() => ({
            description,
        }))
    }
    }
    componentDidUpdate(prevProps, prevState) {
        let currentdescription = this.state.description;
        console.log(this.state.description)
        localStorage.setItem('description', JSON.stringify(currentdescription));
    }
    componentWillUnmount() {
        console.log('I AM UNMOUNTED');
    }

    contactHandleManager(inputTitle, inputSubTitle) {
        this.setState((prevState) => {
            return {
                description: [
                    ...prevState.description,
                    {
                        Contact_Name: inputTitle,
                        Contact_Number: inputSubTitle
                    },
                ],
            };
        });
    }
    deleteContactList(deleteIndex) {
        this.setState((prevState) => {
            return {
                description: prevState.description.filter((totalList, index) => index !== deleteIndex)
            }
        })
    };

    deleteAllContactList() {
        this.setState(() => {
            return {
                description: []
            }
        })
    };

    render() {
        return (
            <div>
                <Title title={this.state.title} totalCount={this.state.description} />
                <ContactForms contactHandleManager={this.contactHandleManager} />
                <ContactList totalList={this.state.description} deleteContactList={this.deleteContactList} deleteAllContactList={this.deleteAllContactList} />
            </div>
        );
    }
}

ReactDOM.render(<ContactManager description={[]} />, document.getElementById("root"));