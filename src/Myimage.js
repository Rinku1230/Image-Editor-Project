import { upload } from '@testing-library/user-event/dist/upload';
import React, { useEffect, useState } from 'react'

function Myimage(props) {
    const [image, setImage] = useState([])
    const [update, setUpdate] = useState(1)
    useEffect(()=>{
        if(sessionStorage.getItem("imageArray")){
            let sessionData = JSON.parse(sessionStorage.getItem("imageArray"));
            setImage(sessionData)
        }
    })
    const handlechange=(e,i)=>{
        let Array =image;
        Array.push(URL.createObjectURL(e.target.files[0]))
        setImage(Array)
        console.log(Array);
        setUpdate(update+1)  
        sessionStorage.setItem('imageArray',JSON.stringify(Array))
    }
    const deleteimage=(e,i)=>{
        const sessionData = JSON.parse(sessionStorage.getItem("imageArray"))
        sessionData.splice(i,1)
        sessionStorage.setItem("imageArray",JSON.stringify(sessionData))
        setUpdate(update+1)

    }
    return (
        <div>
            <center><div className='container'>
                <div className='row'>
                    <h1>Preview</h1>
                    <div className='col-md-12 mt-5 '>
                        <input type='file' onChange={handlechange} className='form-control' />

                    </div>
                </div>

            </div>
            </center>
            <center>
            <div className='row container mt-5'>
                <center>
                {
                    image.map((e, i) => {
                        return (
                            <div  className='col-md-3 btn btn-info m-3' >
                                <div key={i} >
                                    <img width={200} onClick={()=>props.setselect(e)} height={150} src={e} />
                                    <button className='btn btn-danger' onClick={()=>deleteimage(e,i)} style={{ height:"30px",marginBottom:"120px"}}>X</button>
                                </div>
                              </div>
                        )
                    })
                }
                </center>
            </div>
            </center>
        </div>

    )
}

export default Myimage
