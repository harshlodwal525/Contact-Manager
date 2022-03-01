import React from "react";
class ContactForms extends React.Component {
    constructor(props) {
        super(props);
        this.contactHandleManager = this.contactHandleManager.bind(this);
        this.state = {
            error: '',
        }
        this.state = {
            error1: '',
        }
    }
    contactHandleManager(event) {
        event.preventDefault();
        var inputTitle = event.target.elements.contactName.value.trim();
        var inputSubTitle = event.target.elements.contactNumber.value.trim();
        if (!(inputTitle)) {
            this.setState(() => ({ error: ' * Please Add Name' }));
            return;
        }
        else if (!inputSubTitle) {
            this.setState(() => ({ error1: ' * Please Add Number' }));
            return;
        }

        this.setState(() => ({ error: '' }))
        this.setState(() => ({ error1: '' }))

        this.props.contactHandleManager(inputTitle, inputSubTitle);

        event.target.elements.contactName.value = "";
        event.target.elements.contactNumber.value = "";
    };

    render() {
        return (
            <div>
                <center>
                    <br />
                    <img src="https://thumbs.gfycat.com/MatureGiganticAlbertosaurus-max-1mb.gif" alt="ERROR" width="350" height="250"></img>
                    <br />
                    <form onSubmit={(event) => { this.contactHandleManager(event) }}>
                        Contact Name:    <input className="form-control" type="text" name="contactName" /> <br />
                        <br />
                        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                        Contact Number: <input className="form-control" type="tel" name="contactNumber" pattern="[0-9]{10}"  />
                         <br />
                        <br />
                        {this.state.error1 && <p style={{ color: 'red' }}>{this.state.error1}</p>}
                        <input className="btn btn-info" type="submit" />

                    </form>
                    <br />
                </center>
            </div>
        );
    }
}
export default ContactForms;