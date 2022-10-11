import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import {v4} from 'uuid'
export default function Modal({ show, setShow }) {
    const [imageUpload,setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, "images/")

    const uploadImage = () => {
        if (imageUpload === null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
       uploadBytes(imageRef, imageUpload).then(() => alert('Image Uploaded'))

    }
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    },[])
  return (
    <>
      {show ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 bg-gradient-to-tl from-cyan-700 via-slate-700 to-indigo-800 text-white rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h1 className="font-bold text-xl">Upload Your Photo! </h1>
                </div>
                {/*body*/}
                <div className="flex flex-col items-center">
                  <input type='file' onChange={(event) => setImageUpload(event.target.files[0])}/>
                  <div className="my-2">
                    <h1 className="font-semibold">Caption</h1>
                    <input type="text" className="bg-transparent border rounded px-2 py-1 focus:outline-none" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={uploadImage}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
