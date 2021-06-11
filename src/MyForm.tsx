import React, { useState } from 'react'

type MyFormProps = {
    onSubmit : (form:{name:string, description: string}) => void;
}

const MyForm = ({onSubmit}:MyFormProps) => {
    const [form, setForm] = useState({name:'',description:''});
    const {name, description} = form; 

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target; 

        setForm({...form,
            [name]:value});
    };
    const handlerSubmit = (e: any) => {

    };

    return (
        <form onSubmit={handlerSubmit}>
            <input name='name' value={name} onChange={onChange}/>
            <input name='description' value={description} onChange={onChange}/>
        </form>
    )
}

export default MyForm
