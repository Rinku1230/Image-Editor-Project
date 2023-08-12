import React, { useEffect, useState } from 'react'
import { saveAs } from 'file-saver';

function Editor(props) {
    const [values, setValues] = useState({
        Saturation: null,
        Brightness: null,
        Grayscale: null,
        Hue: null,
        Blur: null,
        Contrast: null,
        Sepia: null,

    })

    // const handlerange = (e) => {
    //     let value = e.target.value;
    //     let element = document.getElementById("image").style;
    //     if (e.target?.name == "Saturation") {
    //         element.filter = `saturate(${value})`;
    //         setValues({ ...values, Saturation: value })
    //     } else if (e.target?.name == "Brightness") {
    //         element.filter = `brightness(${value / 10})`;
    //         setValues({ ...values, Brightness: value })
    //     } else if (e.target?.name == "Grayscale") {
    //         element.filter = `grayscale(${value})`;
    //         setValues({ ...values, Grayscale: value })
    //     } else if (e.target?.name == "Hue") {
    //         element.filter = `hue-rotate(${value * 3.6}deg)`;
    //         setValues({ ...values, Hue: value })
    //     } else if (e.target?.name == "Blur") {
    //         element.filter = `blur(${value / 10}px)`;
    //         setValues({ ...values, Blur: value })
    //     } else if (e.target?.name == "Contrast") {
    //         element.filter = `contrast(${value})`;
    //         setValues({ ...values, Contrast: value })
    //     } else if (e.target?.name == "Sepia") {
    //         element.filter = `sepia(${value / 100})`;
    //         setValues({ ...values, Sepia: value })
    //     }
    // }

    const handlerange = (e) => {
        let value = e.target.value;
        if (e.target?.name == "Saturation") {
            setValues({ ...values, Saturation: value / 100 * 3 })
        } else if (e.target?.name == "Brightness") {
            setValues({ ...values, Brightness: value / 100 * 3 })
        } else if (e.target?.name == "Grayscale") {
            setValues({ ...values, Grayscale: value / 100 })
        } else if (e.target?.name == "Hue") {
            setValues({ ...values, Hue: value })
        } else if (e.target?.name == "Blur") {
            setValues({ ...values, Blur: value })
        } else if (e.target?.name == "Contrast") {
            setValues({ ...values, Contrast: value })
        } else if (e.target?.name == "Sepia") {
            setValues({ ...values, Sepia: value })
        }

    }


    useEffect(() => {

        console.log("object")
        let element = document.getElementById("image").style;
        const filterStr = `${values.Saturation ? `saturate(${values.Saturation})` : "saturate(1)"}
                           ${values.Brightness ? `brightness(${values.Brightness})` : "brightness(1)"} 
                           ${values.Grayscale ? `grayscale(${values.Grayscale})` : "grayscale(0)"} 
                           `

        console.log(filterStr)
        element.filter = filterStr

    }, [values])


    const Clickdownload = () => {
        let url = `${props.select}`
        saveAs(url, "Twitter-logo");

    }
    return (
        <>
            <div className="row">
                <div className='col-md-2 m-1 btn btn-info'><h3>Saturation</h3><img src={props.select} height={50} width={50} /> <input defaultValue={1} name='Saturation' onChange={handlerange} type='range' />
                    <p>{values.Saturation}</p>
                </div>
                <div className='col-md-2 m-1 btn btn-dark'><h3>Brightness</h3><img src={props.select} height={50} width={50} /><input defaultValue={1} name='Brightness' onChange={handlerange} type='range' />
                    <p>{values.Brightness}</p>

                </div>

                <div className='col-md-2 m-1 btn btn-dark'><h3>Grayscale</h3><img src={props.select} height={50} width={50} /><input name='Grayscale' onChange={handlerange} type='range' />
                    <p>{values.Grayscale}</p>
                </div>

                <div className='col-md-2 m-1 btn btn-dark'><h3>Hue</h3><img src={props.select} height={50} width={50} /><input name='Hue' onChange={handlerange} type='range' />
                    <p>{values.Hue}</p>
                </div>
                <div className='col-md-2 m-1 btn btn-dark'><h3>Blur</h3><img src={props.select} height={50} width={50} /><input name='Blur' onChange={handlerange} type='range' />
                    <p>{values.Blur}</p>
                </div>
                <div className='col-md-2 m-1 btn btn-dark'><h3>Contrast</h3><img src={props.select} height={50} width={50} /><input name='Contrast' onChange={handlerange} type='range' />
                    <p>{values.Contrast}</p>
                </div>
                <div className='col-md-2 m-1 btn btn-dark'><h3>Sepia</h3><img src={props.select} height={50} width={50} /><input name='Sepia' onChange={handlerange} type='range' />
                    <p>{values.Sepia}</p>
                </div>

            </div>
            <center>
                <button style={{ float: "right", width: "100px" }} onClick={() => props.setselect("")} className='btn btn-outline-danger'>X</button>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <img id="image" src={props.select} height={400} />
                    </div>
                </div>
                <button onClick={Clickdownload} className='btn btn-success'>Download</button>
            </center>
        </>
    )
}

export default Editor
