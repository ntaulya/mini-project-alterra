import React from "react";
import adminpic from '../img/picadmin.jpeg'

function Profile() {
    return (
        <>
            <div className="container emp-profile">
                <div class=" display: inline; max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img class="w-full" src={adminpic} alt="AdminPic" /> */}
                        <div class="px-6 py-4 ">
                            <div class="font-bold text-xl mb-2">Neta Aulya Kurnia Ningrum</div>
                            <h6>Admin</h6>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Profile