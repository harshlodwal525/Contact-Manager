import React from "react";
import List from "./List";
const ContactList = (props) => {
        return (
            <div>
                <center>
                    <div>{props.totalList.length > 0 ? "" : 'Please ADD Some New Contacts to Your ContactList'}</div>
                    <button className="btn btn-danger" onClick={() => { props.deleteAllContactList() }} disabled={props.totalList.length === 0} >Delete All Contacts</button><br />
                    <br />
                    {props.totalList.length > 0 && (
                        <table className="table table-info table-striped">
                            <thead>
                                <tr>
                                    <th>Contact Name</th>
                                    <th>Contact Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.totalList.map((items, index) => (
                                    <List key={index.toString()} contactList={items} index={index} deleteContactList={props.deleteContactList} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </center>
            </div>
        );
 }
export default ContactList;