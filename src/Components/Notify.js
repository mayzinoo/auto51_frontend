// import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notify = (text, timer) => { 
    var newToast = toast.info(text, {
    position: "top-right",
    closeButton: true,
    closeOnClick: false,
    autoClose: timer,
  })
//   setTimeout( function() {
//     toast.dismiss(newToast)
//   }, 5000)
};

export default Notify;