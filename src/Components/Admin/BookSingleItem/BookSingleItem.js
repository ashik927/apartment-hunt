import React from "react";

const BookSingleItem = ({ item }) => {
    const { name, email, phone, message, status } = item;

    function statusColor(status) {
        if (status === "Pending") {
            return "pending";
        }
        if (status === "On Going") {
            return "on-going";
        }
        if (status === "Done") {
            return "done";
        }
    }

    return (
        <tr>
            <td> {name} </td>
            <td> {email} </td>
            <td> {phone} </td>
            <td> {message} </td>
            <td>
                <select name="status" className={statusColor(status)}>
                    <option
                        value="Pending"
                        selected={status === "Pending" ? "selected" : ""}
                    >
                        Pending
                    </option>
                    <option
                        value="On Going"
                        selected={status === "On Going" ? "selected" : ""}
                    >
                        On Going
                    </option>
                    <option
                        value="Done"
                        selected={status === "Done" ? "selected" : ""}
                    >
                        Done
                    </option>
                </select>
            </td>
        </tr>
    );
};

export default BookSingleItem;
