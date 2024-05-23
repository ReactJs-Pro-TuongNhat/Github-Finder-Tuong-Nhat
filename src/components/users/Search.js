import axios from "axios";
import React, { useState, useEffect } from "react";
import Users from "./Users";
import { searchUsers } from "../../apis/api";

const Search = () => {
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedText = sessionStorage.getItem("searchText");
        if (storedText) {
            setText(storedText);
            searchUsers(storedText).then((data) => {
                setUsers(data.items);
            });
        }
    }, []);

    const clearUsers = () => {
        setText("");
        setUsers([]);
        sessionStorage.removeItem("searchText");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            searchUsers(text).then((data) => {
                setUsers(data.items);
                sessionStorage.setItem("searchText", text);
            });
            setText("");
        }
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={onChange}
                />

                <input
                    type="submit"
                    value="Search"
                    className="btn btn-success btn-block"
                />
            </form>
            {users.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}>
                    Clear
                </button>
            )}
            <Users users={users} />
        </div>
    );
};

export default Search;
