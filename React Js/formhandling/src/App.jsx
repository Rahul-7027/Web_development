import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    await delay(2)
    let fetch = await fetch("http://localhost:3000/")
    let newData = fetch.json();
    console.log(newData)
  }

  console.log(watch("example"))

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input  {...register("example")} /><br /><br />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true, minLength: 4, maxLength: 20 })} /><br /><br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  )
}

export default App
