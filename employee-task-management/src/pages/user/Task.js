import React from "react";

export default function MyModal({ visible, onClose, data }) {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose()
    }

    if (!visible) return null

    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-2 rounded">

                <div className="ml-3 mt-3 mr-3 mb-3 sm:flex sm:items-start">
                    <table>
                        <tr>
                            <h3><b>Do Excercise</b></h3>
                        </tr><br />
                        <tr>
                            <td colSpan={5}>Assigned to</td>
                            <td>Neta Aulya</td>
                        </tr><br />
                        <tr>
                            <td colSpan={5}>Date</td>
                            <td>January, 9 2020</td>
                        </tr><br />
                        <tr>
                            <td colSpan={5}>Category</td>
                            <td className="text-red-600">Priority</td>
                        </tr><br />
                        <tr>
                            <td colSpan={5}>Submit Assignment</td>
                            <td><input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" /></td>
                        </tr>
                    </table>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => handleOnClose(false)}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => handleOnClose(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}