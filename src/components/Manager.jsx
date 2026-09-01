import React, { useEffect } from 'react'
import { FaRegAddressCard } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordarr, setpasswordarr] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordarr(JSON.parse(passwords))
        }

    }, [])


    const showPass = () => {
        setShowPassword(!showPassword)
    }

   const savepass = () => {
    if (
        form.site.length > 3 &&
        form.username.length > 3 &&
        form.password.length > 3
    ) {
        const newPassword = {
            ...form,
            id: uuidv4()
        }

        const updatedPasswords = [...passwordarr, newPassword]

        setpasswordarr(updatedPasswords)

        localStorage.setItem(
            "passwords",
            JSON.stringify(updatedPasswords)
        )

        setform({
            site: "",
            username: "",
            password: ""
        })

        toast("Record Saved", {
            position: "top-right",
            autoClose: 5000,
            theme: "dark",
        })
    } else {
        toast("Error: Password not saved", {
            position: "top-right",
            autoClose: 5000,
            theme: "dark",
        })
    }
}

    const Deletepass = (id) => {
        setpasswordarr(passwordarr.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordarr.filter(item => item.id !== id)))

        toast('Record Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",


        });
    }

    const editpass = (id) => {
        setform(passwordarr.filter(i=>i.id===id)[0])
        setpasswordarr(passwordarr.filter(item => item.id !== id))

          toast('Record Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",


        });
    }

    const handlesubmit = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",


        });
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                progressClassName="!bg-green-300"

            />
            <div className="relative isolate min-h-screen  pb-10">
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]  "></div></div>
            
            <div className=" p-2 md:p-0 md:container mx-auto  ">

                <h1 className='text-4xl font-bold text-center pt-20'>
                    <span className='text-green-500'> &lt;</span>
                    <span>Pass</span><span className='text-green-500'>OP/&gt; </span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter Website URL'
                        className='rounded-full border border-green-500 w-full px-4 py-1'
                        type="text"
                        value={form.site}
                        name='site'
                        onChange={handlesubmit}
                    />

                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <input
                            placeholder='Enter Username'
                            className='rounded-full border border-green-500 w-full px-4 py-1'
                            type='text'
                            value={form.username}
                            name='username'
                            onChange={handlesubmit}
                        />

                        <div className="relative">
                            <input placeholder='Enter Password'
                                className='rounded-full border border-green-500 w-full px-4 py-1'
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                name='password'
                                onChange={handlesubmit}
                            />
                            <span onClick={showPass} className='absolute right-3 top-[10px] cursor-pointer'>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}

                            </span>
                        </div>

                    </div>
                    <button
                        onClick={savepass}
                        className='w-fit flex justify-center items-center gap-1 border-2 bg-green-400 rounded-full px-8 py-2 hover:bg-green-300 hover:cursor-pointer'
                    >
                        <img src="" alt="" srcset="" />
                        <FaRegAddressCard /> Save

                    </button>
                </div>
                <div className="password">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordarr.length === 0 && <div> No Passwords To Show</div>}

                    {passwordarr.length != 0 &&
                        <table className=" table-auto w-full rounded-md overflow-hidden mb-20">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordarr.map((item, index) => {
                                    return (

                                        <tr key={index}>
                                            <td className=' py-2 text-center '>
                                                <div className=' flex items-center justify-center gap-2'>
                                                    <a href={item.site} target='_blank'>{item.site} </a>
                                                    <FaRegCopy className='cursor-pointer text-sm ' onClick={() => { copyText(item.site) }} />
                                                </div>
                                            </td>


                                            <td className=' py-2 text-center'>
                                                <div className=' flex items-center justify-center gap-2'>
                                                    {item.username} <FaRegCopy className='cursor-pointer text-sm  ' onClick={() => { (copyTexusername) }} />
                                                </div>
                                            </td>


                                            <td className=' py-2 text-center '>
                                                <div className=' flex items-center justify-center gap-2'>
                                                    {item.password} <FaRegCopy onClick={() => { copyText(item.password) }} className='cursor-ptext-sm ' />
                                                </div>
                                            </td>

                                            <td className=' py-2 text-center '>
                                                <span className='flex items-center gap-2 justify-center text-lg cursor-pointer'> <MdEdit onClick={() => { editpass(item.id) }} /> <MdDeleteOutline onClick={() => { Deletepass(item.id) }} />  </span>
                                            </td>

                                        </tr>

                                    )
                                })}

                            </tbody>
                        </table>}


                </div>
            </div>
            </div>
        </div>
    )
}

export default Manager
