import React, { useRef, useState } from 'react'
// import { Input } from './Input'
// function Form(props) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(event);
//     alert(`form is: ${event.target.input}`);
//   }


//   const handleChange = (event) => {
//     const updateForm = {...Form};
//     updateForm[event.target.input] = event.target.value;
//     console.log("change:", updateForm)
//   }
 
//       return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <label>
//             {props.label}
//             <input onChange={handleChange}></input>
//           </label> 
//           <input type="submit" value="Submit"></input>
//         </form>
//       </>
//     )
// }

function Form(props) {
  // const { test } = useRef();
  // props.state = { value: ''}
  const test = useRef(null)
  const test2 = useRef(null)
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   // console.log(event.current);
  //   // const again = event.current.focus()
  //   // console.log(props.label.value)
    
  //   // alert(`form is: ${again}`);
  //   const value = event.target.value;
  //       console.log("value", value)
  //       console.log("test", test.name)
  // }
  
  const [ text, handleChanges ] = useState("")
  const [  setNew ] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault()
    // const updateForm = {...Form};
    // updateForm[event.target.input] = event.target.value;
    // console.log("change:", updateForm)
    console.log(event)
    const news = {test, test2, text};
    setNew([...news]);
    text("")
  }
  const handleChange = (event) =>
  {
    event.preventDefault()
    const value = event.target;
    const name = value.name;
    console.log("value", event.target.ref)
    console.log("value", name)
    
    console.log("value", test.current.input.name)
    console.log("test", test.name)
    
    // do something with the data
  }
  
      // const handleChanges = (event) => {
      //   console.log(event.target.value)
      // }
      return (
      <>
        <form onSubmit={handleSubmit}>
          {/* <InputField label="testing"/> */}
          {/* <label>
            {props.label}
            <input onChange={handleChange}></input>
          </label>  */}
          {/* <Input label={props.label} test={test}/> */}
          <label>
            {props.label}
            <input name={props.label} ref={test} onChange={handleChange}></input>
          </label>
          <label>
            {props.label2}
            <input name={props.label2} ref={test2} onChange={handleChange} ></input>
          </label> 
          <label>
            TESTlabel
            <input name={text} value={text} onChange={handleChanges} ></input>
          </label> 
          <input type="submit" value="Submit"></input>
        </form>
      </>
    )
}

// export const InputField = React.createContext ({
//   form: {},
//   handleChanges: () => {}
// });

// function InputField(props) {
//   const { label, name } = props;
  
//   return (
//     <label>
//       {label}
//       <input name={name} onChange={handleChange}></input>
//     </label> 
//     )
//   }



export  { Form }